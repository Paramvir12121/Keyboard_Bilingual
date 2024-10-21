data "google_secret_manager_secret" "my_secret" {
  secret_id =     = var.secret_name
  project = var.project_id
}

# Backend Cloud Run Service 
resource "google_cloud_run_service" "backend_service" {
  name     = "backend-service"
  location = var.region

  template {
    spec {
      containers {
        image = "us-central1-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/backend_image:latest"
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

      # Add the volumes block here
      volumes {
        name = var.secret_volume_name

        secret {
          secret_name = data.google_secret_manager_secret.my_secret.name

          items {
            key  = "latest"      # Secret version (e.g., 'latest' or a specific version number)
            path = "secret_key"  # File name inside the mount path
            mode = 0444          # File permissions (optional)
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
  service    = google_cloud_run_service.backend_service.name
  location   = google_cloud_run_service.backend_service.location
  role       = "roles/run.invoker"
  member     = "allUsers"
}
