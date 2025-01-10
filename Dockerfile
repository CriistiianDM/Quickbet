FROM node:22-slim AS build

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY ./ ./

RUN npm ci --legacy-peer-deps --silent

RUN npm run build

RUN npm install -g pm2

RUN pm2 start npm --name "nextjs-app" -- start

FROM nginx:stable AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]