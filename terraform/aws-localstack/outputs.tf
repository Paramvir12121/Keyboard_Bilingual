output "frontend_service_name" {
  value = aws_ecs_service.frontend_service.name
}

output "backend_service_name" {
  value = aws_ecs_service.backend_service.name
}
