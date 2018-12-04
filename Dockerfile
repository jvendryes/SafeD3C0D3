FROM node:10.14-slim AS builder
WORKDIR /SafeDC0D3
COPY . .
RUN set -x \
    && npm install -g @angular/cli \
    && cd /SafeDC0D3/app \
    && npm install
RUN set -x \
    && cd /SafeDC0D3/app \
    && ng build --prod

FROM nginx:1.15-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /SafeDC0D3/app/dist/SafeDC0D3 /usr/share/nginx/html