import { test, expect } from '@playwright/test';

test.describe('DemoBlaze E2E Flow', () => {

  const username = `user${Date.now()}`;
  const password = 'Password@123';

  test('Signup -> Login -> Add Product -> Place Order', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // ==========================
    // Signup
    // ==========================

    await page.click('#signin2');

    await page.waitForSelector('#signInModal', {
      state: 'visible'
    });

    await page.fill('#sign-username', username);
    await page.fill('#sign-password', password);

    page.once('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await page.click(
      '#signInModal button[onclick="register()"]'
    );

    await page.waitForTimeout(3000);

    // ==========================
    // Login
    // ==========================

    await page.click('#login2');

    await page.waitForSelector('#logInModal', {
      state: 'visible'
    });

    await page.fill('#loginusername', username);
    await page.fill('#loginpassword', password);

    await page.click(
      '#logInModal button[onclick="logIn()"]'
    );

    await expect(page.locator('#nameofuser'))
      .toContainText(username);

    // ==========================
    // Product Selection
    // ==========================

    await page.click('a[href="prod.html?idp_=1"]');

    await expect(page.locator('.name'))
      .toBeVisible();

    // ==========================
    // Add To Cart
    // ==========================

    page.once('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await page.click('a.btn.btn-success');

    await page.waitForTimeout(2000);

    // ==========================
    // Navigate To Cart
    // ==========================

    await page.click('#cartur');

    await expect(page.locator('.success'))
      .toBeVisible();

    // ==========================
    // Place Order
    // ==========================

    await page.click('button[data-target="#orderModal"]');

    await page.waitForSelector('#orderModal', {
      state: 'visible'
    });

    await page.fill('#name', 'Balaji');
    await page.fill('#country', 'India');
    await page.fill('#city', 'Bengaluru');
    await page.fill('#card', '4111111111111111');
    await page.fill('#month', '12');
    await page.fill('#year', '2028');

    await page.click(
      '#orderModal button[onclick="purchaseOrder()"]'
    );

    // ==========================
    // Validation
    // ==========================

    const confirmation =
      page.locator('.sweet-alert');

    await expect(confirmation)
      .toContainText('Thank you for your purchase!');

    const confirmationText =
      await page.locator('.sweet-alert p')
        .textContent();

    console.log('Order Details:', confirmationText);

    await page.click('.confirm');

  });

});
