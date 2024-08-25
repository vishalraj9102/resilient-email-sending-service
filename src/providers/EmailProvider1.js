class EmailProvider1 {
    async sendEmail(email) {
        // Simulate failure
        throw new Error('Failed to send email with provider 1');
    }
}

module.exports = EmailProvider1;
