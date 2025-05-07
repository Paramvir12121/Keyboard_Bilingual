# # Managed SSL Certificate
# resource "google_certificate_manager_certificate" "default" {
#   depends_on = [google_project_service.certificate_manager_api]

#   name        = "my-certificate"
#   description = "SSL certificate for my application"

#   managed {
#     domains = [var.domain_name]
#   }
# }

# # Create a certificate map
# resource "google_certificate_manager_certificate_map" "default" {
#   depends_on = [google_project_service.certificate_manager_api]

#   name        = "certificate-map"
#   description = "Certificate map for my domain"
# }

# # Create a certificate map entry
# resource "google_certificate_manager_certificate_map_entry" "default" {
#   depends_on = [
#     google_certificate_manager_certificate_map.default,
#     google_certificate_manager_certificate.default
#   ]

#   name        = "certificate-map-entry"
#   description = "Certificate map entry for my domain"
#   map         = google_certificate_manager_certificate_map.default.name
#   certificates = [google_certificate_manager_certificate.default.id]
#   hostname    = var.domain_name
# }

# # Grant Secret Manager Secret Accessor role to the service account
# resource "google_project_iam_member" "secret_accessor" {
#   project = var.project_id
#   role    = "roles/secretmanager.secretAccessor"
#   member  = var.service_account_member
# }







