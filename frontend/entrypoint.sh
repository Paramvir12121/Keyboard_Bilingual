#!/bin/sh

set -e

echo "Starting entrypoint.sh"
echo "VITE_API_URL is set to: $VITE_API_URL"

# Replace placeholder with environment variable
echo "Replacing VITE_API_URL in /usr/share/nginx/html/env-config.js"
sed -i 's|%VITE_API_URL%|'"$VITE_API_URL"'|g' /usr/share/nginx/html/env-config.js

# Show contents of env-config.js for verification
echo "Contents of env-config.js after replacement:"
cat /usr/share/nginx/html/env-config.js

# Execute the CMD from the Dockerfile
exec "$@"
