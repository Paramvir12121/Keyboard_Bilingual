# write smaple code to create a S3 bucket in localstack
provider "aws" {
  region = "us-east-1"   
    access_key = "mock_access"
    secret_key = "mock_secret"
    skip_credentials_validation = true  
    skip_metadata_api_check = true
  
}
resource "aws_s3_bucket" "my_bucket" {
  bucket = "my-bucket"
}


