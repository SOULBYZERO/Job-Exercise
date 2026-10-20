
const { chromium } = require('playwright');
const fs = require('node:fs/promises');

async function main() {
    const browser = await chromium.launch({ headless: true });

    const page = await browser.newPage({
        viewport: { width: 1440, height: 1000 }
    });

    try {
        await fs.mkdir('screenshots', { recursive: true });

        await page.goto('https://test.netlify.app/', {
            waitUntil: 'domcontentloaded'
        });

        // Inspect form labels
        await page.getByLabel(/name/i).first().fill('XXXXXX');
        await page.getByLabel(/email/i).fill('XXXXXXXX@XXXXX.com');
        await page.getByLabel(/phone/i).fill('XXXXXXXXXXX');
        await page.getByLabel(/company/i).fill('Example Corp');
        await page.getByLabel(/website/i).fill('https://example.com');

        // Update employee range.
        const employeeField = page.getByLabel(/number of employees/i);

        if (await employeeField.count()) {
            await employeeField.selectOption({ label: '51-500' });
        }

        // Screenshot the form.
        await page.screenshot({
            path: 'screenshots/before-submit.png',
            fullPage: true
        });

        const submitButton = page.getByRole('button', {
            name: /request a call back/i
        });

        await submitButton.click();

        // Verify if submission was successful
        await page.getByText(/thank you/i).waitFor({
            state: 'visible',
            timeout: 15000
        });

        console.log('Successfully reached the thank-you page.');

    } catch (error) {
        console.error('Automation failed:', error.message);
        process.exitCode = 1;
    } finally {
        await browser.close();
    }
}

main();
