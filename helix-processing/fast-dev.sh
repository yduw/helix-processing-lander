#!/bin/bash

# Clean any previous builds
rm -rf .next
rm -rf node_modules/.cache

# Start with Turbopack for maximum speed
echo "Starting development server with Turbopack..."
exec bun run dev:turbo