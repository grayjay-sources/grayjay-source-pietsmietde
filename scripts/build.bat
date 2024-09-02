@echo off
@REM cd /d %~dp0
git pull
git submodule init
git submodule update
mkdir src\responses\pietsmiet.de\
start "" json2ts -i "schemas/pietsmiet.de/*.schema.json" -o "src/responses/pietsmiet.de/"
mkdir src\responses\ytapi.minopia.de\
start "" json2ts -i "schemas/ytapi.minopia.de/*.schema.json" -o "src/responses/ytapi.minopia.de/"