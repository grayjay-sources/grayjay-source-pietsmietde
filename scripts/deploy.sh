#!/bin/sh
DOCUMENT_ROOT=/var/www/sources
PROJECT_NAME=$1

# Take site offline
echo "Taking site offline..."
touch $DOCUMENT_ROOT/maintenance.file

# Swap over the content
echo "Deploying content..."
mkdir -p $DOCUMENT_ROOT/${PROJECT_NAME}
cp build/${PROJECT_NAME}Icon.png $DOCUMENT_ROOT/${PROJECT_NAME}
cp build/${PROJECT_NAME}Config.json $DOCUMENT_ROOT/${PROJECT_NAME}
cp build/${PROJECT_NAME}Script.js $DOCUMENT_ROOT/${PROJECT_NAME}
sh sign.sh $DOCUMENT_ROOT/${PROJECT_NAME}/${PROJECT_NAME}Script.js $DOCUMENT_ROOT/${PROJECT_NAME}/${PROJECT_NAME}Config.json

# Notify Cloudflare to wipe the CDN cache
echo "Purging Cloudflare cache for zone $CLOUDFLARE_ZONE_ID..."
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{"files":["https://plugins.grayjay.app/${PROJECT_NAME}/Icon.png", "https://plugins.grayjay.app/${PROJECT_NAME}/Config.json", "https://plugins.grayjay.app/${PROJECT_NAME}/Script.js"]}'

# Take site back online
echo "Bringing site back online..."
rm $DOCUMENT_ROOT/maintenance.file
