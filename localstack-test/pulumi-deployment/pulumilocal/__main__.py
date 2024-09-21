import pulumi
from pulumi_aws import s3

# Create an S3 bucket in AWS
bucket = s3.Bucket("aws-test-bucket", bucket="my-aws-pulumi-bucket")

# Export the bucket name as an output
pulumi.export('bucket_name', bucket.bucket)
