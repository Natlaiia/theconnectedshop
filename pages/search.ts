import { expect, Page, Locator } from '@playwright/test';
import { BasePage } from '../universalMethods/BasePage'; //якщо extand
 
export class Search extends BasePage {   // замість extand додати в readonly basePage: BasePage;
    // readonly page: Page;
    readonly searchClick: Locator;
    readonly searchInput: Locator;
    readonly searchResults: Locator;
    readonly itemSearchMortises: Locator;
    readonly searchResultNull: Locator;
 
    constructor(page: Page) {
        super(page); //this.page page; та this.basePage = basePage
        this.searchClick = page.locator('a[data-action="toggle-search"]').first();
        this.searchInput = page.locator('input[name="q"]');
        this.searchResults = page.locator('span.Heading.Text--subdued.u-h7').first();
        this.itemSearchMortises = page.locator('h2 > a:has-text("Mortises")').first();
        this.searchResultNull = page.locator('.Segment__Content').first();
    }
 
    async verifySearchClick() {
        await this.clickElement(this.searchClick, 'Клік по іконці пошуку');
      }


    // async verifySearchClick() {
    //     await expect(this.searchClick).toBeVisible();
    //     await this.searchClick.click();
    // }
 
    async verifySearchInput(){
        await this.expectHasAttribute(this.searchInput, 'placeholder', 'Search...', 'Placeholder пошуку');
        await this.expectHasAttribute(this.searchInput, 'type', 'search', 'Type пошуку');
}


    // async verifySearchInput() {
    //     await expect(this.searchInput).toBeVisible();
    //     await expect(this.searchInput).toBeEnabled();
    //     await expect(this.searchInput).toHaveAttribute('placeholder', 'Search...');
    //     await expect(this.searchInput).toHaveAttribute('type', 'search');
    // }
 

    async searchForItem(itemName: string){
        await this.fillInput(this.searchInput, itemName, `Введення запиту "${itemName}"`);
  }


    // async searchForItem(itemName: string) {
    //     await this.searchInput.fill(itemName);
    //     await expect(this.searchInput).toHaveValue(itemName);
    // }
 
    async verifySearchResultsFound() {
        const resultText = await this.searchResults.textContent();
        console.log('textContent:', resultText);
        const match = resultText?.match(/\d+/);
        const number = match ? parseInt(match[0], 10) : null;
        expect(number).not.toBeNull();
        expect(number!).toBeGreaterThan(0);
    }
 
    async verifyItemSearchMortises() {
        await expect(this.itemSearchMortises).toContainText('Mortises');
        await this.itemSearchMortises.click();
    }
 
    async verifySearchResultNull() {
        await expect(this.searchResultNull).toBeVisible();
        await expect(this.searchResultNull).toHaveText('No results could be found');
    }
}