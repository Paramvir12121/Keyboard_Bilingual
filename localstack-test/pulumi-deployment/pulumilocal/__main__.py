import pulumi
from pulumi_aws import s3

# Create an S3 bucket
bucket = s3.Bucket("example-bucket", bucket="my-localstack-bucket")

# Export the bucket name as an output
pulumi.export('bucket_name', bucket.bucket)
