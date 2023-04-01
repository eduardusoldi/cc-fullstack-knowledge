FROM node:lts-hydrogen
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build