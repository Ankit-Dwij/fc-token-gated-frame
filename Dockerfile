# Use the official Node.js Alpine image
FROM node:18-alpine

RUN npm i -g pm2
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to /app
COPY package*.json ./
# Install dependencies
RUN npm install 
# Copy the rest of the application code
COPY . .

EXPOSE 3000

# Command to run the application
CMD ["pm2-runtime", "start", "ecosystem.config.json"]
