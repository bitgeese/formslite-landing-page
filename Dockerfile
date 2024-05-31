# Dockerfile for Astro static website
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./

# Remove package-lock.json and node_modules if they exist
RUN rm -rf package-lock.json node_modules

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app with --host flag
CMD ["npm", "run", "dev", "--", "--host"]
