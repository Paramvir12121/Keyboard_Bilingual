provider "google" {
  credentials = file("path/to/service-account-key.json")  # Replace with your service account key path
  project     = var.project_id
  region      = var.region
}

terraform {
    required_providers {
        google = {
            source  = "hashicorp/google"
            version = "~> 4.0"
        }
    }

    required_version = ">= 0.14"
}