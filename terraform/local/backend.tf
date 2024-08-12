# resource "docker_image" "backend_image" {
#   name = "backend:local"
#   build {
#     context    = "../../backend"
#     dockerfile = "../../backend/Dockerfile"
#   }
# }

# resource "docker_container" "backend_container" {
#   name  = "backend"
#   image = docker_image.backend_image.latest
#   ports {
#     internal = 5000
#     external = 5000
#   }
#   restart = "always"
#   env = [
#     "FLASK_ENV=production"
#   ]
# }
