@echo off
cd /d %~dp0
git pull
git submodule init
git submodule update
git submodule status
json2ts -i 'schemas/pietsmiet.de/*.schema.json' -o 'src/responses/pietsmiet.de/'
json2ts -i 'schemas/ytapi.minopia.de/*.schema.json' -o 'src/responses/ytapi.minopia.de/'