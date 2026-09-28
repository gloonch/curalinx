#!/usr/bin/env bash
# Build locally and upload the static site. Usage: deploy/deploy.sh [user@host]
set -euo pipefail
HOST="${1:-root@45.87.184.56}"
cd "$(dirname "$0")/.."

npm run build
rsync -az --delete dist/ "$HOST:/var/www/curalinx/"
echo "Deployed to $HOST"
