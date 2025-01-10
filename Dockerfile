FROM node:22-slim AS build

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY ./ ./

RUN npm ci --legacy-peer-deps --silent

EXPOSE 300

# Comando para iniciar Nginx
CMD ["npm", "run", "dev"]