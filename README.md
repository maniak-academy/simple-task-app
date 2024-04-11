# Simple APP

## About
Simple web app that talks to a mongodatabase

## Running Application Locally
* ```docker-compose build```
* ```docker-compose up -d ```

# Environment Variables

IP 
creds


docker buildx build --platform linux/amd64,linux/arm64 -t 616973157416.dkr.ecr.us-east-1.amazonaws.com/sebbycorp-simple-task-app:latest --push .

docker buildx create --name simple-task-app --use
docker buildx inspect --bootstrap

docker buildx build --platform linux/amd64,linux/arm64 -t your-account-id.dkr.ecr.your-region.amazonaws.com/simple-task-app:la --push .
