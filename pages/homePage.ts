import {expect, Page} from '@playwright/test';
export class HomePage {
    readonly page:Page;

    constructor (page:Page){
        this.page=page;
    }
    async visit(){
        await this.page.goto('/')
        await expect(this.page).toHaveURL('https://theconnectedshop.com/');
    } 

    async verifyTitle(){
        await expect(this.page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');
    }
}