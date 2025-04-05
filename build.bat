@REM npm run release:node
git tag %1 -a -m "GrayJay PietSmiet.de Source Version %1"
git add .
git commit -m "Bump version to v%1"
git push
git push origin --tags