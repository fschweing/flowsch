#!/bin/bash

# Create week directories from 01 to 14 in the current directory
for i in $(seq -w 1 14); do
  mkdir -p "week-$i"
  touch "week-$i/page.mdx"
  echo "Created: week-$i/page.mdx"
done

echo "✅ All week directories and empty MDX pages created."