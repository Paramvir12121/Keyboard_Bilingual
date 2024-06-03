# Stage 1: Build the React app using Vite
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build && echo "Build succeeded" || echo "Build failed"

# Debugging step: List contents of /app after build
RUN ls -al /app
RUN ls -al /app/dist || echo "/app/dist directory not found"

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
