# Provider Configuration
provider "aws" {
  region = "us-east-1" # Change this to your preferred AWS region
}

# Define a Key Pair for SSH access (you may skip this if you already have a key pair)
resource "aws_key_pair" "my_key_pair" {
  key_name   = "my-key-pair" # Change this to your preferred key pair name
  public_key = file("~/.ssh/id_rsa.pub") # Path to your public SSH key
}

# Create an EC2 Instance
resource "aws_instance" "backend" {
  ami           = "ami-0c02fb55956c7d316" # Amazon Linux 2 AMI; change as needed
  instance_type = "t2.micro" # Change to your preferred instance type
#   key_name      = aws_key_pair.my_key_pair.key_name

  tags = {
    Name = "backend-instance"
  }

  # Assign a public IP (if needed) by using the default subnet configuration
#   associate_public_ip_address = true

#   subnet_id = "subnet-xxxxxxxx" # Replace with your existing subnet ID

  # User data script to install Python, clone the private repo, and add .env file
  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y python3 git

              # Install pip3
              yum install -y python3-pip

              # Install Flask
              pip3 install flask

              # Setup GitHub authentication using a personal access token
              GITHUB_USERNAME="paramvir12121"
              GITHUB_TOKEN="your-github-access-token"
              REPO="https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/yourusername/your-flask-app.git"

              # Clone the private GitHub repository
              git clone $REPO /home/ec2-user/app

              # Change to the app directory
              cd /home/ec2-user/app

              # Create the .env file
              cat <<EOT >> .env
              SUPABASE_URI=${var.SUPABASE_URI}
              REDIRECT_URI=${var.REDIRECT_URI}
              STRIPE_PUBLISHER_KEY=${var.STRIPE_PUBLISHER_KEY}
              STRIPE_API_KEY=${var.STRIPE_API_KEY}
              STRIPE_ENDPOINT_SECRET=${var.STRIPE_ENDPOINT_SECRET}

              SECRET_KEY=${var.SECRET_KEY}
              SQLALCHEMY_TRACK_MODIFICATIONS=${var.SQLALCHEMY_TRACK_MODIFICATIONS}
              FLASK_APP=${var.FLASK_APP}

              USER_POOL_ID=${var.USER_POOL_ID}
              COGNITO_POOL_ARN=${var.COGNITO_POOL_ARN}
              COGNITO_REGION=${var.COGNITO_REGION}
              COGNITO_CLIENT_SECRET=${var.COGNITO_CLIENT_SECRET}
              COGNITO_CLIENT_ID=${var.COGNITO_CLIENT_ID}
              COGNITO_DOMAIN=${var.COGNITO_DOMAIN}
              PORT=${var.PORT}
              DEBUG=${var.DEBUG}
              EOT

              # Start the Flask app
              FLASK_APP=app.py flask run --host=0.0.0.0 --port=5000
              EOF
}

# Output the public IP address of the instance
output "instance_ip" {
  value = aws_instance.backend.public_ip
}
