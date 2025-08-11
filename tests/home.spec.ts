import { test, expect } from "@playwright/test";
import { title } from "process";

test.describe('Home', () => {
    test('Open Homepage and verify title', async ({ page }) => {

        // open URL
        await page.goto('https://practice.sdetunicorns.com');

        // verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");

    })

    test('Click get started button using CSS Selector', async ({ page }) => {

        // open URL
        await page.goto('https://practice.sdetunicorns.com');

        // button click
        await page.locator('#get-started').click();

        // verify URL
        // await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
        await expect(page).toHaveURL(/.*#get-started/);

    })

    test('Verify heading text is visible using text selector', async ({ page }) => {

        // open URL
        await page.goto('https://practice.sdetunicorns.com');

        // find the text locator
        const headingText = await page.locator('text=Think different. Make different.')

        // verify heading text is visible
        await expect(headingText).toBeVisible();

    })

    test('Verify home link is enabled using text and CSS selector', async ({ page }) => {

        // open URL
        await page.goto('https://practice.sdetunicorns.com');

        // find the home text using text and CSS selector
        // const homeText = await page.locator('#zak-primary-menu >> text=Home')
        const homeText = await page.locator('#zak-primary-menu:has-text("Home")')

        // verify home text is enabled
        await expect(homeText).toBeEnabled();

    })

    test('Verify search icon is visible using XPATH', async ({ page }) => {

        // open URL
        await page.goto('https://practice.sdetunicorns.com');

        // find search icon using XPATH
        const searchIcon = await page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]//*[name()="svg"]')

        // verify search icon is visible
        await expect(searchIcon).toBeVisible();

    })

    test('Verify text for all navigation links', async ({ page }) => {

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        // open URL
        await page.goto('https://practice.sdetunicorns.com');

        // find nav links
        const navLinks = await page.locator('#zak-primary-menu li[id*=menu]')
        const xnavLinks = await page.locator('#zak-primary-menu li[id*=menu]').nth(3)

        // print out all the links

        for (const element of await navLinks.elementHandles()) {
            console.log(await element.textContent());
            
        }

        // verify nav links text
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        expect(await xnavLinks.textContent()).toEqual(expectedLinks[3]);


    })



})
