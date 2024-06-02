resource "google_cloud_run_service" "frontend" {
  name     = "frontend"
  location = "YOUR_REGION"

  template {
    spec {
      containers {
        image = "gcr.io/YOUR_PROJECT_ID/frontend:latest"

        resources {
          limits = {
            memory = "512Mi"
            cpu    = "1"
          }
        }
        env {
          name  = "REACT_APP_API_URL"
          value = "https://backend-YOUR_REGION.run.app"
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
