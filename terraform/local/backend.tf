
# Backend Docker Image
resource "docker_image" "backend_image" {
  name         = "backend_image"
  build {
    context    = "${path.module}/../../backend"
    dockerfile = "Dockerfile"
  }
}

# Backend Service Container
resource "docker_container" "backend_container" {
  depends_on = [ docker_image.backend_image ]
  name  = "backend_service"
  image = docker_image.backend_image.image_id
  networks_advanced {
    name = docker_network.my_app_network.name
  }
  # use env file .env
   env = [
    for line in split("\n", data.local_file.env_file_backend.content) : line
    if line != "" && !startswith(line, "#") && can(regex("^\\w+=.*$", line))
  ]
  ports {
    internal = 5000
    external = 5000
  }
}

# Expose backend URL
output "backend_url" {
  value = "http://localhost:5000"
}
