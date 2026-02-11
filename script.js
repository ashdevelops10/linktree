// Minimal script for the reference page

document.addEventListener('DOMContentLoaded', () => {
  // Placeholder: users will replace href="#" with real URLs
  const links = document.querySelectorAll('.ref-link');
  links.forEach((a) => {
    a.addEventListener('click', (e) => {
      if (a.getAttribute('href') === '#') {
        e.preventDefault();
        // gentle visual feedback
        a.style.opacity = '0.7';
        setTimeout(() => (a.style.opacity = ''), 250);
      }
    });
  });
});

/**
 * Helper to update contact info from external scripts if needed
 */
function updateContact(phone, email) {
  const tel = document.querySelector('.contact a[href^="tel:"]');
  const mail = document.querySelector('.contact a[href^="mailto:"]');
  if (tel) { tel.href = `tel:${phone}`; tel.textContent = phone; }
  if (mail) { mail.href = `mailto:${email}`; mail.textContent = email; }
}

// handle missing thumbnails: replace with inline SVG placeholder
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.site-thumb').forEach(img => {
    img.addEventListener('error', () => {
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600"><rect width="100%" height="100%" fill="#eef2f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial, Helvetica, sans-serif" font-size="20">Preview unavailable</text></svg>`);
    });
  });
});
