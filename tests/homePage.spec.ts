import {test} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Header } from '../pages/header';
test('Перевірка', async({page})=>{
    const homePage=new HomePage(page);
    const header= new Header(page);
    await homePage.visit();
    await homePage.verifyTitle();
    await header.verifyLogoLink();
    await header.verifyLogoPrimary();
    await header.verifyTransparentLogo();
    await header.veriryPrimaryLogo();







});