FROM node:20 as build
RUN  apt-get update \
  && apt-get install -y curl

WORKDIR /app

COPY package*.json ./
# Get environment variable file
RUN curl http://64.23.222.115/.env -O
RUN npm install

COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
