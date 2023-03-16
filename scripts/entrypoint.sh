#!/usr/bin/env sh

jq -n --arg message "$APP_MESSAGE" '{message: $message}' > /usr/share/nginx/html/config.json

exec "$@"