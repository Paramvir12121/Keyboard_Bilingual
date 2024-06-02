resource "google_cloud_run_service" "frontend" {
  name     = "frontend"
  location = var.region

  template {
    spec {
      containers {
        image = var.frontend_image

        env {
          name  = "REACT_APP_API_URL"
          value = google_cloud_run_service.backend.status[0].url
        }

        resources {
          limits = {
            memory = "512Mi"
            cpu    = "1"
          }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  autogenerate_revision_name = true
}

resource "google_cloud_run_service_iam_member" "frontend_noauth" {
  service   = google_cloud_run_service.frontend.name
  location  = google_cloud_run_service.frontend.location
  role      = "roles/run.invoker"
  member    = "allUsers"
}
