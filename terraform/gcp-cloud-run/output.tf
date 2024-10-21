output "frontend_url" {
  value = google_cloud_run_service.frontend_service.status[0].url
}