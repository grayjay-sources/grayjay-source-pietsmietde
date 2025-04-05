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

Write-Host "Press any key to release, otherwise exit"
$x = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
if ($x.VirtualKeyCode -eq 27) {
    Write-Host "Exiting..."
    exit
}

# git stuff
git add .
git commit -m "Bump version to v$newVersion"
git tag $newVersion -a -m "GrayJay PietSmiet.de Source Version $newVersion"
git push

# make tag
git push origin --tags