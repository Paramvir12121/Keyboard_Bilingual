# Fetch Secret Manager Secret
data "google_secret_manager_secret" "my_secret" {
  secret_id = var.secret_name
  project   = var.project_id
}

# Fetch specific version of the secret (e.g., "latest")
data "google_secret_manager_secret_version" "my_secret_version" {
  secret  = data.google_secret_manager_secret.my_secret.name
  version = "latest" # or specify a specific version if not "latest"
}

# Backend Cloud Run Service 
resource "google_cloud_run_service" "backend_service" {
  name     = "backend-service"
  location = var.region
  

  template {
    spec {
      containers {
        image = "${var.region}-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/backend_image:latest"
        # Define environment variables
        env {
        name  = "SUPABASE_URI_SECONDARY"
        value = var.database_uri 
      }
        ports {
          container_port = 5000
        }
        
        resources {
          limits = {
            cpu    = "1"
            memory = "256Mi"
          }
          
        }
        
        

        # Mount the secret as a volume
        volume_mounts {
          mount_path = "/secrets/my-secret"   # Path inside the container
          name       = var.secret_volume_name # Must match the volume name
        }
      }
      

      # Define volumes block for secret mount
      volumes {
        name = var.secret_volume_name

        secret {
          secret_name = data.google_secret_manager_secret.my_secret.secret_id

          items {
            key  = data.google_secret_manager_secret_version.my_secret_version.version
            path = "secret_key" # Name of the file inside the mount path
            mode = "0444"       # File permissions (optional)
          }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# Allow unauthenticated access to the backend service (optional)
resource "google_cloud_run_service_iam_member" "backend_service_invoker" {
  service  = google_cloud_run_service.backend_service.name
  location = google_cloud_run_service.backend_service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Grant Secret Manager access to the Cloud Run service account# Grant Secret Manager access to the Compute Engine default service account
resource "google_project_iam_member" "cloud_run_secret_accessor" {
  project = var.project_id
  role    = "roles/secretmanager.secretAccessor"
  member  = "serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com"
}
