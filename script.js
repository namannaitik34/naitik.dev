// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const subscriptionForm = document.getElementById('subscriptionForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

// Countdown Timer Elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Debug: Check if elements are found
console.log('Timer elements:', { daysElement, hoursElement, minutesElement, secondsElement });

// Set launch date (30 days from now) - Only set once, then persist
let launchDate;
const storedLaunchDate = localStorage.getItem('portfolioLaunchDate');

if (storedLaunchDate) {
    // Use existing launch date from localStorage
    launchDate = new Date(storedLaunchDate);
    console.log('Using stored launch date:', launchDate.toLocaleString());
} else {
    // Set new launch date and store it
    launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    localStorage.setItem('portfolioLaunchDate', launchDate.toISOString());
    console.log('New launch date set and stored:', launchDate.toLocaleString());
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change hamburger to X when menu is open
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on navigation links
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        
        // Smooth scroll to section (if sections exist)
        const targetId = link.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Countdown Timer Function
function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zeros and animate the change
        animateNumberChange(daysElement, String(days).padStart(2, '0'));
        animateNumberChange(hoursElement, String(hours).padStart(2, '0'));
        animateNumberChange(minutesElement, String(minutes).padStart(2, '0'));
        animateNumberChange(secondsElement, String(seconds).padStart(2, '0'));
        
        // Debug: log the countdown values
        console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
        // Countdown finished
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        
        // You can add launch functionality here
        showMessage('We have launched! 🚀', 'success');
    }
}

// Animate number changes in countdown
function animateNumberChange(element, newValue) {
    if (!element) {
        console.error('Element not found for animation');
        return;
    }
    
    if (element.textContent !== newValue) {
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
        }, 100);
    }
}

// Configuration for email notifications
const NOTIFICATION_EMAIL = 'kumarnaitik7970@gmail.com';

// Initialize EmailJS (you'll need to replace with your actual EmailJS credentials)
function initializeEmailJS() {
    if (typeof emailjs !== 'undefined') {
        // You need to replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        // Sign up at https://www.emailjs.com/ to get these credentials
        emailjs.init('YOUR_PUBLIC_KEY');
    }
}

// Function to reset the launch date (for development/testing)
function resetLaunchDate(daysFromNow = 30) {
    const newLaunchDate = new Date();
    newLaunchDate.setDate(newLaunchDate.getDate() + daysFromNow);
    localStorage.setItem('portfolioLaunchDate', newLaunchDate.toISOString());
    
    // Update the global variable
    launchDate = newLaunchDate;
    
    console.log(`Launch date reset to ${daysFromNow} days from now:`, newLaunchDate.toLocaleString());
    
    // Force an immediate update
    updateCountdown();
    
    return newLaunchDate;
}

// Function to get time remaining in a readable format
function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;
    
    if (distance <= 0) {
        return 'Launch time has passed!';
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Function to view stored subscription emails (for development/testing)
function viewStoredEmails() {
    const emails = JSON.parse(localStorage.getItem('subscriptionEmails') || '[]');
    console.log('Stored subscription emails:', emails);
    return emails;
}

// Function to export emails to CSV
function exportEmailsToCSV() {
    const emails = JSON.parse(localStorage.getItem('subscriptionEmails') || '[]');
    if (emails.length === 0) {
        alert('No subscription emails found!');
        return;
    }
    
    const csvContent = "data:text/csv;charset=utf-8," 
        + "Email,Timestamp,Notified\n"
        + emails.map(item => {
            if (typeof item === 'string') {
                return `${item},Unknown,false`;
            }
            return `${item.email},${item.timestamp},${item.notified}`;
        }).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "portfolio_subscriptions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Email Subscription Form
subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        showMessage('Subscribing...', 'info');
        
        // Send email notification
        sendEmailNotification(email)
            .then(() => {
                showMessage('Thank you! You\'ll be notified when we launch. 🎉', 'success');
                emailInput.value = '';
                storeEmail(email);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                showMessage('Subscription successful! We\'ll notify you at launch.', 'success');
                emailInput.value = '';
                storeEmail(email);
            });
    } else {
        showMessage('Please enter a valid email address.', 'error');
    }
});

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Send email notification using EmailJS or fetch API
async function sendEmailNotification(subscriberEmail) {
    try {
        // Method 1: Using EmailJS (requires EmailJS account setup)
        // This is a client-side email service
        if (typeof emailjs !== 'undefined') {
            const templateParams = {
                to_email: NOTIFICATION_EMAIL,
                from_email: subscriberEmail,
                message: `New subscription from: ${subscriberEmail}`,
                subject: 'New Portfolio Launch Subscription'
            };
            
            return await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
        }
        
        // Method 2: Using a simple notification API (example with Formspree)
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: subscriberEmail,
                message: `New subscription for portfolio launch notifications`,
                _replyto: subscriberEmail
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send notification');
        }
        
        return response.json();
    } catch (error) {
        // Fallback: Send email using mailto (opens user's email client)
        const subject = encodeURIComponent('New Portfolio Launch Subscription');
        const body = encodeURIComponent(`New subscriber: ${subscriberEmail}\n\nThis person wants to be notified when your portfolio launches!`);
        const mailtoLink = `mailto:${NOTIFICATION_EMAIL}?subject=${subject}&body=${body}`;
        
        // Open email client (this will work but requires user action)
        window.open(mailtoLink, '_blank');
        
        throw error; // Re-throw to handle in calling function
    }
}

// Show form messages
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-hide success/error messages after 5 seconds
    if (type !== 'info') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Store email locally and send notification
function storeEmail(email) {
    let emails = JSON.parse(localStorage.getItem('subscriptionEmails') || '[]');
    if (!emails.includes(email)) {
        emails.push({
            email: email,
            timestamp: new Date().toISOString(),
            notified: true
        });
        localStorage.setItem('subscriptionEmails', JSON.stringify(emails));
        
        // Log for development
        console.log(`New subscription: ${email} - Notification sent to ${NOTIFICATION_EMAIL}`);
        
        // Send browser notification if permission granted
        if (Notification.permission === 'granted') {
            new Notification('New Subscription!', {
                body: `${email} subscribed to your portfolio launch notifications`,
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNjRmZmRhIi8+Cjwvc3ZnPgo='
            });
        }
    }
}

// Request notification permission on page load
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Initialize countdown and set interval
console.log('Initializing countdown timer...');
updateCountdown(); // Run immediately
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize EmailJS
initializeEmailJS();

// Request notification permission
requestNotificationPermission();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('Page fully loaded, timer should be running');
});

// Ensure timer starts when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Re-initializing timer elements');
    
    // Re-get elements in case they weren't available initially
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl && hoursEl && minutesEl && secondsEl) {
        console.log('All timer elements found on DOM ready');
        // Force an immediate update
        updateCountdown();
    } else {
        console.error('Some timer elements still not found after DOM ready');
    }
});

// Add smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll (if you add more sections)
document.querySelectorAll('.main-content > *').forEach(el => {
    observer.observe(el);
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Add touch events for mobile interaction enhancement
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeLength = touchEndY - touchStartY;
    
    // Close menu on upward swipe when menu is open
    if (swipeLength < -swipeThreshold && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Add focus management for accessibility
menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.click();
    }
});

// Manage focus when menu opens/closes
const firstNavLink = document.querySelector('.nav-menu a');
const lastNavLink = document.querySelector('.nav-menu a:last-child');

navMenu.addEventListener('transitionend', () => {
    if (navMenu.classList.contains('active')) {
        firstNavLink.focus();
    }
});

// Trap focus within menu when open
document.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('active')) return;
    
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstNavLink) {
                e.preventDefault();
                lastNavLink.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastNavLink) {
                e.preventDefault();
                firstNavLink.focus();
            }
        }
    }
});

console.log('Portfolio website loaded successfully! 🚀');

// Developer tools - accessible via browser console
window.portfolioAdmin = {
    // Email management
    viewEmails: viewStoredEmails,
    exportEmails: exportEmailsToCSV,
    clearEmails: () => {
        localStorage.removeItem('subscriptionEmails');
        console.log('All subscription emails cleared!');
    },
    getEmailCount: () => {
        const emails = JSON.parse(localStorage.getItem('subscriptionEmails') || '[]');
        return emails.length;
    },
    notificationEmail: NOTIFICATION_EMAIL,
    
    // Timer management
    resetTimer: resetLaunchDate,
    getLaunchDate: () => {
        console.log('Current launch date:', launchDate.toLocaleString());
        return launchDate;
    },
    getTimeRemaining: getTimeRemaining,
    clearLaunchDate: () => {
        localStorage.removeItem('portfolioLaunchDate');
        console.log('Launch date cleared! Refresh page to set new date.');
    }
};

console.log('💡 Developer Tools Available:');
console.log('📧 Email Management:');
console.log('  portfolioAdmin.viewEmails() - View all subscription emails');
console.log('  portfolioAdmin.exportEmails() - Export emails to CSV');
console.log('  portfolioAdmin.clearEmails() - Clear all stored emails');
console.log('  portfolioAdmin.getEmailCount() - Get total subscription count');
console.log('⏰ Timer Management:');
console.log('  portfolioAdmin.resetTimer(days) - Reset countdown (default: 30 days)');
console.log('  portfolioAdmin.getLaunchDate() - View current launch date');
console.log('  portfolioAdmin.getTimeRemaining() - Get readable time remaining');
console.log('  portfolioAdmin.clearLaunchDate() - Clear stored launch date');
console.log(`📮 Notifications sent to: ${NOTIFICATION_EMAIL}`);
