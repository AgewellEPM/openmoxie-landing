# OpenMoxie Community Website

Modern, modular website built with Angular 20, HTML5, and CSS3, styled after the Vibe Awards aesthetic.

## Features

- **Dark Theme**: Purple/blue gradients with glassmorphism effects
- **Responsive Design**: Breakpoints at 1068px, 834px, 734px, and 480px
- **Smooth Animations**: CSS animations with cubic-bezier timing
- **Modular Components**: Header with fixed navigation and Hero section with CTAs
- **Railway Deployment Ready**: Configured for easy deployment to Railway

## Tech Stack

- **Angular 20**: Modern TypeScript framework
- **HTML5/CSS3**: Semantic markup and modern CSS features
- **CSS Grid**: Responsive layouts with auto-fit
- **Custom Properties**: CSS variables for theming
- **Backdrop Filters**: Glassmorphism effects

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve:prod
```

The app will be available at `http://localhost:4200` in development mode.

## Railway Deployment

This app is configured for Railway deployment with:

1. **railway.json**: Deployment configuration
2. **http-server**: Static file server for production
3. **Production build**: Optimized Angular build

### Deploy to Railway

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Initialize project:
   ```bash
   railway init
   ```

4. Deploy:
   ```bash
   railway up
   ```

Or connect your GitHub repository to Railway and it will auto-deploy on push.

## Project Structure

```
modern-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/      # Fixed navigation header
│   │   │   └── hero/        # Hero section with CTAs
│   │   ├── app.ts           # Root component
│   │   ├── app.html         # Main template
│   │   └── app.routes.ts    # Routing configuration
│   ├── styles.css           # Global dark theme styles
│   └── index.html           # HTML entry point
├── railway.json             # Railway deployment config
└── package.json             # Dependencies and scripts
```

## Color Palette

- **Primary Purple**: `#667eea`
- **Dark Purple**: `#764ba2`
- **Accent Pink**: `#f093fb`
- **Background**: `#000000` with gradient overlays

## Customization

### Update Content

Edit the components in `src/app/components/`:
- `header/header.html` - Navigation links
- `hero/hero.html` - Hero content and CTAs

### Modify Theme

Edit CSS custom properties in `src/styles.css`:
- Colors, gradients, shadows
- Typography, spacing
- Responsive breakpoints

### Add Sections

Generate new components:
```bash
npx ng generate component components/[name] --skip-tests
```

## License

MIT
