CANCELLATION EMAIL SETUP

The ZIP now sends these variables for cancellation emails:
- email_title = Order Cancellation
- email_message = The following rental order has been cancelled by the customer.
- action_required = empty

IMPORTANT: EmailJS templates are stored in the EmailJS account, not inside this ZIP.
Open template_1I8aze4 and replace its current email body with the HTML in:
EMAILJS_CANCELLATION_TEMPLATE.html
Then Save/Apply Changes.

This is necessary because the current template contains the static text “A new rental order has been placed.” and the “Action Required” block. Changing the ZIP cannot change an already-saved EmailJS template.
