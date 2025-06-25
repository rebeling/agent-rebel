# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with MkDocs Material, serving as a portfolio/blog for technical projects and experiments. The site includes:

- Personal introduction and resume
- Blog posts about AI, coding, and technical projects
- Project showcases (Agents, LLM-as-a-judge, Rust Everywhere, Dominique, etc.)
- Custom styling and theming

## Development Commands

### Core Commands
- `mkdocs serve` - Start development server with live reload
- `mkdocs build` - Build static site to `site/` directory
- `mkdocs gh-deploy` - Deploy to GitHub Pages

### Package Management
- `uv lock` - Update dependencies (uses uv for Python package management)
- `uv sync` - Install dependencies from lockfile

## Architecture

### Directory Structure
- `docs/` - Main content directory
  - `blog/posts/` - Blog post markdown files
  - `dialogues/` - Conversation/dialogue documentation
  - `styles/` - Custom CSS files (extra.css, portfolio.css, agents.css, main-bg.css)
  - `img/` - Images and assets
- `site/` - Generated static site (build output)
- `templates/` - Template files
- `overrides/` - MkDocs theme overrides

### Key Files
- `mkdocs.yml` - Main configuration file with theme, plugins, and navigation
- `pyproject.toml` - Python project configuration with dependencies
- `docs/index.md` - Homepage with custom HTML and JavaScript for theme switching

### Content Management
- Blog posts are in `docs/blog/posts/` as individual markdown files
- Navigation is configured in `mkdocs.yml` with both local pages and external links
- Projects section links to blog posts using absolute URLs
- Custom CSS provides theming and portfolio styling

### Theming
- Uses Material for MkDocs theme with pink primary/accent colors
- Supports automatic, light, and dark modes
- Custom CSS files handle additional styling
- Dynamic status badge with theme-aware iframe

## Dependencies
- MkDocs core with Material theme
- MkDocs blogging plugin for blog functionality
- MkDocs LLMsTXT plugin
- MkDocs Mermaid2 plugin for diagrams
- Custom CSS for portfolio and project styling