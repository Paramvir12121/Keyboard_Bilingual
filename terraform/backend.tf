resource "google_cloud_run_service" "backend" {
  name     = "backend"
  location =  var.region

  template {
    spec {
      containers {
        image = "gcr.io/YOUR_PROJECT_ID/backend:latest"

        resources {
          limits = {
            memory = "512Mi"
            cpu    = "1"
          }
        }
        env {
          name  = "FLASK_ENV"
          value = "production"
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

resource "google_cloud_run_service_iam_member" "backend_noauth" {
  service   = google_cloud_run_service.backend.name
  location  = google_cloud_run_service.backend.location
  role      = "roles/run.invoker"
  member    = "allUsers"
}
