# Use Node.js LTS version as base image
FROM node:lts-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the development server
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]
