## Overview

This project contains a browser automation script developed as part of a QA automation assignment. It uses **Playwright** to automate a user workflow on the Jones website and verify that the process completes successfully.

The goal is to demonstrate browser automation, interaction with web elements, workflow validation, screenshot capture, and execution logging.

## Features

- **Browser automation** — Automates the target user workflow using Playwright.
- **Form interaction** — Performs the required interactions with page elements.
- **Workflow validation** — Verifies that the process reaches the expected thank-you page.
- **Screenshot capture** — Captures a screenshot before the final submission step for visual verification.
- **Execution logging** — Logs successful execution to the console.

## Technologies Used

- JavaScript
- Node.js
- Playwright

## Prerequisites

Before running the project, ensure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_URL>
   ```

2. Navigate to the project directory:

   ```bash
   cd <YOUR_PROJECT_DIRECTORY>
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Install the Playwright browser required by the script:

   ```bash
   npx playwright install
   ```

## Running the Automation

Run the automation script using Node.js:

```bash
node automation.js
```

Replace `automation.js` with the actual script filename if it differs.

Follow the console output to monitor execution. The script logs a success message when the expected workflow completes.

## Evidence and Verification

The automation captures a screenshot before the final submission step, providing visual evidence of the page state at that point in the workflow.

The expected successful outcome is reaching the thank-you page, with successful execution reported in the console.

## Project Structure

```text
jones-playwright-qa/
├── automation.js
├── package.json
├── package-lock.json
├── screenshots/
│   └── before-submit.png
└── README.md
```

*Note: The structure above is illustrative. Adjust the filenames and folders to match the actual repository.*

## Notes

- Ensure the target website is accessible before running the script.
- Browser and dependency requirements may vary depending on the local environment.
- The automation is intended for the specified QA assignment workflow.

