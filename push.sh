#!/bin/bash

# Prompt for a commit message
read -p "Enter commit message: " COMMIT_MESSAGE

# Check if a commit message was provided
if [ -z "$COMMIT_MESSAGE" ]; then
  echo "Commit message cannot be empty"
  exit 1
fi

# Add all changes to the staging area
git add .

# Commit the changes with the provided message
git commit -m "$COMMIT_MESSAGE"

# Push the changes to the remote repository
git push
