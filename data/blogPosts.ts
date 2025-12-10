import { BlogPost } from '../types';
import { SUPPORT_PHONE_NUMBER } from '../constants';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-fix-roadrunner-login-issues',
    title: `How to Fix Roadrunner Email Login Issues – Need Help? Call ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `Trouble logging into your Roadrunner email? Follow our step-by-step guide — or call our support team at ${SUPPORT_PHONE_NUMBER} for immediate help.`,
    imageUrl: 'https://picsum.photos/600/400?random=1',
    imageAlt: 'Person looking frustrated at a computer screen, symbolizing login issues',
    category: 'Login Help',
    author: 'Support Team',
    date: '2023-10-26',
    content: `
      <p class="mb-4">Experiencing Roadrunner email login issues can be incredibly frustrating. Whether it's an incorrect password error, a locked account, or simply an unresponsive login page, we're here to help you get back into your inbox.</p>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">Common Login Problems and Solutions</h2>
      <p class="mb-4">Here are some of the most frequent reasons users face login problems and how to address them:</p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">1. Incorrect Password</h3>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-1"><strong>Double-check your Caps Lock:</strong> Passwords are case-sensitive.</li>
        <li class="mb-1"><strong>Verify your email address:</strong> Ensure you're entering the full Roadrunner email address (e.g., username@maine.rr.com).</li>
        <li class="mb-1"><strong>Reset your password:</strong> If you're certain it's a password issue, use the official Roadrunner password reset tool. If you need assistance with this, <a href="tel:${SUPPORT_PHONE_NUMBER}" class="text-accent underline">call us at ${SUPPORT_PHONE_NUMBER}</a>.</li>
      </ul>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">2. Account Locked or Suspended</h3>
      <p class="mb-4">Sometimes, multiple failed login attempts can temporarily lock your account for security reasons. If you suspect your account is locked or suspended, you'll typically need to wait a certain period (e.g., 30 minutes to an hour) or contact support for immediate unlocking.</p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">3. Browser or Internet Issues</h3>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-1"><strong>Clear browser cache and cookies:</strong> Old data can interfere with login processes.</li>
        <li class="mb-1"><strong>Try a different browser:</strong> This helps determine if the issue is browser-specific.</li>
        <li class="mb-1"><strong>Check your internet connection:</strong> Ensure you have a stable connection.</li>
      </ul>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">When to Call for Expert Help</h2>
      <p class="mb-4">If you've tried these steps and are still unable to access your Roadrunner email, don't hesitate to reach out to our expert support team. We can provide personalized troubleshooting, assist with complex account recovery, and ensure your email service is restored promptly.</p>
      <p class="mb-4 font-bold">Call us now at <a href="tel:${SUPPORT_PHONE_NUMBER}" class="text-accent underline hover:no-underline">${SUPPORT_PHONE_NUMBER}</a> for instant, reliable support!</p>
    `,
  },
  {
    id: '2',
    slug: 'how-to-configure-roadrunner-email-on-outlook',
    title: `How to Configure Roadrunner Email on Outlook – Get Expert Help: ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `Setting up Roadrunner email on Outlook can be tricky. This guide provides step-by-step instructions. For personal assistance, call us at ${SUPPORT_PHONE_NUMBER}.`,
    imageUrl: 'https://picsum.photos/600/400?random=2',
    imageAlt: 'Laptop showing Outlook interface, symbolizing email configuration',
    category: 'Configuration',
    author: 'Config Expert',
    date: '2023-11-15',
    content: `
      <p class="mb-4">Configuring your Roadrunner email with Microsoft Outlook allows you to manage your emails efficiently from your desktop. While the process is generally straightforward, specific settings are crucial for a successful setup. Here’s a detailed guide:</p>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">Roadrunner Email Settings for Outlook (IMAP/POP3)</h2>
      <p class="mb-4">You can choose between IMAP (recommended for syncing across multiple devices) or POP3 (for downloading emails to a single device).</p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">Recommended IMAP Settings:</h3>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-1"><strong>Incoming Mail Server (IMAP):</strong> \`mail.twc.com\`</li>
        <li class="mb-1"><strong>Port:</strong> 993</li>
        <li class="mb-1"><strong>Encryption Method:</strong> SSL/TLS</li>
        <li class="mb-1"><strong>Outgoing Mail Server (SMTP):</strong> \`mail.twc.com\`</li>
        <li class="mb-1"><strong>Port:</strong> 587</li>
        <li class="mb-1"><strong>Encryption Method:</strong> STARTTLS</li>
        <li class="mb-1"><strong>Outgoing Server Authentication:</strong> My outgoing server (SMTP) requires authentication and use same settings as my incoming mail server.</li>
        <li class="mb-1"><strong>Username:</strong> Your full Roadrunner email address</li>
        <li class="mb-1"><strong>Password:</strong> Your Roadrunner email password</li>
      </ul>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">POP3 Settings (Alternative):</h3>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-1"><strong>Incoming Mail Server (POP3):</strong> \`mail.twc.com\`</li>
        <li class="mb-1"><strong>Port:</strong> 995</li>
        <li class="mb-1"><strong>Encryption Method:</strong> SSL/TLS</li>
        <li class="mb-1"><strong>Outgoing Mail Server (SMTP):</strong> \`mail.twc.com\`</li>
        <li class="mb-1"><strong>Port:</strong> 587</li>
        <li class="mb-1"><strong>Encryption Method:</strong> STARTTLS</li>
        <li class="mb-1"><strong>Outgoing Server Authentication:</strong> My outgoing server (SMTP) requires authentication and use same settings as my incoming mail server.</li>
        <li class="mb-1"><strong>Username:</strong> Your full Roadrunner email address</li>
        <li class="mb-1"><strong>Password:</strong> Your Roadrunner email password</li>
      </ul>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">Step-by-Step Outlook Setup Guide:</h2>
      <ol class="list-decimal list-inside mb-4 pl-4">
        <li class="mb-1">Open Outlook and go to <strong>File > Add Account</strong>.</li>
        <li class="mb-1">Enter your Roadrunner email address and click <strong>Connect</strong>.</li>
        <li class="mb-1">If Outlook doesn't automatically detect settings, choose <strong>IMAP</strong> or <strong>POP</strong>.</li>
        <li class="mb-1">Enter the Incoming and Outgoing server settings as listed above.</li>
        <li class="mb-1">Enter your password and click <strong>Connect</strong>.</li>
        <li class="mb-1">Outlook should then successfully configure your account.</li>
      </ol>
      <p class="mb-4">If you encounter any issues during setup, or if your emails aren't syncing correctly after configuration, our support team is ready to help. We can remotely assist you in configuring your Roadrunner email on any device.</p>
      <p class="mb-4 font-bold">Call us at <a href="tel:${SUPPORT_PHONE_NUMBER}" class="text-accent underline hover:no-underline">${SUPPORT_PHONE_NUMBER}</a> for personalized assistance!</p>
    `,
  },
  {
    id: '3',
    slug: 'what-to-do-if-roadrunner-wont-send-mail',
    title: `What to Do if Roadrunner Won't Send Mail – Instant Help: ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `Roadrunner email not sending? Learn common causes and solutions. For immediate assistance, contact our support team at ${SUPPORT_PHONE_NUMBER}.`,
    imageUrl: 'https://picsum.photos/600/400?random=3',
    imageAlt: 'Email icon with a warning sign, symbolizing sending issues',
    category: 'Sending Issues',
    author: 'Troubleshooter',
    date: '2023-12-01',
    content: `
      <p class="mb-4">When your Roadrunner email refuses to send, it can halt your communication and productivity. This guide covers the most common reasons why emails fail to send and what steps you can take to resolve them.</p>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">Key Reasons for Sending Failures:</h2>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">1. Incorrect SMTP Settings</h3>
      <p class="mb-4">The most frequent culprit is incorrect Outgoing Mail Server (SMTP) settings. Ensure your settings match the recommended Roadrunner configurations:</p>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-1"><strong>Outgoing Mail Server (SMTP):</strong> \`mail.twc.com\`</li>
        <li class="mb-1"><strong>Port:</strong> 587 (or occasionally 465)</li>
        <li class="mb-1"><strong>Encryption Method:</strong> STARTTLS (or SSL/TLS for port 465)</li>
        <li class="mb-1"><strong>Authentication:</strong> Ensure "My outgoing server (SMTP) requires authentication" is checked, and use the same settings as your incoming mail server.</li>
      </ul>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">2. Internet Connectivity Problems</h3>
      <p class="mb-4">A stable internet connection is vital for sending emails. Check if your device is connected to the internet and if other online services are working.</p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">3. Firewall or Antivirus Interference</h3>
      <p class="mb-4">Sometimes, security software can block email traffic. Temporarily disable your firewall or antivirus to see if it resolves the issue. Remember to re-enable them afterwards.</p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">4. Large Attachments</h3>
      <p class="mb-4">Emails with very large attachments might fail to send due to size limits imposed by your email provider or the recipient's provider. Try reducing the attachment size or using a cloud storage service.</p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">5. Corrupted Outbox or Email Client Issues</h3>
      <p class="mb-4">An email stuck in your outbox can sometimes prevent other emails from sending. Try deleting the problematic email from the outbox and then restarting your email client. If the problem persists, recreating your email profile in the client might be necessary.</p>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">Need Further Assistance?</h2>
      <p class="mb-4">If these troubleshooting steps don't resolve your sending issues, our technical support team is ready to provide in-depth diagnosis and solutions. We'll ensure your Roadrunner email is functioning perfectly.</p>
      <p class="mb-4 font-bold">Call us directly at <a href="tel:${SUPPORT_PHONE_NUMBER}" class="text-accent underline hover:no-underline">${SUPPORT_PHONE_NUMBER}</a> for immediate support!</p>
    `,
  },
  {
    id: '4',
    slug: 'how-to-recover-a-locked-roadrunner-email-account',
    title: `How to Recover a Locked Roadrunner Email Account – Call ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `Locked out of your Roadrunner email account? This guide helps you recover it. For expert assistance, call us at ${SUPPORT_PHONE_NUMBER}.`,
    imageUrl: 'https://picsum.photos/600/400?random=4',
    imageAlt: 'Padlock icon on an email envelope, symbolizing a locked account',
    category: 'Account Recovery',
    author: 'Security Specialist',
    date: '2024-01-08',
    content: `
      <p class="mb-4">Having your Roadrunner email account locked can be a significant inconvenience, preventing you from accessing important communications. Account locks often occur due to suspicious activity, too many failed login attempts, or security breaches. Here's how you can typically recover access:</p>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">Steps to Unlock and Recover Your Account:</h2>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">1. Understand the Reason for the Lock</h3>
      <p class="mb-4">Before attempting recovery, try to understand why your account was locked. Was it due to:
        <ul class="list-disc list-inside mb-4 pl-4">
            <li class="mb-1"><strong>Multiple Incorrect Passwords:</strong> Often results in a temporary lock.</li>
            <li class="mb-1"><strong>Suspicious Activity:</strong> If the system detects unusual login attempts from new locations.</li>
            <li class="mb-1"><strong>Violation of Terms of Service:</strong> Less common, but can lead to suspension.</li>
        </ul>
      </p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">2. Wait for Temporary Locks to Expire</h3>
      <p class="mb-4">For locks due to multiple incorrect password attempts, accounts are often temporarily locked for a period (e.g., 30 minutes to a few hours). Waiting and then trying to log in again with the correct password might resolve the issue.</p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">3. Use the Official Password Reset/Account Recovery Tools</h3>
      <p class="mb-4">If waiting doesn't work, or if you don't know your password, you'll need to use the official Roadrunner/Spectrum account recovery portal. This usually involves:
        <ul class="list-disc list-inside mb-4 pl-4">
            <li class="mb-1">Providing your email address or username.</li>
            <li class="mb-1">Verifying your identity through a linked phone number, alternate email, or security questions.</li>
            <li class="mb-1">Creating a new, strong password.</li>
        </ul>
        Make sure you have access to your recovery information (phone or alternate email) before starting this process.
      </p>
      <h3 class="text-xl font-heading font-medium mb-2 text-primary">4. Contact Roadrunner Support (or Us!)</h3>
      <p class="mb-4">If the automated recovery methods fail, or if you suspect your account has been compromised, direct contact with support is essential. Our team specializes in Roadrunner email issues and can provide hands-on assistance:</p>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-1">We can guide you through the recovery process.</li>
        <li class="mb-1">Help verify your identity.</li>
        <li class="mb-1">Work to unlock your account securely.</li>
        <li class="mb-1">Assist in securing your account against future incidents.</li>
      </ul>
      <p class="mb-4 font-bold">For immediate and reliable assistance with a locked Roadrunner email account, call our experts at <a href="tel:${SUPPORT_PHONE_NUMBER}" class="text-accent underline hover:no-underline">${SUPPORT_PHONE_NUMBER}</a>!</p>
    `,
  },
  {
    id: '5',
    slug: 'how-to-update-payment-info-or-cancel-subscription',
    title: `How to Update Roadrunner Payment Info or Cancel Subscription – Call ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `Need to update payment details or cancel your Roadrunner email subscription? This guide provides steps. For direct help, call us at ${SUPPORT_PHONE_NUMBER}.`,
    imageUrl: 'https://picsum.photos/600/400?random=5',
    imageAlt: 'Credit card and calendar icon, symbolizing billing and subscriptions',
    category: 'Billing & Cancellation',
    author: 'Admin Assistant',
    date: '2024-02-20',
    content: `
      <p class="mb-4">Managing your Roadrunner email account, including billing information and subscription status, is crucial. Whether you need to update a credit card or consider canceling your service, here's what you need to know:</p>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">Updating Payment Information:</h2>
      <p class="mb-4">Keeping your payment details current prevents service interruptions. Typically, you'll need to log into your Spectrum (formerly Time Warner Cable / Roadrunner) account management portal:</p>
      <ol class="list-decimal list-inside mb-4 pl-4">
        <li class="mb-1">Go to the official Spectrum website and log in with your primary account credentials.</li>
        <li class="mb-1">Navigate to the "Billing" or "My Account" section.</li>
        <li class="mb-1">Look for options like "Payment Methods," "Update Payment," or "Manage Wallet."</li>
        <li class="mb-1">You should be able to add a new card, update an existing one, or change your preferred payment method.</li>
        <li class="mb-1">Always save your changes after updating.</li>
      </ol>
      <p class="mb-4">If you encounter any issues logging in or finding the correct section, our team can assist you.</p>
      <h2 class="text-2xl font-heading font-semibold mb-3 text-primary">Canceling Your Roadrunner Email Subscription:</h2>
      <p class="mb-4">Canceling your email service usually requires direct contact with Spectrum customer service, as it's often tied to your internet service. Here’s a general approach:</p>
      <ol class="list-decimal list-inside mb-4 pl-4">
        <li class="mb-1"><strong>Review Your Contract:</strong> Understand any terms or early termination fees that might apply.</li>
        <li class="mb-1"><strong>Contact Spectrum:</strong> Call Spectrum's customer service line. Be prepared to provide your account details and state your intention to cancel the email service.</li>
        <li class="mb-1"><strong>Confirm Cancellation:</strong> Ensure you receive a confirmation number or email verifying the cancellation.</li>
        <li class="mb-1"><strong>Data Backup:</strong> Before canceling, make sure to back up any important emails or contacts, as you will lose access to your account.</li>
      </ol>
      <p class="mb-4">This process can sometimes be complex, with specific prompts or requirements. Our support team can help you navigate these steps, ensuring a smooth process whether you're updating your payment or closing your account.</p>
      <p class="mb-4 font-bold">For expert guidance on Roadrunner billing, renewals, or account cancellation, call us at <a href="tel:${SUPPORT_PHONE_NUMBER}" class="text-accent underline hover:no-underline">${SUPPORT_PHONE_NUMBER}</a> today!</p>
    `,
  },
];