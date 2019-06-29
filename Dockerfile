# Stage 1
FROM node:10.16-slim AS builder
WORKDIR /SafeD3C0D3
COPY ./app/ .
RUN set -x \
    && npm install \
    && node_modules/@angular/cli/bin/ng build --prod

# Stage 2
FROM nginx:1.17-alpine
RUN apk update \
    && apk upgrade
COPY ./configs/nginx/default.conf /etc/nginx/conf.d
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /SafeD3C0D3/dist/SafeD3C0D3 /usr/share/nginx/html

# Run with least privilege
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid && \
  chown -R nginx:nginx /var/cache/nginx
USER nginx
