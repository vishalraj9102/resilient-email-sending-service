Here’s a simplified `README.md` file for your email sending service, excluding the UI aspects:

---

# Email Sending Service

A resilient email sending service implemented in JavaScript/TypeScript. This service includes retry logic with exponential backoff, provider fallback, idempotency, rate limiting, and status tracking.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Testing](#testing)
- [Verification](#verification)
- [Assumptions](#assumptions)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project provides an email sending service with the following features:
- **Retry Mechanism:** Retries sending the email with exponential backoff.
- **Fallback Mechanism:** Switches between two email providers on failure.
- **Idempotency:** Ensures that duplicate emails are not sent.
- **Rate Limiting:** Limits the rate of email sending.
- **Status Tracking:** Tracks the status of email sending attempts.

## Setup Instructions

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

### Clone the Repository

```bash
git clone https://github.com/your-username/email-service.git
cd email-service
```

### Install Dependencies

Install the required npm packages:

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory and configure your email provider credentials:

```plaintext
PROVIDER_1_API_KEY=your-provider-1-api-key
PROVIDER_2_API_KEY=your-provider-2-api-key
```

### Running the Application

1. **Start the Node.js Server:**

   ```bash
   node src/index.js
   ```

2. **Check the Console:**

   The console will display logs indicating whether the email was sent successfully or if there were any errors.

## Usage

1. **Run the Application:**

   Execute the Node.js script to send an email.

2. **Verify Email Sending:**

   Check the console output for status messages indicating the success or failure of email sending.

## Testing

### Running Unit Tests

To run the unit tests, execute the following command:

```bash
npm test
```

### Verification

#### **1. Mock Providers with Detailed Responses**

Ensure your mock providers simulate success and failure correctly:
