# Managed SSL Certificate
resource "google_certificate_manager_certificate" "default" {
  name        = "my-certificate"
  description = "SSL certificate for my application"
  
  managed {
    domains = [var.domain_name] # Your custom domain
  }
}

# Create a certificate map
resource "google_certificate_manager_certificate_map" "default" {
  name        = "certificate-map"
  description = "Certificate map for my domain"
}

# Create a certificate map entry
resource "google_certificate_manager_certificate_map_entry" "default" {
  name               = "certificate-map-entry"
  description        = "Certificate map entry for my domain"
  certificate_map    = google_certificate_manager_certificate_map.default.name
  certificates       = [google_certificate_manager_certificate.default.id]
  hostname           = var.domain_name
}