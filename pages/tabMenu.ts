import {expect, Page, Locator} from '@playwright/test';
import { verify } from 'crypto';
export class TabMenu {
    readonly page:Page;
    readonly tabHome:Locator;
    readonly tabOnSale:Locator;
    readonly tabCollections:Locator;
    readonly tabPersonal:Locator;
    readonly tabBusinesses:Locator;
    readonly tabTechTalk:Locator;
    readonly tabAboutUs:Locator;
    readonly tabFaq:Locator;
    readonly tabContact:Locator;
    readonly tabCall:Locator;

    constructor (page:Page){
        this.page=page;
        this.tabHome=page.locator('li > a[href="/"]');
        this.tabOnSale=page.locator('li > a[href="/collections/on-sale"]');
        this.tabCollections=page.locator('li > a[href="/pages/products"]');
        this.tabPersonal=page.locator('li > a[href="/pages/personal"]');
        this.tabBusinesses=page.locator('li > a[href="/pages/businesses"]');
        this.tabTechTalk=page.locator('li > a[href="/blogs/tech-talk"]').first();
        this.tabAboutUs=page.locator('li > a[href="/pages/about-us"]').first();
        this.tabFaq=page.locator('li > a[href="/pages/faqs"]').first();
        this.tabContact=page.locator('li > a[href="/pages/contact-us"]').first();
        this.tabCall=page.locator('li > a[href="tel:3053303424"]').first();
    }

    async verifyTabHome(){
        await expect(this.tabHome).toBeVisible();
        await expect(this.tabHome).toContainText('Home');
        await this.tabHome.click();
    }

    async verifyTabOnSale(){
        await expect(this.tabOnSale).toBeVisible();
        await expect(this.tabOnSale).toContainText('On Sale');
        await this.tabOnSale.click();
    }

    async verifyTabCollections(){
        await expect(this.tabCollections).toBeVisible();
        await expect(this.tabCollections).toHaveText('Collections');
        await this.tabCollections.click();
    }

    async verifyTabPersonal(){
        await expect(this.tabPersonal).toBeVisible();
        await expect(this.tabPersonal).toHaveText('Personal');
        await this.tabPersonal.click();
    }

    async verifyTabBusinesses(){
        await expect(this.tabBusinesses).toBeVisible();
        await expect(this.tabBusinesses).toHaveText('Businesses');
        await this.tabBusinesses.click(); 
    }

    async verifyTabTechTalk(){
        await expect(this.tabTechTalk).toBeVisible();
        await expect(this.tabTechTalk).toContainText('Tech Talk');
        await this.tabTechTalk.click();   
    }

    async verifyTabAboutUs(){
        await expect(this.tabAboutUs).toBeVisible();
        await expect(this.tabAboutUs).toHaveText('About us');
        await this.tabAboutUs.click();   
    }

    async verifyTabFaq(){
        await expect(this.tabFaq).toBeVisible();
        await expect(this.tabFaq).toContainText('FAQ');
        await this.tabFaq.click();    
    }

    async verifyTabContact(){
        await expect(this.tabContact).toBeVisible();
        await expect(this.tabContact).toContainText('Contact');
        await this.tabContact.click();    
    }

    async verifyTabCall(){
        await expect(this.tabCall).toBeVisible();
        await expect(this.tabCall).toContainText('📞 Call');
        await this.tabCall.click();
    }
}


