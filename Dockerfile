# Use an official Node.js runtime as the parent image
FROM node:14

# Declare MONGODB_URI as a build argument
ARG MONGODB_URI

# Set the working directory in your Docker image
WORKDIR /usr/src/app

# Copy the package.json file into the working directory
COPY package.json .

# Install dependencies defined in package.json
RUN npm install

# Copy the rest of your application's code into the Docker image
COPY . .

# New line to copy wizexercise.txt into the working directory
COPY wizexercise.txt .

# Set the MongoDB URI as an environment variable
ENV MONGODB_URI $MONGODB_URI

# Make port 3000 available outside this container
EXPOSE 3000

# Run your application when the container is launched
CMD ["node", "server.js"]
