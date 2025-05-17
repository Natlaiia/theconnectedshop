import {expect, Page, Locator} from '@playwright/test';
export class Search {
    readonly page:Page;
    readonly searchClick:Locator;
    readonly searchInput:Locator;
    readonly searchResults:Locator;
    readonly itemSearchMortises:Locator;
    readonly searchResultNull:Locator;

    constructor (page:Page){
        this.page=page;
        this.searchClick=page.locator('a[data-action="toggle-search"]').first();
        this.searchInput=page.locator('input[name="q"]');
        // this.searchResults=page.locator('span.Heading.Text--subdued.u-h7').first();
        this.itemSearchMortises=page.locator('h2 > a:has-text("Mortises")').first();
        this.searchResultNull=page.locator('.Segment__Content').first();
    }
    
    async verifySearchClick(){
        await expect(this.searchClick).toBeVisible();
        await this.searchClick.click();
    }

    async verifySearchInput(){
        await expect(this.searchInput).toBeVisible();
        await expect(this.searchInput).toBeEnabled();
        await expect(this.searchInput).toHaveAttribute('placeholder', 'Search...');
        await expect(this.searchInput).toHaveAttribute('type', 'search');
    }

    async verifyItemSearchMortises(){
        await expect(this.itemSearchMortises).toContainText('Mortises');
        await this.itemSearchMortises.click();
    }

    async verifySearchResultNull(){
        await expect(this.searchResultNull).toBeVisible();
        await expect(this.searchResultNull).toHaveText('No results could be found');
    }
}


//Питання - чи треба searchResults виносити якось?

// const searchResults = page.locator('span.Heading.Text--subdued.u-h7').first();
// const resultText = await searchResults.textContent();
//     console.log('textContent:', resultText)
// const match = resultText?.match(/\d+/);
// const number = match ? parseInt(match[0], 10) : null;
//   expect(number).not.toBeNull();
//   expect(number!).toBeGreaterThan(0);
  

