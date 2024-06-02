resource "google_cloud_run_service" "backend" {
  name     = "backend"
  location = var.region

  template {
    spec {
      containers {
        image = var.backend_image

        env {
          name  = "FLASK_ENV"
          value = "production"
        }

        env {
          name  = "DATABASE_URL"
          value = "postgresql+psycopg2://${var.db_user}:${var.db_password}@/${var.db_name}?host=/cloudsql/${google_sql_database_instance.main.connection_name}"
        }

        env {
          name  = "SECRET_KEY"
          value = "your_secret_key"
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

resource "google_cloud_run_service_iam_member" "backend_noauth" {
  service   = google_cloud_run_service.backend.name
  location  = google_cloud_run_service.backend.location
  role      = "roles/run.invoker"
  member    = "allUsers"
}
