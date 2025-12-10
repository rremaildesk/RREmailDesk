import { Service } from '../types';
import { SUPPORT_PHONE_NUMBER } from '../constants';

export const homePageContent = {
  heroHeadline: 'Need help with Roadrunner Email? Call <a href="tel:' + SUPPORT_PHONE_NUMBER + '" class="text-accent underline hover:no-underline">' + SUPPORT_PHONE_NUMBER + '</a> for instant support.',
  heroDescription: 'Facing Roadrunner email login, configuration, sending or payment issues? Our dedicated team provides fast, expert assistance across the USA.',
  servicesSummaryTitle: 'Our Core Support Services',
  servicesSummary: [
    { title: 'Login & Account Recovery', description: 'Trouble accessing your Roadrunner email? We help with password resets and account recovery.' },
    { title: 'Email Configuration', description: 'Assistance with POP3/SMTP/IMAP settings for various email clients and mobile devices.' },
    { title: 'Sending & Receiving Issues', description: 'Expert troubleshooting for emails not sending, not receiving, spam, and junk mail problems.' },
    { title: 'Billing & Cancellation', description: 'Support for payment method issues, renewals, and account cancellation processes.' },
    { title: 'General Technical Help', description: 'Comprehensive technical support for all your Roadrunner email challenges.' },
  ],
};

export const aboutPageContent = {
  title: 'About RR Email Help & Support USA',
  headline: 'Your Trusted Partner for Roadrunner Email Solutions',
  paragraph1: 'We are a dedicated team of email support specialists, proudly serving Roadrunner users across the USA. Our mission is to provide fast, friendly, and effective technical assistance for any issue you encounter with your Roadrunner email service.',
  paragraph2: 'With years of experience, we understand the frustrations that come with email problems – from login failures and configuration headaches to persistent spam and billing queries. That\'s why we emphasize a reliable, trustworthy, and human-centric approach to support.',
  paragraph3: 'Our commitment extends to offering extended phone support, ensuring that expert help is just a call away when you need it most. Trust us to resolve your Roadrunner email issues efficiently, so you can get back to what matters.',
};

export const servicesPageContent: Service[] = [
  {
    id: 'login-password-account-recovery',
    title: 'Login, Password Reset & Account Recovery',
    description: 'Experiencing difficulties logging into your Roadrunner email? Forgot your password or lost access to your account? Our specialists can guide you through the process of resetting your password, recovering your account, and resolving any login-related issues quickly and securely. Get back into your inbox with minimal hassle.',
  },
  {
    id: 'email-configuration',
    title: 'Email Configuration (POP3/SMTP/IMAP)',
    description: 'Need help setting up your Roadrunner email on a new device or email client? We provide step-by-step assistance for configuring POP3, SMTP, and IMAP settings on Outlook, Thunderbird, Apple Mail, mobile phones, and tablets. Ensure your email is set up correctly for seamless sending and receiving.',
  },
  {
    id: 'sending-receiving-spam-troubleshooting',
    title: 'Sending/Receiving Issues, Spam & Junk Mail Troubleshooting',
    description: 'Are your emails not sending, or are you not receiving new messages? Dealing with an influx of spam or junk mail? Our experts can diagnose and fix common sending and receiving problems, optimize your spam filters, and help you regain control of your inbox.',
  },
  {
    id: 'attachment-delivery-inbox-problems',
    title: 'Attachment, Delivery & Inbox Problems',
    description: 'Struggling with attachments not sending or opening? Emails not delivering to recipients or disappearing from your inbox? We troubleshoot issues related to email attachments, delivery failures, and general inbox management to ensure your Roadrunner email functions perfectly.',
  },
  {
    id: 'billing-renewal-cancellation-support',
    title: 'Billing, Renewal & Account Cancellation Support',
    description: 'Have questions about your Roadrunner email billing, payment methods, or renewal process? Need assistance with canceling your account? Our support team can help clarify billing inquiries, update your payment information, and guide you through account cancellation procedures.',
  },
  {
    id: 'general-technical-support',
    title: 'General Technical Support & Troubleshooting',
    description: 'For any other technical issues or general troubleshooting needs with your Roadrunner email that aren\'t covered above, our comprehensive support team is here to help. From minor glitches to complex problems, we provide expert solutions to keep your email running smoothly.',
  },
];

export const contactPageContent = {
  headline: 'Get in Touch for Immediate Roadrunner Email Support',
  description: 'Whether you\'re facing a login issue, configuration problem, or need help with billing, our team is ready to assist. Call us directly for the fastest service.',
  phoneLabel: '24/7 Phone Support',
  emailPlaceholder: 'info@rremailsupport.com',
  addressPlaceholder: '123 Support Lane, Anytown, USA 12345',
  formTitle: 'Send Us a Message',
  formSuccessMessage: 'Thank you for your message! We will get back to you shortly.',
  formFailureMessage: 'Failed to send your message. Please try again later or call us directly.',
};

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} RR Email Help & Support USA. All rights reserved.`,
  tagline: '24/7 Roadrunner Email Support – Call us any time.',
};
