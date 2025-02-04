# Use Node.js as base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port (usually 3000 for React, 5173 for Vite, 4200 for Angular)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
