#!/usr/bin/env/sh

# Abort if an error occurs
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd build/

# Initialize a new Git repository
git init

# Add all files in the output directory to the repo
git add -A

# Commit the changes with a message
git commit -m "Js go brrr"

# Push the commit to the remote repo
git push -f git@github.com:Nwko/Chunchunmaru.git master:js

# Confirm the deployment has been successful
echo "js go brrr"

# Show the message for 3 seconds before closing
sleep 3

