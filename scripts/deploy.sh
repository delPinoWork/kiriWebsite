#!/usr/bin/env bash
ng build --prod --output-path docs --base-href /
cp docs/index.html docs/404.html
cp CNAME docs/CNAME
git add . &&
git commit -m'deploy' &&
git push