# Set the DOCUMENT_ROOT
$documentRoot = "/var/www/sources"
$projectName = $args[0]

# Take site offline
Write-Host "Taking site offline..."
New-Item -ItemType File -Path "$documentRoot/maintenance.file"

# Swap over the content
Write-Host "Deploying content..."
New-Item -ItemType Directory -Force -Path "$documentRoot/$projectName"
Copy-Item -Path "build/$projectNameIcon.png" -Destination "$documentRoot/$projectName" -Force
Copy-Item -Path "build/$projectNameConfig.json" -Destination "$documentRoot/$projectName" -Force
Copy-Item -Path "build/$projectNameScript.js" -Destination "$documentRoot/$projectName" -Force
& .\sign.ps1 -InputFile "$documentRoot/$projectName/$projectNameScript.js" -ConfigFile "$documentRoot/$projectName/$projectNameConfig.json"

# Notify Cloudflare to wipe the CDN cache
Write-Host "Purging Cloudflare cache for zone $CLOUDFLARE_ZONE_ID..."
Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" `
    -Method Post `
    -Headers @{"Authorization"="Bearer $CLOUDFLARE_API_TOKEN"; "Content-Type"="application/json"} `
    -Body '{"files":["https://plugins.grayjay.app/$projectName/Icon.png", "https://plugins.grayjay.app/$projectName/Config.json", "https://plugins.grayjay.app/$projectName/Script.js"]}'

# Take site back online
Write-Host "Bringing site back online..."
Remove-Item "$documentRoot/maintenance.file"
