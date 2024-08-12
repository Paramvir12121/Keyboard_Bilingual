# Define the Docker network
# resource "docker_network" "my_app_network" {
#   name = "my_app_network"
# }

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
  name  = "backend_service"
  image = docker_image.backend_image.image_id
  networks_advanced {
    name = docker_network.my_app_network.name
  }
  ports {
    internal = 5000
    external = 5000
  }
}

# # Frontend Docker Image Build - Stage 1: Node build
# resource "docker_image" "frontend_build_image" {
#   name         = "frontend_build_image"
#   build {
#     context    = "${path.module}/../../frontend"
#     dockerfile = "Dockerfile"
#     target     = "build"
#   }
# }

# # Frontend Docker Image Build - Stage 2: Nginx
# resource "docker_image" "frontend_image" {
#   name         = "frontend_image"
#   build {
#     context    = "${path.module}/../../frontend"
#     dockerfile = "Dockerfile"
#   }
# }

# Frontend Service Container
# resource "docker_container" "frontend_container" {
#   name  = "frontend_service"
#   image = docker_image.frontend_image.latest
#   networks_advanced {
#     name = docker_network.my_app_network.name
#   }
#   ports {
#     internal = 80
#     external = 80
#   }
# }

# Expose backend URL
output "backend_url" {
  value = "http://localhost:5000"
}

# Expose frontend URL
# output "frontend_url" {
#   value = "http://localhost:80"
# }
