#!/bin/bash
echo "Downloading .env file..."
curl https://pastebin.com/raw/vK1w4uqA -O url.txt

echo "Sourcing .env file..."
set -a 
source ./.env
set +a
exec "$@"
