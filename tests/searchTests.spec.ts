import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Search } from '../pages/search';
import { Header } from '../pages/header';

test('Перевірка Search - пошук існуючого товару', async({page})=>{
    const homePage = new HomePage(page);
    const search = new Search(page);
    const header= new Header(page);
    await homePage.visit();
    await homePage.verifyTitle();
    await header.verifySearchLogo();
    await search.verifySearchClick();
    await search.verifySearchInput();
    // await search.searchInput.fill('MORTISES');
    // await expect(search.searchInput).toHaveValue('MORTISES');

    await search.searchForItem('MORTISES');
    await search.verifySearchResultsFound();
    
    // const results = page.locator('span.Heading.Text--subdued.u-h7').first();
    // const resultText = await results.textContent();
    //      console.log('textContent:', resultText)
    // const match = resultText?.match(/\d+/);
    // const number = match ? parseInt(match[0], 10) : null;
    //     expect(number).not.toBeNull();
    //     expect(number!).toBeGreaterThan(0);
  
    await search.verifyItemSearchMortises();
});

test('Перевірка Search - пошук не існуючого товару', async({page})=>{
    const homePage = new HomePage(page);
    const search = new Search(page);
    const header= new Header(page);
    await homePage.visit();
    await homePage.verifyTitle();
    await header.verifySearchLogo();
    await search.verifySearchClick();
    await search.verifySearchInput();
    await search.searchInput.fill('NoneItem');
    await expect(search.searchInput).toHaveValue('NoneItem');
    await search.verifySearchResultNull();
});