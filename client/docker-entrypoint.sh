#!/bin/bash
echo "Downloading .env file..."
curl http://64.23.222.115/.env -O

echo "Sourcing .env file..."
set -a 
source ./.env
set +a
exec "$@"
