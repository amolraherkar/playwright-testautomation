import { test, expect } from '@playwright/test';
const path = require('path');

test.describe('Upload File', () => {
    const fileName = ['bird.jpeg']

    test('should upload a jpg file', async ({ page }) => {

        // Open url
        await page.goto("https://practice.sdetunicorns.com/cart/");

        // provide test file path
        const filePath = path.join(__dirname, '../data/bird.jpg');

        // upload test file
        await page.setInputFiles('input#upfile_1', filePath)

        // click submit button
        await page.locator('#upload_1').click();

        // verify success message
        await expect(page.locator('//div[@id="wfu_messageblock_header_1_1"]')).toContainText('uploaded successfully');

    })

})