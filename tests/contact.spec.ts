import { test, expect } from "@playwright/test";

test.describe('Contact', () => {
    test('Open contact page and fill form', async ({ page }) => {

        // open URL
        await page.goto('https://practice.sdetunicorns.com');

        // navigate to Contct page
        await page.locator('#zak-primary-menu >> text=Contact').click();


        // verify title
        await expect(page).toHaveTitle("Contact – Practice E-Commerce Site");

        // fill the form

        await page.locator('//input[@id="evf-277-field_ys0GeZISRs-1"]').fill("QA Testing")
        await page.locator('//input[@id="evf-277-field_LbH5NxasXM-2"]').fill("lad@gmail.com")
        await page.locator('//input[@id="evf-277-field_66FR384cge-3"]').fill("+91987654321")
        await page.locator('//textarea[@id="evf-277-field_yhGx3FOwr2-4"]').fill('Well done, Leena !')

        // soft assertion
        await expect.soft(page.locator('//textarea[@id="evf-277-field_yhGx3FOwr2-4"]')).toHaveText("Soft assert testing")

        // submit button
        await page.locator('//button[@id="evf-submit-277"]').click()

        // soft error check

        expect(test.info().errors.length).toBeLessThan(1)

        // verify success message
        const successMesage = page.locator('div[role="alert"]')

        await expect(successMesage).toHaveText('Thanks for contacting us! We shall be in touch with you shortly')        

    })
})