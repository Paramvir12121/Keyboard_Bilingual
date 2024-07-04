output "backend_container_ip" {
  value = docker_container.backend_container.ip_address
}

output "frontend_container_ip" {
  value = docker_container.frontend_container.ip_address
}
