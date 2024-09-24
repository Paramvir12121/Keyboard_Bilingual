# ec2_instance.tf
resource "aws_instance" "webapp_instance" {
  ami           = "ami-08c40ec9ead489470"  # Amazon Linux 2 AMI (Update as needed)
  instance_type = "t2.micro"
  key_name      = "your-key-pair"           # Replace with your EC2 key pair name
  security_groups = [aws_security_group.webapp_sg.name]

  user_data = file("user_data.sh")

  tags = {
    Name = "webapp-instance"
  }
}
