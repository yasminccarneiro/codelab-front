#!/bin/bash
rm -rf ./dist
rm -rf ./node_modules
# npm cache clean --force
npm install --legacy-peer-deps
npm dedupe
npm start 