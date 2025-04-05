# param (
#     [int]$version
# )

# Set Version in config
$configPath = "build/config.json"
$config = Get-Content -Path $configPath
$json = $config | ConvertFrom-Json

$oldVersion = $json.version
$newVersion = $oldVersion + 1

Write-Host "Old version: $oldVersion, bumping to $newVersion"

$newVersionString = '"version": '+$newVersion+','
Write-Host $newVersionString
$config = $config -replace '"version": (\d+),', $newVersionString
$config | Set-Content -Path $configPath

# $config.version = $newVersion
# $config | ConvertTo-Json | Set-Content -Path $configPath

# build project
npm run release:node

# Wait for user to confirm release
$confirmation = Read-Host "Do you want to proceed with the release? (yes/no)"
if ($confirmation -ne "yes") {
    Write-Host "Release aborted"
    exit
}


# git stuff
git add .
git commit -m "Bump version to v$newVersion"
git push

# make tag
git tag $newVersion -a -m "GrayJay PietSmiet.de Source Version $newVersion"
git push origin --tags