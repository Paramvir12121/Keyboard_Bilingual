resource "google_sql_database_instance" "main" {
  name             = var.db_instance_name
  database_version = "POSTGRES_13"
  region           = var.region

  settings {
    tier = "db-f1-micro"

    ip_configuration {
      ipv4_enabled    = true
      private_network = google_compute_network.default.self_link
    }
  }
}

resource "google_sql_database" "default" {
  name     = var.db_name
  instance = google_sql_database_instance.main.name
}

resource "google_sql_user" "default" {
  name     = var.db_user
  instance = google_sql_database_instance.main.name
  password = var.db_password
}

resource "google_compute_network" "default" {
  name                    = "default-network"
  auto_create_subnetworks = true
}
