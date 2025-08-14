# Shruti Jayaswal - Portfolio Website

A modern, responsive portfolio website with integrated contact form email functionality using Nodemailer.

## Features

- **Responsive Design**: Modern, mobile-first design with dark/light theme toggle
- **Contact Form**: Functional contact form that sends emails directly to your inbox
- **Email Integration**: Uses Nodemailer to send formatted HTML emails
- **Real-time Feedback**: User-friendly notifications for form submission status

## Email Setup Instructions

### 1. Gmail App Password Setup

To use Gmail with Nodemailer, you need to create an App Password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable if not already)
3. Go to "App passwords" (under 2-Step Verification)
4. Select "Mail" and "Other (Custom name)"
5. Enter a name like "Portfolio Contact Form"
6. Copy the generated 16-character password

### 2. Environment Configuration

1. Open `config.env` file
2. Replace `your_app_password_here` with your actual Gmail App Password
3. Verify your email address is correct

```env
EMAIL_USER=shrutijayaswal671@gmail.com
EMAIL_PASS=your_16_character_app_password
EMAIL_TO=shrutijayaswal671@gmail.com
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3000`

## How It Works

1. **Frontend**: Contact form collects name, email, and message
2. **Backend**: Express server receives form data and uses Nodemailer to send emails
3. **Email**: Beautiful HTML-formatted emails are sent to your Gmail inbox
4. **Feedback**: Users see real-time success/error notifications

## Email Format

Emails include:
- Sender's name and email
- Formatted message content
- Timestamp and source information
- Professional HTML styling

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**: Check your App Password is correct
2. **"Less secure app access"**: Use App Passwords, not regular passwords
3. **Port already in use**: Change PORT in config.env or kill existing process

### Testing:

1. Fill out the contact form on your website
2. Check your Gmail inbox for the test message
3. Verify the email formatting and content

## Security Notes

- Never commit your `config.env` file to version control
- Use App Passwords instead of regular Gmail passwords
- Consider rate limiting for production use

## Deployment

For production deployment:
1. Set `NODE_ENV=production` in config.env
2. Use environment variables on your hosting platform
3. Consider using a service like Heroku, Vercel, or Railway

## Support

If you encounter issues:
1. Check the console for error messages
2. Verify your Gmail App Password
3. Ensure all dependencies are installed
4. Check that the server is running on the correct port
