

# Enable required Google Cloud APIs
resource "google_project_service" "certificate_manager_api" {
  project = var.project_id
  service = "certificatemanager.googleapis.com"

  # Disable API if resource is deleted
  disable_on_destroy = false

  # Avoid downtime during API enablement
  timeouts {
    create = "30m"
    update = "40m"
  }
}

resource "google_project_service" "secretmanager_api" {
  project = var.project_id
  service = "secretmanager.googleapis.com"

  disable_on_destroy = false

  timeouts {
    create = "30m"
    update = "40m"
  }
}

resource "google_project_service" "artifactregistry_api" {
  project = var.project_id
  service = "artifactregistry.googleapis.com"

  disable_on_destroy = false

  timeouts {
    create = "30m"
    update = "40m"
  }
}

resource "google_project_service" "run_api" {
  project = var.project_id
  service = "run.googleapis.com"

  disable_on_destroy = false

  timeouts {
    create = "30m"
    update = "40m"
  }
}