# EmailJS Setup Guide for MakeCodeEasy Feedback Form

## Overview
This setup uses EmailJS to send feedback form submissions directly to your makecodeeasy.in@gmail.com email address without requiring a backend server.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Custom SMTP"
4. Configure with your makecodeeasy.in@gmail.com credentials
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template (Plain Text, no HTML)
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template with plain text only (no HTML):

**Subject:**
```
{{subject}} - MakeCodeEasy Feedback
```

**Body (Plain Text):**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Message:
{{message}}
```

4. Set the recipient in your service to `makecodeeasy.in@gmail.com` (or keep `to_email` in the payload as currently used in `script.js`).
5. Save the template and note down the **Template ID** (e.g., `template_xyz789`).

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_public_key_123`)

### 5. Update JavaScript Code
Replace the placeholders in `script.js`:

```javascript
// Replace these values in script.js
emailjs.init("YOUR_PUBLIC_KEY"); // Your actual public key

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { // Your actual service and template IDs
```

**Example:**
```javascript
emailjs.init("user_abc123def456");

emailjs.send('service_xyz789', 'template_feedback123', {
```

### 6. Test the Form
1. Open your website
2. Fill out the feedback form
3. Submit and check if you receive the email
4. Check browser console for any errors

## Features Included

### ✅ Form Validation
- Required fields validation
- Email format validation

### ✅ User Experience
- Loading state with spinner
- Success/error notifications
- Form reset after successful submission
- Disabled button during submission

### ✅ Email Features
- Plain text email (no HTML)
- Reply-to set to sender's email
- All form fields included in email

### ✅ Error Handling
- Network error handling
- User-friendly error messages
- Console logging for debugging

## Free Plan Limits
- EmailJS free plan: 200 emails/month
- Perfect for a growing educational platform

## Alternative: Formspree
If you prefer a simpler setup:
1. Go to [Formspree.io](https://formspree.io/)
2. Create account and form
3. Replace form action with Formspree endpoint
4. No JavaScript needed

## Security Notes
- EmailJS public key is safe to expose
- Service credentials are stored securely on EmailJS servers
- No sensitive data in client-side code

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- Free tier support available
- Community forums for help
