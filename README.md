# Drink Express - Premium Alcohol Delivery Website

A complete, professional multi-page website for your alcohol delivery business.

## 🎨 Design Features

**Aesthetic**: Dark Premium Modern
- Sophisticated dark theme with warm amber/gold accents
- Playfair Display for elegant headings
- Work Sans for clean, readable body text
- Smooth animations and transitions
- Fully responsive design

## 📁 Website Structure

### Pages Included:

1. **index.html** - Home Page
   - Hero section with compelling value proposition
   - Product categories showcase
   - Featured products
   - How it works section
   - Customer testimonials
   - Age verification modal

2. **shop.html** - Product Catalog
   - Product grid with filters
   - Search functionality
   - Category filters
   - Price range filters
   - Sort options
   - Pagination

3. **about.html** - About Us
   - Company story
   - Core values
   - Statistics
   - Why choose us sections
   - Responsible drinking commitment

4. **delivery.html** - Delivery Information
   - Delivery options (Express, Standard, Free)
   - Service coverage area
   - Delivery requirements
   - Comprehensive FAQ

5. **contact.html** - Contact Page
   - Contact form
   - Multiple contact methods
   - Business hours
   - Support options

### Supporting Files:

- **styles.css** - Complete stylesheet with:
  - CSS variables for easy customization
  - Responsive design breakpoints
  - Smooth animations
  - Consistent spacing system
  
- **script.js** - JavaScript functionality:
  - Age verification gate
  - Shopping cart management
  - Add to cart functionality
  - Smooth scrolling
  - Scroll animations

## 🚀 Getting Started

### Installation:

1. Download all files to a single folder
2. Open `index.html` in your web browser
3. Navigate between pages using the navigation menu

### File Requirements:

All files must be in the same directory:
```
your-folder/
├── index.html
├── shop.html
├── about.html
├── delivery.html
├── contact.html
├── styles.css
└── script.js
```

## ✨ Key Features

### Age Verification
- Modal appears on first visit
- Age verification stored in browser
- Must accept to access site

### Shopping Cart
- Add to cart from any page
- Cart count displayed in navigation
- Items stored in browser localStorage
- Toast notifications on add to cart

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, 1024px
- Touch-friendly on mobile devices
- Optimized for all screen sizes

### Animations
- Fade-in effects on page load
- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth transitions throughout

## 🎨 Customization Guide

### Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0a0a0a;          /* Main background */
    --bg-secondary: #141414;         /* Section backgrounds */
    --accent-gold: #d4a574;          /* Primary accent */
    --text-primary: #ffffff;         /* Main text */
    --text-secondary: #b8b8b8;       /* Secondary text */
}
```

### Fonts
Change fonts by editing the Google Fonts link in each HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

Then update the CSS variables:
```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### Images
Replace emoji placeholders with real product images:
1. Add images to an `/images` folder
2. Update the `.product-img-placeholder` divs with:
```html
<img src="images/your-product.jpg" alt="Product Name">
```

## 🔧 Technical Details

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- CSS-only animations (no JavaScript animation libraries)
- Lazy loading ready for images
- Minimal external dependencies
- Fast page load times

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text placeholders for images
- Keyboard navigation support
- High contrast ratios

## 📱 Mobile Optimization

The site is fully responsive with:
- Collapsible navigation menu (visual only - can be enhanced)
- Touch-friendly buttons and links
- Optimized images for mobile
- Vertical stacking on small screens

## 🔐 Age Verification

The age gate:
- Appears on first visit
- Stores verification in localStorage
- Blocks content until verified
- Can be reset by clearing browser data

## 🛒 Shopping Cart Features

Current functionality:
- Add products to cart
- View cart count
- Store in localStorage
- Toast notifications

To extend:
- Add checkout page
- Payment integration
- Order management
- User accounts

## 💡 Next Steps

To make this a production website:

1. **Add Real Images**
   - Professional product photography
   - Lifestyle images
   - Team photos

2. **Backend Integration**
   - Connect forms to email/database
   - Product inventory system
   - Order processing
   - Payment gateway

3. **Enhanced Features**
   - User accounts and login
   - Order history
   - Wishlist functionality
   - Product reviews
   - Real-time inventory

4. **SEO Optimization**
   - Meta descriptions
   - Open Graph tags
   - Sitemap
   - Google Analytics

5. **Legal Requirements**
   - Privacy policy
   - Terms of service
   - Age verification compliance
   - Alcohol delivery licenses

## 📞 Support

This is a template website. Customize it to match your brand and business needs.

## ⚖️ Important Notes

- This is a template for demonstration purposes
- Ensure compliance with local alcohol delivery laws
- Implement proper age verification for live deployment
- Add SSL certificate for production
- Review and comply with alcohol advertising regulations

## 🎯 Features Summary

✅ Professional dark premium design
✅ Fully responsive (mobile, tablet, desktop)
✅ Age verification system
✅ Shopping cart functionality
✅ 5 complete pages
✅ Smooth animations
✅ SEO-ready structure
✅ Clean, maintainable code
✅ Easy to customize
✅ No external dependencies (except fonts)

---

**Drink Express** - Premium Alcohol Delivery
Built with modern web standards and best practices.
