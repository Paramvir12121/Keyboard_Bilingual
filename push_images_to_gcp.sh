#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Variables
PROJECT_ID="apis-419919"  # Replace with your project ID
ARTIFACT_REPO="keyboard-bilingul"
REGION="us-east1"

# Image names
BACKEND_IMAGE_NAME="backend_image"
FRONTEND_IMAGE_NAME="frontend_image"

# Artifact Registry paths
BACKEND_IMAGE_PATH="${REGION}-docker.pkg.dev/${PROJECT_ID}/${ARTIFACT_REPO}/${BACKEND_IMAGE_NAME}"
FRONTEND_IMAGE_PATH="${REGION}-docker.pkg.dev/${PROJECT_ID}/${ARTIFACT_REPO}/${FRONTEND_IMAGE_NAME}"

# # Authenticate Docker with Google Artifact Registry
# # Run the below command if you are not authenticated
# # In windows, run the command in terminal
# echo "Authenticating Docker with Google Artifact Registry..."
# gcloud auth configure-docker "${REGION}-docker.pkg.dev" -q

# Build and push backend image
echo "Building backend image..."
cd ./backend  # Replace with the correct path to your backend directory
docker build -t "${BACKEND_IMAGE_NAME}" .
docker tag "${BACKEND_IMAGE_NAME}" "${BACKEND_IMAGE_PATH}:latest"
echo "Pushing backend image to Artifact Registry..."
docker push "${BACKEND_IMAGE_PATH}:latest"

# Build and push frontend image
echo "Building frontend image..."
cd ..   # Move back to the root directory
cd ./frontend  # Replace with the correct path to your frontend directory
docker build -t "${FRONTEND_IMAGE_NAME}" .
docker tag "${FRONTEND_IMAGE_NAME}" "${FRONTEND_IMAGE_PATH}:latest"
echo "Pushing frontend image to Artifact Registry..."
docker push "${FRONTEND_IMAGE_PATH}:latest"

echo "Build and push completed!"
