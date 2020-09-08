FROM node:12.7-alpine AS build
WORKDIR /usr/workspace/cake-shop-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine
WORKDIR /usr/workspace/cake-shop-frontend
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/workspace/cake-shop-frontend/dist/cake-shop-app /usr/share/nginx/html/