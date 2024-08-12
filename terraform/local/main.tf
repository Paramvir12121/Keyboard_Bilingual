# # provider "docker" {
# #   host = "unix:///var/run/docker.sock"
# # }

# # Define the Docker network
# resource "docker_network" "my_app_network" {
#   name = "my_app_network"
# }

# # Backend Service
# resource "docker_image" "backend_image" {
#   name         = "backend_image"
#   build {
#     context    = "${path.module}/../../backend"
#     dockerfile = "${path.module}/../../backend/Dockerfile"
#   }
# }

# resource "docker_container" "backend_container" {
#   name  = "backend_service"
#   image = docker_image.backend_image.latest
#   networks_advanced {
#     name = docker_network.my_app_network.name
#   }
#   ports {
#     internal = 5000
#     external = 5000
#   }
# }

# # Frontend Service
# resource "docker_image" "frontend_image" {
#   name         = "frontend_image"
#   build {
#     context    = "${path.module}/../../frontend"
#     dockerfile = "${path.module}/../../frontend/Dockerfile"
#   }
# }

# resource "docker_container" "frontend_container" {
#   name  = "frontend_service"
#   image = docker_image.frontend_image.latest
#   networks_advanced {
#     name = docker_network.my_app_network.name
#   }
#   ports {
#     internal = 3000
#     external = 3000
#   }
# }
