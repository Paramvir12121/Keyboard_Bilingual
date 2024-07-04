resource "docker_image" "frontend_image" {
  name = "frontend:local"
  build {
    context    = "../../secondend"
    dockerfile = "../../secondend/Dockerfile"
  }
}

resource "docker_container" "frontend_container" {
  name  = "frontend"
  image = docker_image.frontend_image.latest
  ports {
    internal = 80
    external = 80
  }
  restart = "always"
}
