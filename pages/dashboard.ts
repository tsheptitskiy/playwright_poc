import { Locator, Page } from "@playwright/test";

export class Dashboard {
    readonly page: Page
    readonly pageTitle: Locator
    readonly logoutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.pageTitle = page.getByRole('heading', { name: 'Dashboard' })
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' })
    }

    async logout() {
        await this.page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i').click();
        await this.logoutButton.click()
      }
}