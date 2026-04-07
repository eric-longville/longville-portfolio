#!/bin/bash

# Portfolio Installation Verification Script
# Version 2.0.0

echo "================================================"
echo "Portfolio Installation Verification"
echo "Version 2.0.0"
echo "================================================"
echo ""

# Check Node.js version
echo "Checking Node.js version..."
NODE_VERSION=$(node --version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Node.js installed: $NODE_VERSION"
    # Extract major version
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
    if [ "$MAJOR_VERSION" -ge 18 ]; then
        echo "✅ Node.js version is compatible (18+)"
    else
        echo "⚠️  Warning: Node.js 18+ recommended, you have: $NODE_VERSION"
    fi
else
    echo "❌ Node.js not found. Please install Node.js 18 or higher."
    exit 1
fi
echo ""

# Check npm version
echo "Checking npm version..."
NPM_VERSION=$(npm --version 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ npm installed: $NPM_VERSION"
else
    echo "❌ npm not found. Please install npm."
    exit 1
fi
echo ""

# Check if package.json exists
echo "Checking project files..."
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json not found. Are you in the portfolio directory?"
    exit 1
fi
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ node_modules found (dependencies installed)"
else
    echo "⚠️  node_modules not found"
    echo "   Run: npm install"
fi
echo ""

# Check for key files
echo "Checking project structure..."
FILES=(
    "config/site.ts"
    "app/page.tsx"
    "components/Navigation.tsx"
    "next.config.js"
    "tailwind.config.ts"
    "tsconfig.json"
)

ALL_FOUND=true
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file missing"
        ALL_FOUND=false
    fi
done
echo ""

# Check documentation files
echo "Checking documentation..."
DOCS=(
    "README.md"
    "QUICKSTART.md"
    "CHANGELOG.md"
    "SECURITY.md"
    "UPDATE_NOTES.md"
    "PROJECT_OVERVIEW.md"
)

for doc in "${DOCS[@]}"; do
    if [ -f "$doc" ]; then
        echo "✅ $doc"
    else
        echo "⚠️  $doc missing"
    fi
done
echo ""

# Final status
echo "================================================"
if [ "$ALL_FOUND" = true ]; then
    echo "✅ All essential files found!"
    echo ""
    echo "Next steps:"
    echo "1. Run: npm install (if not already done)"
    echo "2. Run: npm run dev"
    echo "3. Open: http://localhost:3000"
    echo "4. Edit: config/site.ts to customize"
else
    echo "⚠️  Some files are missing. Please extract the full archive."
fi
echo "================================================"
