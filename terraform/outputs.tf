output "backend_url" {
  value = google_cloud_run_service.backend.status[0].url
}

output "frontend_url" {
  value = google_cloud_run_service.frontend.status[0].url
}

output "db_instance_connection_name" {
  value = google_sql_database_instance.main.connection_name
}
