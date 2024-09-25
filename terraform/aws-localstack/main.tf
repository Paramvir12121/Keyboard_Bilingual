# Define ECS Cluster
resource "aws_ecs_cluster" "frontend_cluster" {
  name = "frontend-cluster"
}

resource "aws_ecs_cluster" "backend_cluster" {
  name = "backend-cluster"
}

# Task Definitions for both Frontend and Backend
# Task Definitions for both Frontend and Backend
resource "aws_ecs_task_definition" "frontend_task" {
  family                   = "frontend-task"
  network_mode             = "bridge"  # Change network_mode to "bridge" for EC2
  requires_compatibilities = ["EC2"]
  cpu                      = "256"
  memory                   = "512"

  container_definitions = jsonencode([
    {
      name  = "frontend-container"
      image = "your-dockerhub-username/frontend-app:latest" # Replace with your Docker image
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
          protocol      = "tcp"
        }
      ],
      memory = 256 # Specify memory allocation for the frontend container
    }
  ])
}

resource "aws_ecs_task_definition" "backend_task" {
  family                   = "backend-task"
  network_mode             = "bridge"  # Change network_mode to "bridge" for EC2
  requires_compatibilities = ["EC2"]
  cpu                      = "256"
  memory                   = "512"

  container_definitions = jsonencode([
    {
      name  = "backend-container"
      image = "your-dockerhub-username/backend-app:latest" # Replace with your Docker image
      portMappings = [
        {
          containerPort = 5000
          hostPort      = 5000
          protocol      = "tcp"
        }
      ],
      memory = 256 # Specify memory allocation for the backend container
    }
  ])
}


# Create ECS Services for both Frontend and Backend using EC2 launch type
resource "aws_ecs_service" "frontend_service" {
  name            = "frontend-service"
  cluster         = aws_ecs_cluster.frontend_cluster.id
  task_definition = aws_ecs_task_definition.frontend_task.arn
  desired_count   = 1
  launch_type     = "EC2"
}

resource "aws_ecs_service" "backend_service" {
  name            = "backend-service"
  cluster         = aws_ecs_cluster.backend_cluster.id
  task_definition = aws_ecs_task_definition.backend_task.arn
  desired_count   = 1
  launch_type     = "EC2"
}
