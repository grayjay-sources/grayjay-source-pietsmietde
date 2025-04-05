param (
    [int]$version
)

# Set Version in config
$configPath = "build/config.json"
$config = Get-Content -Raw -Path $configPath | ConvertFrom-Json
$config.version = $version
$config | ConvertTo-Json | Set-Content -Path $configPath

# build project
npm run release:node

# git stuff
git add .
git commit -m "Bump version to v$version"
git push

# make tag
git tag $version -a -m "GrayJay PietSmiet.de Source Version $version"
git push origin --tags