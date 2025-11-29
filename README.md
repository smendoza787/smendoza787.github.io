# Sergio Mendoza's Blog

A minimal dev blog built with [Eleventy](https://www.11ty.dev/).

## Features

- Paper-like design with warm tones
- Light/dark mode with system preference detection
- RSS feed at `/feed.xml`
- Markdown posts with syntax highlighting
- Fully static, no JavaScript required (except theme toggle)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Adding Posts

Create a new `.md` file in `src/posts/`:

```markdown
---
title: My New Post
description: A brief description for the post list
date: 2024-12-01
---

Your content here...
```

Posts are automatically sorted by date (newest first) and added to the RSS feed.

## Project Structure

```
src/
├── _data/
│   └── site.json       # Site metadata
├── _includes/
│   ├── base.njk        # Base HTML layout
│   └── post.njk        # Blog post layout
├── css/
│   └── style.css       # All styles
├── posts/
│   └── *.md            # Blog posts
└── index.njk           # Homepage
```

## License

MIT
