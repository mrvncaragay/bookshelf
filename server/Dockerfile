FROM node:latest
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

COPY ormconfig.docker.json ormconfig.json

EXPOSE 3000
CMD node dist/app.js