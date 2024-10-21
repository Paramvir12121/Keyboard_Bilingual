# cloud_run.tf
# Allow unauthenticated access to the frontend service

resource "google_cloud_run_service" "frontend_service" {
#     depends_on = [
#     google_cloud_run_service.backend_service
#   ]
  name     = "frontend-service"
  location = var.region

  template {
    spec {
      containers {
        image = "us-central1-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/frontend_image:latest"
        ports {
          container_port = 80
        }

        # Set environment variables for frontend (if any)
        # env = [
        #   {
        #     name  = "VITE_API_URL"
        #     value = "https://<YOUR_BACKEND_SERVICE_URL>"
        #   },
        #   # Add other environment variables as needed
        # ]
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}


resource "google_cloud_run_service_iam_member" "frontend_service_invoker" {
  service    = google_cloud_run_service.frontend_service.name
  location   = google_cloud_run_service.frontend_service.location
  role       = "roles/run.invoker"
  member     = "allUsers"
}