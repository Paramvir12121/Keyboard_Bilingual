
# Create Artifact Registry to store Docker images
resource "google_artifact_registry_repository" "backend_repo" {
  provider         = google
  location         = var.region
  repository_id    = var.github_repo
  format = "DOCKER"
}

# Create Cloud Run service
resource "google_cloud_run_service" "backend_service" {
  name     = "backend-service"
  location = var.region

  template {
    spec {
      containers {
        image = "us-central1-docker.pkg.dev/${var.project_id}/backend-repo/backend-image:latest"
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

# Allow unauthenticated access to Cloud Run
resource "google_cloud_run_service_iam_member" "all_users_invoker" {
  location = google_cloud_run_service.backend_service.location
  project  = google_cloud_run_service.backend_service.project
  service  = google_cloud_run_service.backend_service.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Create Cloud Build trigger for the /backend folder
resource "google_cloudbuild_trigger" "backend_trigger" {
  name = "backend-deploy-trigger"

  github {
    owner        = var.github_owner
    name         = var.github_repo
    push {
      branch = "^main$"  # Adjust to your preferred branch
    }
  }

  # Use Cloud Build configuration from the cloudbuild.yaml file
  filename = "backend/cloudbuild.yaml"  # Path to cloudbuild.yaml in your repository
}

# Outputs
output "cloud_run_url" {
  value = "https://${google_cloud_run_service.backend_service.status[0].url}"
}
