INHOUSEGYM — PASSWORD RESET EMAIL DELIVERABILITY FIX

The password-reset EmailJS request now sends from_name, reply_to and subject as template parameters.

IMPORTANT: EmailJS stores the actual template in the EmailJS dashboard, not in this ZIP.

Template ID: template_g3jl7bs
Service: service_fvly2p3
Gmail account: inhousegym.admin@gmail.com

Recommended template fields:
To Email: {{email}}
From Name: {{from_name}}
Reply-To: {{reply_to}}
Subject: {{subject}}

Use EMAILJS_PASSWORD_RESET_TEMPLATE.html as the password-reset body if you want to replace the current body.

Recommended body content:
InHouseGym
Password reset verification

Hi {{to_name}},

We received a request to reset your InHouseGym password.

Your verification code is:
{{otp}}

This code expires in 10 minutes.

If you did not request a password reset, you can ignore this email.

InHouseGym
inhousegym.admin@gmail.com

IMPORTANT DELIVERABILITY NOTE:
No website code can force Gmail to put a message in Inbox instead of Spam. Gmail controls inbox placement using authentication, sender reputation, message content, recipient history and other signals.

Because this is connected to Gmail, keep the authenticated/default Gmail sender as the From Email. Do not put a different address in From Email.

If a test still goes to Spam:
1. Open the message in Gmail and click Not spam.
2. Run another EmailJS test.
3. Confirm the Gmail service test succeeds.
4. Verify the template's To Email, From Name, Reply-To and Subject fields.

For production/high-volume sending, EmailJS recommends transactional email services for stronger deliverability than personal Gmail services.
