import {expect, Page, Locator} from '@playwright/test';
export class Header {
    readonly page:Page;

    readonly logoLink:Locator;
    readonly logoPrimary:Locator;
    readonly primaryLogo:Locator;
    readonly transparentLogo:Locator;

 constructor (page:Page){
    this.page=page;
    this.logoLink=page.locator('.Header__LogoLink');
    this.logoPrimary=page.locator('.Header__LogoImage.Header__LogoImage--primary');
    this.primaryLogo=page.locator('img.Header__LogoImage--primary');
    this.transparentLogo=page.locator('img.Header__LogoImage--transparent');
    }

    async verifyLogoLink(){
        await expect(this.logoLink).toBeVisible();
        await expect(this.logoLink).toHaveAttribute('href','/');
    }

    async verifyLogoPrimary(){
        await expect(this.logoPrimary).toBeVisible();
        await expect(this.logoPrimary).toHaveAttribute('src','//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');
    }

    async veriryPrimaryLogo(){
        await expect(this.primaryLogo).toBeVisible();
        await expect(this.primaryLogo).toHaveAttribute('alt', 'The Connected Shop Logo');
        await expect(this.primaryLogo).toHaveAttribute('src','//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');
    }

    async verifyTransparentLogo(){
        await expect(this.transparentLogo).toBeVisible();
        await expect(this.transparentLogo).toHaveAttribute('alt', 'The Connected Shop Logo White');
        await expect(this.transparentLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163');
    }

}