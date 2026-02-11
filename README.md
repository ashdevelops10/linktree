# 🌳 Ashish Koundal's Link Tree

A beautiful, responsive, and modern Link Tree design for resorts, hotels, and restaurant websites. Perfect for showcasing your professional portfolio and directing visitors to your work.

## ✨ Features

- **Beautiful & Modern Design**: Clean, contemporary UI with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop screens
- **Organized Categories**: Separate sections for Resorts, Hotels, and Restaurants
- **Professional Profile**: Display your name, title, contact info, and description
- **Social Links**: Quick access to your social media profiles
- **Website Reference**: Feature your website reference at the top
- **Smooth Animations**: Professional fade-in and hover effects
- **Easy to Customize**: Simple HTML structure for quick modifications
- **No Dependencies**: Pure HTML, CSS, and JavaScript (uses Font Awesome for icons)

## 📁 File Structure

```
linktree/
├── index.html          # Main HTML file with structure
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # Documentation (this file)
```

## 🚀 Quick Start

1. **Clone or download the repository**
2. **Open `index.html` in your browser**
3. **Customize the content (see below)**

## ⚙️ Customization Guide

### 1. Update Your Contact Information

Open `index.html` and find the contact section:

```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <a href="tel:+919876543210" class="contact-link">+91 98765 43210</a>
</div>
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:ashish@example.com" class="contact-link">ashish@example.com</a>
</div>
```

**Replace:**
- `+919876543210` with your actual phone number
- `ashish@example.com` with your actual email address

### 2. Update Social Media Links

Find the social links section:

```html
<a href="https://github.com/yourusername" class="social-btn" title="GitHub">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/yourusername" class="social-btn" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
```

**Replace the `href` attributes with your actual social media URLs**

### 3. Add Your Resort, Hotel, and Restaurant Links

When you have links to add, replace the placeholder buttons. For example:

**Current:**
```html
<button class="link-button empty-state" data-type="resort">
    <i class="fas fa-plus"></i>
    <span>Resort Link 1</span>
</button>
```

**Change to (active link):**
```html
<a href="https://your-resort-website.com" class="link-button" target="_blank">
    <i class="fas fa-link"></i>
    <span>Your Resort Name</span>
</a>
```

### 4. Customize Colors (Optional)

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #6366f1;        /* Main brand color */
    --secondary-color: #ec4899;      /* Accent color */
    --accent-color: #f59e0b;         /* Highlight color */
    --dark-bg: #0f172a;              /* Dark background */
    --light-bg: #f8fafc;             /* Light background */
    --text-dark: #1e293b;            /* Dark text */
    --text-light: #64748b;           /* Light text */
}
```

### 5. Change the Gradient Background

In `styles.css`, modify the body gradient:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}
```

Or the animated gradient in `.background`:

```css
.background {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}
```

## 📱 Responsive Breakpoints

The design is optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Icon Options

Icons are provided by [Font Awesome 6.4.0](https://fontawesome.com/). Here are some useful icon names:

**Travel & Hospitality:**
- `fa-umbrella-beach` - Resorts
- `fa-hotel` - Hotels
- `fa-utensils` - Restaurants
- `fa-wifi` - Connectivity
- `fa-swimming-pool` - Pool
- `fa-wine-glass` - Bar/Dining
- `fa-map` - Location
- `fa-phone` - Phone
- `fa-envelope` - Email

**Social Media:**
- `fab fa-facebook`
- `fab fa-instagram`
- `fab fa-twitter`
- `fab fa-linkedin`
- `fab fa-youtube`
- `fab fa-whatsapp`

## 💾 Local Storage Features

The JavaScript includes local storage capabilities to save your links:

```javascript
// Save links
saveLinksToLocalStorage(linksArray);

// Load links
loadLinksFromLocalStorage();
```

## 📊 Analytics Integration Ready

The script includes tracking functions for future analytics integration:

```javascript
trackLinkClick(linkName, category);
```

## 🌙 Dark Mode Ready

The app includes dark mode support (can be customized):

```javascript
toggleDarkMode();
checkDarkModePreference();
```

## 🔗 Link Management Functions

Use these JavaScript functions to manage your links:

```javascript
// Update profile information
updateProfileInfo('Your Name', 'Your Title', 'your@email.com', '+91 98765 43210');

// Share your profile
shareProfile();

// Export links as JSON
exportLinksAsJSON();

// Copy text to clipboard
copyToClipboard(text);
```

## 🎯 Best Practices

1. **Keep URLs Updated**: Ensure all link URLs are correct before sharing
2. **Mobile Testing**: Always test on mobile devices before going live
3. **Performance**: Minimize the number of links to keep the page fast
4. **Accessibility**: Use clear, descriptive link names
5. **Regular Maintenance**: Update links and information regularly

## 🚢 Deployment

### Host on GitHub Pages (Free)

1. Push files to a GitHub repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/linktree`

### Host on Netlify (Free)

1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. Your site will be live instantly

### Host on Vercel (Free)

1. Connect your GitHub repository to Vercel
2. Deploy with one click
3. Get automatic HTTPS and custom domain support

### Self-Hosted

1. Upload files to your web server via FTP/SSH
2. Ensure `index.html` is accessible
3. Configure your domain to point to your server

## 📝 SEO Optimization

To improve search engine visibility, update the meta tags in `index.html`:

```html
<title>Ashish Koundal - Website Design & Developer</title>
<meta name="description" content="Your description here">
<meta name="keywords" content="resorts, hotels, restaurants, website design, developer">
<meta name="author" content="Ashish Koundal">
```

## 🔐 Security Notes

- This is a static website (no server-side code needed)
- All links open in new tabs with `target="_blank"`
- Contact information is displayed as-is (consider privacy)
- No sensitive data is stored locally

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 🆘 Troubleshooting

**Icons not showing?**
- Check that the Font Awesome CDN link is working
- Verify internet connection

**Colors look different?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is loaded correctly

**Links not working?**
- Verify URLs include `https://`
- Check for typos in URLs

**Mobile layout broken?**
- Ensure viewport meta tag is in `<head>`
- Check browser zoom level (should be 100%)

## 📄 License

This project is free to use and modify for personal or commercial purposes.

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section above
2. Verify all customizations follow the guidelines
3. Test in different browsers

## 🎯 Next Steps

1. ✅ Customize contact information
2. ✅ Update social media links
3. ✅ Add your resort, hotel, and restaurant website links
4. ✅ Upload to your preferred hosting platform
5. ✅ Share with your audience!

---

**Created by:** Website Design & Developer Services  
**Last Updated:** February 2024  
**Version:** 1.0