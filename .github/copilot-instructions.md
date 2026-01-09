# Copilot Instructions for KY-EXPORT

## Project Overview

- **Type**: Modern SPA (Single Page Application) - Export Company Website
- **Tech Stack**: Vue 3 (Composition API) + Vite + TailwindCSS + Vue Router
- **Purpose**: Professional website for KY EXPORT LLC, an international goods exporter specializing in Milexus brand products
- **Key Features**: Product catalog, contact forms with prepopulation, responsive design, smooth animations

## Architecture

### Project Structure
```
/
├── src/
│   ├── views/           # Page components (HomePage, AboutPage, ProductsPage, ContactPage)
│   ├── components/      # Reusable components (NavBar, FooterSection)
│   ├── router/          # Vue Router configuration
│   ├── data/            # Static data (products.js - product catalog)
│   ├── assets/          # Images and static assets
│   ├── App.vue          # Root component with NavBar/Footer layout
│   ├── main.js          # App initialization with router
│   └── style.css        # TailwindCSS imports + global styles
├── public/              # Static assets served as-is
└── index.html           # Entry HTML file
```

### Key Components

- **NavBar**: Fixed header with responsive mobile menu, logo, and navigation links
- **FooterSection**: Company info, contact details, quick links, social media placeholders
- **HomePage**: Hero section with CTA, featured products grid, "Why Choose Us" section
- **ProductsPage**: Filterable product catalog with search and category filtering
- **AboutPage**: Mission/Vision/Values, company story, operations workflow
- **ContactPage**: Contact form with query parameter prepopulation from product pages

### Data Flow

- **Product Data** ([src/data/products.js](src/data/products.js)): Centralized product catalog with images, descriptions, categories
- **Contact Form Prepopulation**: Products page passes product name via query params (`/contact?product=ProductName`)
- **Route-based Navigation**: Vue Router handles SPA navigation with smooth scroll behavior

## Development Workflows

### Setup & Run
```bash
# Install dependencies
npm install

# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Key Dependencies
- `vue@3.x` - Progressive JavaScript framework
- `vue-router@4.x` - Official router for Vue 3
- `tailwindcss@4.x` - Utility-first CSS framework
- `vite` - Next-generation frontend tooling

## Code Conventions

### Vue 3 Composition API Patterns
- Use `<script setup>` syntax for all components
- Import utilities from Vue explicitly: `import { ref, computed, onMounted } from 'vue'`
- Use `ref()` for reactive primitives, `reactive()` for objects (though ref is preferred throughout)

### Component Structure
```vue
<template>
  <!-- Template with Tailwind classes -->
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// Component logic here
</script>
```

### Styling with TailwindCSS
- **Color Scheme**: 
  - Primary: `primary-{50-900}` (Navy blues) for trust/professionalism
  - Accent: `accent-{50-900}` (Gold) for premium feel
  - Use `bg-gradient-to-br` for modern gradient backgrounds
- **Common Patterns**:
  - Cards: `bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all`
  - Buttons: `bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors`
  - Sections: `py-20` for vertical spacing
  - Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Routing & Navigation
- Use `<router-link>` for internal navigation (SPA benefits)
- Use `router.push()` programmatically with query params for contact form prepopulation
- Active links styled with `active-class="text-primary-700"`

### Animation Classes (defined in [tailwind.config.js](tailwind.config.js))
- `animate-fade-in` - Smooth fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-float` - Floating animation for hero elements

## Product Data Management

### Adding/Updating Products
Edit [src/data/products.js](src/data/products.js):
```javascript
{
  id: 1,
  name: 'Product Name',
  category: 'Household|Cleaning|Personal Care|Safety',
  description: 'Product description',
  image: 'https://images.unsplash.com/...',  // Use Unsplash or actual product images
  featured: true|false  // Shows on homepage if true
}
```

### Image Optimization
- Currently using Unsplash placeholder images
- TODO: Replace with actual Milexus product images
- Images are lazy-loaded automatically by browser
- Use `aspect-square` class for consistent product image dimensions

## Contact Form Integration

### Current Implementation
- Form submission logs to console (development)
- Shows success message after submission
- TODO: Integrate with email service (EmailJS, FormSubmit, or backend API)

### Prepopulation from Products
When users click "Request Quote" on a product:
```javascript
router.push({
  path: '/contact',
  query: { product: product.name }
})
```
ContactPage reads `route.query.product` and auto-fills subject and message.

## Responsive Design

- **Mobile-First**: All components designed for mobile, then enhanced for desktop
- **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:` (Tailwind defaults)
- **Mobile Menu**: Hamburger menu in NavBar with slide-down animation
- **Grid Layouts**: Responsive grids (1 col mobile → 3-4 cols desktop)

## Things to Avoid

- Don't use inline styles - use Tailwind utility classes
- Avoid `<style scoped>` unless absolutely necessary (prefer Tailwind)
- Don't hardcode colors - use theme colors from config
- Don't use `var()` CSS variables directly - rely on Tailwind theme

## Quick Reference

### Common Tasks

```bash
# Add new page
# 1. Create src/views/NewPage.vue
# 2. Add route in src/router/index.js
# 3. Add navigation link in src/components/NavBar.vue

# Update company info (contact details, address)
# Edit: src/components/FooterSection.vue
# Edit: src/views/ContactPage.vue

# Change color scheme
# Edit: tailwind.config.js → theme.extend.colors

# Add/remove products
# Edit: src/data/products.js
```

### Useful File Locations
- Company contact info: [FooterSection.vue](src/components/FooterSection.vue) and [ContactPage.vue](src/views/ContactPage.vue)
- Navigation links: [NavBar.vue](src/components/NavBar.vue)
- Product catalog: [products.js](src/data/products.js)
- Theme colors: [tailwind.config.js](tailwind.config.js)
- Global styles: [style.css](src/style.css)
