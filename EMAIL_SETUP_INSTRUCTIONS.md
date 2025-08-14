# Email Setup Instructions for Portfolio Contact Form

Your portfolio now has a fully functional contact form that will send emails directly to your inbox using nodemailer! 🎉

## Quick Setup Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email Settings

You need to set up Gmail App Password (NOT your regular Gmail password):

1. **Enable 2-Factor Authentication** on your Google Account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Click on "App passwords" (you'll need 2FA enabled first)
   - Select "Mail" as the app
   - Copy the generated 16-character password

3. **Update .env file**:
   - Open the `.env` file in your project
   - Replace `your-app-password-here` with the 16-character app password
   - Your email is already set to `shrutijayaswal671@gmail.com`

### 3. Start the Server
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

### 4. Test Your Contact Form
- Open your browser and go to `http://localhost:3000`
- Fill out the contact form
- Submit it and check your email!

## Features Included

✅ **Email Sending**: Messages sent through your contact form will arrive in your inbox
✅ **Rate Limiting**: Prevents spam (max 5 emails per 15 minutes per IP)
✅ **Form Validation**: Validates email format and required fields
✅ **Beautiful Email Format**: HTML formatted emails with your portfolio branding
✅ **Reply-To**: You can reply directly to the sender from your email
✅ **Loading States**: Shows "Sending..." while processing
✅ **Error Handling**: User-friendly error messages
✅ **Security**: Uses environment variables for sensitive data

## Email Template

When someone contacts you, you'll receive a beautiful HTML email with:
- Their name and email address
- Their message formatted nicely
- Portfolio branding with your colors (#a18aff)
- Reply-To header set to their email for easy responses

## Troubleshooting

**"Authentication failed" error?**
- Double-check your app password (16 characters, no spaces)
- Make sure 2FA is enabled on your Google account
- Verify the email address in .env matches your Gmail

**Form not submitting?**
- Check browser console for errors
- Make sure the server is running on port 3000
- Verify your internet connection

**Still having issues?**
- Check the server logs in your terminal
- Make sure all dependencies installed correctly
- Try generating a new app password

## Production Deployment

When deploying to production (Heroku, Vercel, etc.):
1. Set environment variables in your hosting platform
2. Don't commit the `.env` file to git
3. Update the fetch URL in script.js if needed

Your portfolio contact form is now fully functional! 🚀