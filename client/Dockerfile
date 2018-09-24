FROM node:alpine as build
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./phit_calendar.conf /etc/nginx/conf.d/
COPY --from=build /app/build /usr/share/nginx/html
