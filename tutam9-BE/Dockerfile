FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source

COPY . .

# EXPOSE 4000

CMD [ "npm", "start" ]
