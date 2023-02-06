#!/usr/bin/env sh

set -e

yarn build

# cd dist

# git init
# git add -A
# git commit -m "deploy"
# git push -f git@github.com:watchlar2000/vue2-reddit-clone.git main:gh-pages

git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages

cd -