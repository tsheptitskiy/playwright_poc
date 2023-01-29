/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test, expect } from '@playwright/test';

test.describe('Log In suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });
  
  test('Logs in', async ({ page }) => {
    await page.getByRole('heading', { name: 'Login' }).isVisible();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('heading', { name: 'Dashboard' }).isVisible();
    
  });
  test('Logs in - Incorrect password', async ({ page }) => {
    await page.getByRole('heading', { name: 'Login' }).isVisible();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('test');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
    
  });
  test('Logs in - Incorrect username', async ({ page }) => {
    await page.getByRole('heading', { name: 'Login' }).isVisible();
    await page.getByPlaceholder('Username').fill('test');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});