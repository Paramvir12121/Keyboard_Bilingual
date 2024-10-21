resource "google_artifact_registry_repository" "my_repo" {
  provider      = google
  location      = var.region
  repository_id = var.artifact_repo
  description   = "Docker repository"
  format        = "DOCKER"
}

# Backend Image Build and Push
resource "null_resource" "push_backend_image" {
    depends_on = [ google_artifact_registry_repository.my_repo ]

  triggers = {
    build_id = timestamp()
  }

  provisioner "local-exec" {
    command     = "docker build -t backend_image ../../backend && docker tag backend_image us-central1-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/backend_image:latest && echo Pushing backend image && docker push us-central1-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/backend_image:latest"
    interpreter = ["cmd", "/C"]
  }
}


# Frontend Image Build and Push
resource "null_resource" "push_frontend_image" {
    depends_on = [ google_artifact_registry_repository.my_repo ]
  triggers = {
    build_id = timestamp()
  }

  provisioner "local-exec" {
    # Command to build, tag, and push the frontend image
    command     = "docker build -t frontend_image ../../frontend && docker tag frontend_image us-central1-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/frontend_image:latest && echo Pushing frontend image && docker push us-central1-docker.pkg.dev/${var.project_id}/${var.artifact_repo}/frontend_image:latest"
    interpreter = ["cmd", "/C"]
  }
}

