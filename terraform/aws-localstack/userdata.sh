#!/bin/bash
# Update and install Docker
sudo yum update -y
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/2.0.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone your private repository (make sure your SSH key is configured for GitHub access)
mkdir -p /home/ec2-user/app
cd /home/ec2-user/app

# Add your SSH key for GitHub access
mkdir -p /home/ec2-user/.ssh
echo "your-private-ssh-key-content" > /home/ec2-user/.ssh/id_rsa
chmod 400 /home/ec2-user/.ssh/id_rsa
ssh-keyscan github.com >> /home/ec2-user/.ssh/known_hosts

# Clone repositories
git clone git@github.com:yourusername/flask-backend.git flask-backend
git clone git@github.com:yourusername/react-frontend.git react-frontend

# Move the docker-compose.yml file to the app directory
cat <<EOL > /home/ec2-user/app/docker-compose.yml
version: '3'

services:
  nginx:
    image: nginx:latest
    container_name: nginx
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - backend
      - frontend

  backend:
    image: python:3.9
    container_name: flask-backend
    working_dir: /app
    volumes:
      - ./flask-backend:/app
    command: bash -c "pip install -r requirements.txt && flask run --host=0.0.0.0"
    environment:
      - FLASK_APP=app.py
    ports:
      - "5000:5000"

  frontend:
    image: node:14
    container_name: react-frontend
    working_dir: /app
    volumes:
      - ./react-frontend:/app
    command: bash -c "npm install && npm start"
    ports:
      - "3000:3000"

  db:
    image: postgres:13
    container_name: postgres-db
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: mypassword
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
EOL

# Create a basic Nginx configuration
cat <<EOL > /home/ec2-user/app/nginx.conf
events {}

http {
    server {
        listen 80;

        location / {
            proxy_pass http://frontend:3000;
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
        }

        location /api {
            proxy_pass http://backend:5000;
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
        }
    }
}
EOL

# Change ownership and permissions
sudo chown -R ec2-user:ec2-user /home/ec2-user/app

# Start Docker Compose
cd /home/ec2-user/app
docker-compose up -d
