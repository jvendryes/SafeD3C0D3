# Stage 1
FROM node:10.15-slim AS builder
WORKDIR /SafeDC0D3
COPY ./app/ .
RUN set -x \
    && npm install \
    && node_modules/@angular/cli/bin/ng build --prod

# Stage 2
FROM nginx:1.15-alpine
RUN apk update \
    && apk upgrade
COPY ./configs/nginx/default.conf /etc/nginx/conf.d
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /SafeDC0D3/dist/SafeDC0D3 /usr/share/nginx/html

# Run with least privilege
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid && \
  chown -R nginx:nginx /var/cache/nginx
USER nginx
