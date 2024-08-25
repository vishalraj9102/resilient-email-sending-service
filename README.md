Here's an updated `README.md` file with added icons for better visual appeal and interactivity:

---

# Email Sending Service 📧

A resilient email sending service implemented in JavaScript/TypeScript. This service features retry logic with exponential backoff, provider fallback, idempotency, rate limiting, and status tracking.

## 📑 Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Testing](#testing)
- [Verification](#verification)
- [Assumptions](#assumptions)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Project Overview

This project provides an email sending service with the following features:
- **Retry Mechanism** 🔄: Retries sending the email with exponential backoff.
- **Fallback Mechanism** ↩️: Switches between two email providers on failure.
- **Idempotency** 🔒: Prevents duplicate emails from being sent.
- **Rate Limiting** ⏳: Controls the rate of email sending.
- **Status Tracking** 📊: Monitors the status of email sending attempts.

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18.0.0 or higher) 🖥️
- npm (v8.0.0 or higher) 📦

### Clone the Repository

```bash
git clone https://github.com/vishalraj9102/resilient-email-sending-service.git
cd email-service
```

### Install Dependencies

Install the required npm packages:

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory and add your email provider credentials:

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

   Observe the console output for logs indicating whether the email was sent successfully or if there were any errors.

## 💻 Usage

1. **Run the Application:**

   Execute the Node.js script to send an email.

2. **Verify Email Sending:**

   Review the console output for status messages indicating the success or failure of email sending.

## 🧪 Testing

### Running Unit Tests

To run the unit tests, execute the following command:

```bash
npm test
```
