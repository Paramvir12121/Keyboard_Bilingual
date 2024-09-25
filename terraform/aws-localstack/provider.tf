provider "aws" {
  region                      = "us-east-1"
  access_key                  = "test"
  secret_key                  = "test"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    ecs        = "http://localhost:4566"
    ecr        = "http://localhost:4566"
    logs       = "http://localhost:4566"
    elbv2      = "http://localhost:4566"
    cloudwatch = "http://localhost:4566"
    iam        = "http://localhost:4566"
    s3         = "http://localhost:4566"
    ec2        = "http://localhost:4566"  # Ensure EC2 endpoint points to LocalStack
  }
}
