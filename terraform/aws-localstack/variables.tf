variable "frontend_image" {
  description = "Docker image for the frontend"
  default     = "learncolemak/frontend:latest"
}

variable "backend_image" {
  description = "Docker image for the backend"
  default     = "learncolemak/backend-app:latest"
}
