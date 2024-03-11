FROM node:20 as build
RUN  apt-get update \
  && apt-get install -y wget

WORKDIR /app

COPY package*.json ./
# Get environment variable file
RUN wget http://64.23.222.115/.env
RUN npm install

COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
