# WP Theme and Plugin Repository for GNPA ( Grupo Nacional de Preparação e Autossuficiencia)
[GNPA Website](https://preparacaoeautossuficiencia.pt/)

## Readmes
- [Portugues](readmes/readme-pt.md)
- [English](readmes/readme-en.md)

### Goal
The goal is to rebuild and maintain the website only with [FSE](https://wordpress.org/documentation/article/site-editor/), the native WordPress editor.

With the help of custom blocks for [Gutenberg](https://github.com/WordPress/gutenberg), using React, Typescript, PHP and SCSS.

The public pages will be created with FSE and Gutenberg as mentioned, while membership pages and internal tooling will be made only in React/Typescript as SPA, with Custom RestAPI endpoints.

### Project Setup
The project setup and development uses multiple technologies, please refer to **Readmes** [Portugues](readmes/readme-pt.md) or [English](readmes/readme-en.md) for a detailed overview.

On a simplified version, we are using:
- BUN for installing packages and some tooling
- NODE because WordPress packages are made in node and their dependencies
- PHP ( WordPress backend language)
- Docker ( to spin up a wp-env environment ) [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/)
- React and Typescript
