# Guidelines for Claude working with Deadset Pictures Website

## Build Commands
- `hugo` - Build the site
- `hugo server` - Start development server
- `hugo server --noHTTPCache` - Start dev server without caching
- `npm install` - Install dependencies

## Project Structure
- Hugo-based website with Tailwind CSS
- Content in `/content/` directory
- Templates in `/themes/deadset-theme/layouts/`
- Static assets in `/static/`

## Code Style
- Follow existing conventions in similar files
- HTML: 2-space indentation
- CSS: Use Tailwind classes when possible
- File naming: kebab-case for files and directories
- Images: Place in `/static/images/` with descriptive filenames

## Content Guidelines
- Markdown for content files
- Front matter for page metadata
- Follow folder structure for content organization
- Use Hugo shortcodes for complex content

## Deployment
- Site deploys to Netlify
- Hugo version: 0.144.1
- Custom color scheme defined in tailwind.config.js