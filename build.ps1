param (
    [int]$version
)



npm run release:node
git tag $version -a -m "GrayJay PietSmiet.de Source Version $version"
git add .
git commit -m "Bump version to v$version"
git push
git push origin --tags