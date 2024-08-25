const EmailService = require('../src/services/EmailService');
const EmailProvider1 = require('../src/providers/EmailProvider1');
const EmailProvider2 = require('../src/providers/EmailProvider2');

describe('EmailService', () => {
    it('should send an email successfully', async () => {
        const provider1 = new EmailProvider1();
        const provider2 = new EmailProvider2();
        const emailService = new EmailService(provider1, provider2);

        const email = {
            to: 'test@example.com',
            subject: 'Test Email',
            body: 'This is a test email.'
        };

        // Mock provider1 to always succeed
        jest.spyOn(provider1, 'sendEmail').mockResolvedValue(true);
        
        const success = await emailService.sendEmail(email);
        expect(success).toBe(true);
    });

    it('should fallback to the second provider on failure', async () => {
        const provider1 = new EmailProvider1();
        const provider2 = new EmailProvider2();
        const emailService = new EmailService(provider1, provider2);

        const email = {
            to: 'test@example.com',
            subject: 'Test Email',
            body: 'This is a test email.'
        };

        // Mock provider1 to fail and provider2 to succeed
        jest.spyOn(provider1, 'sendEmail').mockRejectedValue(new Error('Failed'));
        jest.spyOn(provider2, 'sendEmail').mockResolvedValue(true);

        const success = await emailService.sendEmail(email);
        expect(success).toBe(true);
    });
});
