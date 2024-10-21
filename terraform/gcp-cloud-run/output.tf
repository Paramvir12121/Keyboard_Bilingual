output "frontend_url" {
  value = google_cloud_run_service.frontend_service.status[0].url
}

output "backend_url" {
  value = google_cloud_run_service.backend_service.status[0].url
}