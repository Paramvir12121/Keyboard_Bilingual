# Define the Docker network
resource "docker_network" "my_app_network" {
  name = "my_app_network"
}

# Frontend Docker Image Build - Stage 1: Node build
resource "docker_image" "frontend_build_image" {
  name         = "frontend_build_image"
  build {
    context    = "${path.module}/../../frontend"
    dockerfile = "Dockerfile"
    target     = "build"
  }
}

# Frontend Docker Image Build - Stage 2: Nginx
resource "docker_image" "frontend_image" {
  name         = "frontend_image"
  build {
    context    = "${path.module}/../../frontend"
    dockerfile = "Dockerfile"
  }
}

# Frontend Service Container
resource "docker_container" "frontend_container" {
  name  = "frontend_service"
  image = docker_image.frontend_image.image_id
  networks_advanced {
    name = docker_network.my_app_network.name
  }
  
   # Dynamically load environment variables from .env.local
  env = [for line in split("\n", data.local_file.env_file_frontend.content) : line if line != "" && can(regex("^\\w+=.*$", line))]
  ports {
    internal = 80
    external = 80
  }
}

# Expose frontend URL
output "frontend_url" {
  value = "http://localhost:80"
}