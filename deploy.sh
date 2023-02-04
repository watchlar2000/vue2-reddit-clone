#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:watchlar2000/vue2-reddit-clone.git main:gh-pages

cd -