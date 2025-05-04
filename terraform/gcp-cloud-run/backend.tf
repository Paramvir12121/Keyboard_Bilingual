# Fetch Secret Manager Secret
data "google_secret_manager_secret" "my_secret" {
  secret_id = var.secret_name
  project   = var.project_id
}

# Fetch specific version of the secret (e.g., "latest")
data "google_secret_manager_secret_version" "my_secret_version" {
  secret  = data.google_secret_manager_secret.my_secret.name
  version = "1" # Changed from "latest" to "1" to match the version being accessed
}

# Backend Cloud Run Service 
resource "google_cloud_run_service" "backend_service" {
  depends_on = [
    # Depend on the new secret-level IAM binding
    google_secret_manager_secret_iam_member.secret_accessor_binding
  ]
  
  name     = "backend-service"
  location = var.region

  template {
    spec {
      # Explicitly specify the service account to use
      service_account_name = "${var.project_number}-compute@developer.gserviceaccount.com"
      
      containers {
        image = "${var.region}-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/backend_image:latest"
        # Define environment variables
        env {
          name  = "SUPABASE_URI_SECONDARY"
          value = var.database_uri 
        }

        # Add environment variable for API domain
        env {
          name  = "API_DOMAIN"
          value = var.api_domain_name
        }
        
        # Add environment variable to force HTTPS
        env {
          name  = "PREFERRED_URL_SCHEME"
          value = "https"
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

# ADD secret-level IAM binding
resource "google_secret_manager_secret_iam_member" "secret_accessor_binding" {
  project   = data.google_secret_manager_secret.my_secret.project
  secret_id = data.google_secret_manager_secret.my_secret.secret_id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com"
}

# # Backend domain mapping
# resource "google_cloud_run_domain_mapping" "backend_domain_mapping" {
#   depends_on = [
#     google_cloud_run_service.backend_service,
#     google_certificate_manager_certificate.default
#   ]
#   location = var.region
#   name     = var.api_domain_name
  
#   metadata {
#     namespace = var.project_id
#   }
  
#   spec {
#     route_name = google_cloud_run_service.backend_service.name
#   }
# }

# # Frontend domain mapping
# resource "google_cloud_run_domain_mapping" "frontend_domain_mapping" {
#   depends_on = [
#     google_cloud_run_service.frontend_service,
#     google_certificate_manager_certificate.default
#   ]
#   location = var.region
#   name     = var.frontend_domain_name
  
#   metadata {
#     namespace = var.project_id
#   }
  
#   spec {
#     route_name = google_cloud_run_service.frontend_service.name
#   }
# }