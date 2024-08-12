terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.0"
    }
  }
}

provider "docker" {
  # for linux machines use the following host
  host = "unix:///var/run/docker.sock" 

  # for windows machines use the following host
  #  host = "tcp://localhost:2375"
}