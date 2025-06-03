FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the backend port
EXPOSE 5000

# Run the backend server
CMD ["node", "server.js"]
