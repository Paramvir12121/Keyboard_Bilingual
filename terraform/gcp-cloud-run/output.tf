output "frontend_url" {
  value = google_cloud_run_service.frontend_service.status[0].url
}

output "backend_url" {
  value = google_cloud_run_service.backend_service.status[0].url
}


output "backend_domain" {
  value = var.api_domain_name != "" ? "https://${var.api_domain_name}" : null
}

# output "certificate_map_id" {
#   value = google_certificate_manager_certificate_map.default.id
# }