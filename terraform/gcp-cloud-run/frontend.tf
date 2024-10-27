# cloud_run.tf

resource "google_cloud_run_service" "frontend_service" {
  depends_on = [
    google_cloud_run_service.backend_service
  ]

  name     = "frontend-service"
  location = var.region

  template {
    spec {
      containers {
        image = "${var.region}-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/frontend_image:latest"

        ports {
          container_port = 80
        }

        env {
          name  = "VITE_API_URL"
          value = google_cloud_run_service.backend_service.status[0].url
        }


        resources {
          limits = {
            cpu    = "1"
            memory = "256Mi"
          }
        } # Closing the 'resources' block

      } # Closing the 'containers' block
    }   # Closing the 'spec' block
  }     # Closing the 'template' block

  traffic {
    percent         = 100
    latest_revision = true
  }
} # Closing the 'google_cloud_run_service' resource block

resource "google_cloud_run_service_iam_member" "frontend_service_invoker" {
  service  = google_cloud_run_service.frontend_service.name
  location = google_cloud_run_service.frontend_service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}


