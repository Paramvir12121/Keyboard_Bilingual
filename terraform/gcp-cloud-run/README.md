How to Set api_domain_name
There are several ways to set this variable:

Option 1: Create a terraform.tfvars file
Create a file named terraform.tfvars in your gcp-cloud-run directory:

Option 2: Provide it during terraform apply
Option 3: Use environment variables
Domain Structure Best Practices
For a typical web application:

Main website: Either use the root domain (keyboardbilingual.com) or a www subdomain (www.keyboardbilingual.com)
API subdomain: Use a descriptive subdomain like api.keyboardbilingual.com
DNS Configuration in Cloudflare
Make sure you've configured these DNS records in Cloudflare:

CNAME record for your API subdomain pointing to your Cloud Run backend service URL:

Name: api
Target: Your backend service URL (e.g., backend-service-abc123.run.app)
Proxy status: Proxied (orange cloud)
CNAME record for your frontend domain pointing to your Cloud Run frontend service URL:

Name: www (or @ for root domain)
Target: Your frontend service URL (e.g., frontend-service-xyz789.run.app)
Proxy status: Proxied (orange cloud)
By setting these values correctly, your application will have proper domain names configured for both frontend and backend services, maintaining HTTPS throughout.