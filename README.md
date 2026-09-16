# Playwright TypeScript Automation Framework

A UI automation testing framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern.

This framework automates the login functionality of the Practice Test Automation application and validates successful authentication through URL, page title, success message, and Logout button verification.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

---

## Project Structure

```text
project-root
│
├── pages
│   ├── LoginPage.ts
│   └── DashboardPage.ts
│
├── tests
│   └── login.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Framework Design

### LoginPage

Responsible for:

- Navigating to Login Page
- Entering Username
- Entering Password
- Clicking Login Button

### DashboardPage

Responsible for:

- Verifying successful login
- Verifying page title
- Verifying success message
- Verifying Logout button visibility

### Test Specification

The test file contains the business flow:

1. Launch application
2. Login with valid credentials
3. Navigate to Dashboard page
4. Verify:
   - URL
   - Page Title
   - Success Message
   - Logout Button

---

## Application Under Test

Login Page:

```text
https://practicetestautomation.com/practice-test-login/
```

Successful Login Page:

```text
https://practicetestautomation.com/logged-in-successfully/
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Execute all tests:

```bash
npx playwright test
```

Execute specific test:

```bash
npx playwright test tests/login.spec.ts
```

Execute tests in headed mode:

```bash
npx playwright test --headed
```

Execute tests in debug mode:

```bash
npx playwright test --debug
```

---

## Test Scenario

### Verify Successful Login

#### Test Data

| Username | Password |
|-----------|-----------|
| student | Password123 |

#### Steps

1. Open Login Page
2. Enter valid Username
3. Enter valid Password
4. Click Submit button
5. Verify successful login

#### Expected Results

- User is redirected to Dashboard page
- URL contains:

```text
logged-in-successfully
```

- Page title should be:

```text
Logged In Successfully | Practice Test Automation
```

- Success message displayed:

```text
Logged In Successfully
```

- Logout button is visible

---

## Sample Assertions

### URL Verification

```typescript
await expect(page).toHaveURL(
  'https://practicetestautomation.com/logged-in-successfully/'
);
```

### Title Verification

```typescript
await expect(page).toHaveTitle(
  'Logged In Successfully | Practice Test Automation'
);
```

### Success Message Verification

```typescript
await expect(successMessage).toHaveText(
  'Logged In Successfully'
);
```

### Logout Button Verification

```typescript
await expect(logoutButton).toBeVisible();
```

---

## Best Practices Followed

- Page Object Model (POM)
- Reusable page classes
- Centralized locators
- Explicit assertions
- Readable test cases
- Separation of Test Logic and Page Logic
- TypeScript support

---

## Future Enhancements

- Data Driven Testing
- Environment Configuration
- API Testing Integration
- Parallel Execution
- CI/CD Integration
- Reporting with Allure
- Screenshot Capture on Failure
- Retry Mechanism

---

## Author

**Balaji MG**

Test Automation Framework using Playwright and TypeScript.
