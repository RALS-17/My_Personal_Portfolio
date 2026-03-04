# Web3Forms Setup Instructions

Your contact form is now configured to send emails directly using Web3Forms. This is much simpler than EmailJS!

## Step 1: Get Your Access Key (Takes 2 minutes!)

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Scroll down to **"Get Started for Free"**
3. Enter your email: **reyaldrin17@gmail.com**
4. Click **"Create Access Key"**
5. Check your email inbox for the access key
6. Copy the access key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

## Step 2: Update Contact.tsx

Open `src/components/Contact.tsx` and find line ~33:

```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
```

Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key:

```typescript
access_key: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
```

## Step 3: Test the Form

1. Save the file
2. Open your portfolio
3. Fill out the contact form
4. Click "Send Message"
5. Check your inbox at reyaldrin17@gmail.com

## That's It! 🎉

Web3Forms is:
- ✅ Free (250 emails/month)
- ✅ No credit card required
- ✅ No complicated setup
- ✅ Just one access key needed
- ✅ Emails arrive instantly

## Troubleshooting

If emails aren't arriving:
1. Check your spam folder
2. Verify the access key is correct (no extra spaces or quotes)
3. Make sure you verified your email with Web3Forms
4. Check the browser console for error messages

## Need More Emails?

The free plan includes 250 emails/month. If you need more, Web3Forms has affordable paid plans.
