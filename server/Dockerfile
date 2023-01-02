FROM node:16

# Create app directory
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# Expose the port and start the application
EXPOSE 5050

CMD ["npm","run", "dev"]