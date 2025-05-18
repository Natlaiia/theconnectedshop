import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { TabMenu } from '../pages/tabMenu';

test('Перевірка Tab Menu', async({page})=>{
        const homePage = new HomePage(page);
        const tabMenu = new TabMenu(page);
        await homePage.visit();
        await homePage.verifyTitle();
        await tabMenu.verifyTabHome();
        await tabMenu.verifyTabOnSale();
        await tabMenu.verifyTabCollections();
        await tabMenu.verifyTabPersonal();
        await tabMenu.verifyTabBusinesses();
        await tabMenu.verifyTabTechTalk();
        await tabMenu.verifyTabAboutUs();
        await tabMenu.verifyTabFaq();
        await tabMenu.verifyTabContact();
        await tabMenu.verifyTabCall();
});
