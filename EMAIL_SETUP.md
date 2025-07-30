# Email Setup Instructions

The portfolio website now includes email notification functionality that will send notifications to `kumarnaitik7970@gmail.com` when someone subscribes.

## Current Setup

✅ **Email Target**: `kumarnaitik7970@gmail.com`
✅ **Local Storage**: All subscriptions are stored locally
✅ **Browser Notifications**: Shows desktop notifications for new subscriptions
✅ **Email Export**: Can export all emails to CSV
✅ **Developer Tools**: Console commands for managing emails

## How It Works

1. **User subscribes** → Form validates email
2. **Email stored** → Saved in browser's localStorage with timestamp
3. **Notification sent** → Multiple methods attempted:
   - EmailJS (if configured)
   - Formspree API (if configured)
   - Mailto link (fallback - opens email client)
4. **Browser notification** → Shows desktop notification
5. **Success message** → User sees confirmation

## Email Sending Options

### Option 1: EmailJS (Recommended)
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create a service and email template
3. Replace in script.js:
   - `'YOUR_PUBLIC_KEY'` with your EmailJS public key
   - `'YOUR_SERVICE_ID'` with your service ID
   - `'YOUR_TEMPLATE_ID'` with your template ID

### Option 2: Formspree
1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Replace `'YOUR_FORM_ID'` in script.js with your form ID

### Option 3: Custom Backend
Replace the `sendEmailNotification` function with your own API endpoint.

## Developer Tools

Open browser console (F12) and use these commands:

```javascript
// View all subscription emails
portfolioAdmin.viewEmails()

// Export emails to CSV file
portfolioAdmin.exportEmails()

// Get total count of subscriptions
portfolioAdmin.getEmailCount()

// Clear all stored emails
portfolioAdmin.clearEmails()
```

## Testing the Email Functionality

1. Open the website in a browser
2. Enter a test email and click "Notify Me"
3. Check the browser console for logs
4. Look for desktop notification (if permissions granted)
5. Use `portfolioAdmin.viewEmails()` to see stored emails

## Email Template Example

When someone subscribes with email `user@example.com`, you'll receive:

**Subject**: New Portfolio Launch Subscription
**Body**: 
```
New subscriber: user@example.com

This person wants to be notified when your portfolio launches!
```

## Production Deployment

For production use:
1. Set up EmailJS or Formspree account
2. Replace placeholder IDs in script.js
3. Test email functionality thoroughly
4. Consider adding server-side email handling for better reliability

## Troubleshooting

- **No emails received**: Check EmailJS/Formspree configuration
- **Console errors**: Verify API keys and service IDs
- **Mailto opens instead**: EmailJS/Formspree not configured, using fallback
- **No notifications**: Browser notification permission not granted

## Privacy Note

All emails are stored locally in the browser's localStorage. For production, consider:
- Moving to server-side storage
- Adding privacy policy
- Implementing GDPR compliance if needed
