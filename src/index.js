const EmailProvider1 = require('./providers/EmailProvider1');
const EmailProvider2 = require('./providers/EmailProvider2');
const EmailService = require('./services/EmailService');

(async () => {
    try {
        // Initialize email providers
        const provider1 = new EmailProvider1();
        const provider2 = new EmailProvider2();
        
        // Initialize email service with providers
        const emailService = new EmailService(provider1, provider2);

        // Define an email object
        const email = {
            to: 'example@example.com',
            subject: 'Test Email',
            body: 'This is a test email.'
        };

        // Send the email
        const success = await emailService.sendEmail(email);
        console.log(`Email sent: ${success}`);
    } catch (error) {
        console.error(`Failed to send email: ${error.message}`);
    }
})();
