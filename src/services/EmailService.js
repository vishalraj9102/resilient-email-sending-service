class EmailService {
    constructor(provider1, provider2) {
        this.providers = [provider1, provider2];
        this.currentProviderIndex = 0;
        this.emailHistory = new Map(); // To keep track of sent emails for idempotency
    }

    async sendEmail(email) {
        const emailKey = `${email.to}-${email.subject}-${email.body}`;

        // Check if email was already sent
        if (this.emailHistory.has(emailKey)) {
            console.log('Email already sent');
            return true;
        }

        let success = false;

        for (let i = 0; i < this.providers.length; i++) {
            const provider = this.providers[this.currentProviderIndex];
            const providerIndex = this.currentProviderIndex + 1; // Provider index for logging
            this.currentProviderIndex = (this.currentProviderIndex + 1) % this.providers.length;

            try {
                // Simulate rate limiting
                await this.rateLimit();

                // Try to send the email
                success = await provider.sendEmail(email);
                if (success) {
                    this.emailHistory.set(emailKey, true); // Mark email as sent
                    console.log('Email sent successfully.');
                    return true;
                }
            } catch (error) {
                console.error(`Error with provider ${providerIndex}: ${error.message}`);
                // Exponential backoff
                await this.sleep(Math.pow(2, i) * 1000);
            }
        }

        console.log('All providers failed.');
        return false;
    }

    // Rate limit function
    async rateLimit() {
        // Simulate rate limiting logic
        return new Promise(resolve => setTimeout(resolve, 100)); // Short delay for testing
    }

    // Sleep function for exponential backoff
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

module.exports = EmailService;
