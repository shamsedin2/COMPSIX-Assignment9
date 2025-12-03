#!/bin/bash

# COMPSIX Assignment 9 - Repository Setup Script

echo "Setting up COMPSIX Assignment 9 repository..."

# Initialize git repository
git init

# Add all files
git add README.md .gitignore package.json index.html src/

# Create initial commit
git commit -m "Initial commit: Add project structure and starter files"

# Set main branch
git branch -M main

# Add remote origin
git remote add origin https://github.com/shamseldinadam23/COMPSIX-Assignmen9.git

echo ""
echo "Repository initialized successfully!"
echo ""
echo "To push to GitHub, run:"
echo "  git push -u origin main"
echo ""
echo "To install dependencies (if any), run:"
echo "  npm install"
echo ""
echo "To run the project:"
echo "  npm start                  # Run in Node.js"
echo "  open index.html            # Open in browser"
echo ""
echo "Note: Make sure you have proper authentication set up with GitHub"
