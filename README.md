# Portfolio Website - Launching Soon

A modern, responsive "Launching Soon" page for a portfolio website with countdown timer, email subscription, and social media integration.

## Features

- ✨ **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- ⏰ **Live Countdown Timer**: 30-day countdown to launch date
- 📧 **Email Subscription**: Functional email subscription form with validation
- 🔗 **Social Media Integration**: Links to social media profiles
- 🎨 **Modern UI/UX**: Purple gradient background with glassmorphism effects
- 📱 **Mobile-First**: Optimized for mobile devices with touch gestures
- ♿ **Accessibility**: Full keyboard navigation and screen reader support
- 🎭 **Animations**: Smooth animations and hover effects
- 🌙 **Performance Optimized**: Fast loading and efficient code

## Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript**: ES6+ with modern features
- **Font Awesome**: Icons for social media and UI elements
- **Google Fonts**: Poppins font family

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Customize content**: Edit the HTML file to update text, social links, etc.
3. **Modify styling**: Update `styles.css` to change colors, fonts, or layout
4. **Add functionality**: Extend `script.js` for additional features

## Customization

### Change Launch Date
```javascript
// In script.js, modify this line:
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30); // Change 30 to desired days
```

### Update Social Media Links
```javascript
// In script.js, update the socialUrls object:
const socialUrls = {
    facebook: 'https://facebook.com/yourprofile',
    twitter: 'https://twitter.com/yourprofile',
    // ... add your actual URLs
};
```

### Modify Colors
```css
/* In styles.css, update the gradient: */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Features in Detail

### Countdown Timer
- Automatically calculates days, hours, and minutes until launch
- Updates every second with smooth animations
- Handles countdown completion

### Email Subscription
- Email validation
- Loading states and success/error messages
- Local storage for development (replace with backend API)

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch gesture support for mobile

### Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- High contrast mode support

## Development Notes

- The email subscription currently stores emails in localStorage
- Social media links are placeholder URLs
- Countdown is set to 30 days from the current date
- All animations respect `prefers-reduced-motion` setting

## Future Enhancements

- Backend API integration for email subscriptions
- Portfolio sections (About, Projects, Contact)
- Blog integration
- CMS integration
- Analytics tracking
- SEO optimization

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This is a template/demo. Replace placeholder content with your actual information before deployment.
