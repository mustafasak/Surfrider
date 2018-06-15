#!/usr/bin/env bash

# Go to the installation folder
cd /var/www/surfrider/admin

echo "### Print dependency versions ###"
echo "node: `node -v`"
echo "npm: `npm -v`"

# Get the latest version via git
echo "### Getting the latest version via git ###"
git fetch origin
git reset origin/master --hard

# Install Front-end dependencies for React
echo "### Installing Front-end depenencies for React ###"
yarn

# Build the staging environment
echo "### Building the Staging environment for React ###"
npm run build
