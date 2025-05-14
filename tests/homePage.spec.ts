import {test, expect} from '@playwright/test'; 
test('Перевірка головної сторінки', async({page})=>{
await page.goto('https://theconnectedshop.com/'); //перехід на сайт
await expect(page).toHaveURL('https://theconnectedshop.com/'); //перевірка URL
await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office'); //перевірка тайтла


const logoLink = page.locator('.Header__LogoLink');
await expect(logoLink).toBeVisible(); //відображення
await expect(logoLink).toHaveAttribute('href','/');


//ДЗ 1:

const logoPrimary = page.locator('.Header__LogoImage.Header__LogoImage--primary'); 
await expect(logoPrimary).toBeVisible();
await expect(logoPrimary).toHaveAttribute('src','//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');

const accountLink = page.locator('a[href="/account"]').nth(1);
await expect(accountLink).toBeVisible();
await expect(accountLink).toHaveAttribute('href', '/account');

const primaryLogo = page.locator('img.Header__LogoImage--primary');
await expect(primaryLogo).toBeVisible();
await expect(primaryLogo).toHaveAttribute('alt', 'The Connected Shop Logo');
await expect(primaryLogo).toHaveAttribute('src','//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');

const transparentLogo = page.locator(' img.Header__LogoImage--transparent');
await expect(transparentLogo).toBeVisible();
await expect(transparentLogo).toHaveAttribute('alt', 'The Connected Shop Logo White');
await expect(transparentLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163');

const searchLogo = page.locator('a[data-action="toggle-search"]').first();
await expect(searchLogo).toBeVisible();
await expect(searchLogo).toHaveAttribute('href', '/search');

const cartLogo = page.locator('a[href="/cart"]').first();
await expect(cartLogo).toBeVisible();
await expect(cartLogo).toHaveAttribute('href', '/cart');
await expect(cartLogo).toContainText('Cart (0)'); //альтернатива запису в ряді 40-42

let cartNumber = page.locator('.Header__CartCount');
await expect(cartNumber).toBeVisible();
await expect(cartNumber).toHaveText('0');
});

test('Перевірка Search - пошук існуючого товару', async({page})=>{
    await page.goto('https://theconnectedshop.com/'); //перехід на сайт
    
const searchClick = page.locator('a[data-action="toggle-search"]').first();
await expect(searchClick).toBeVisible();
await searchClick.click();

const searchInput = page.locator('input[name="q"]');
await expect(searchInput).toBeVisible();
await expect(searchInput).toBeEnabled();
await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
await expect(searchInput).toHaveAttribute('type', 'search');
await searchInput.fill('MORTISES');
await expect(searchInput).toHaveValue('MORTISES');

const results = page.locator('span.Heading.Text--subdued.u-h7').first();
const resultText = await results.textContent();
console.log('textContent:', resultText)
const match = resultText?.match(/\d+/);
  const number = match ? parseInt(match[0], 10) : null;
  expect(number).not.toBeNull();
  expect(number!).toBeGreaterThan(0);

  //ДЗ-2



});



test('Перевірка Search - пошук неіснуючого товару', async({page})=>{
    await page.goto('https://theconnectedshop.com/'); //перехід на сайт
    
const searchClick = page.locator('a[data-action="toggle-search"]').first();
await expect(searchClick).toBeVisible();
await searchClick.click();



});

test('Перевірка Tab Menu', async({page})=>{
    await page.goto('https://theconnectedshop.com/'); //перехід на сайт

    const tabHome = page.locator('li > a[href="/"]');
    await expect(tabHome).toBeVisible();
    await expect(tabHome).toContainText('Home');
    await tabHome.click();

    const tabOnSale = page.locator('li > a[href="/collections/on-sale"]');
    await expect(tabOnSale).toBeVisible();
    await expect(tabOnSale).toContainText('On Sale');
    await tabOnSale.click();

    const tabCollections = page.locator('li > a[href="/pages/products"]');
    await expect(tabCollections).toBeVisible();
    await expect(tabCollections).toHaveText('Collections');
    await tabCollections.click();

    const tabPersonal = page.locator('li > a[href="/pages/personal"]');
    await expect(tabPersonal).toBeVisible();
    await expect(tabPersonal).toHaveText('Personal');
    await tabPersonal.click();

    const tabBusinesses = page.locator('li > a[href="/pages/businesses"]');
    await expect(tabBusinesses).toBeVisible();
    await expect(tabBusinesses).toHaveText('Businesses');
    await tabBusinesses.click();

    const tabTechTalk = page.locator('li > a[href="/blogs/tech-talk"]').first();
    await expect(tabTechTalk).toBeVisible();
    await expect(tabTechTalk).toContainText('Tech Talk');
    await tabTechTalk.click();

    const tabAboutUs = page.locator('li > a[href="/pages/about-us"]').first();
    await expect(tabAboutUs).toBeVisible();
    await expect(tabAboutUs).toHaveText('About us');
    await tabAboutUs.click();

    const tabFaq = page.locator('li > a[href="/pages/faqs"]').first();
    await expect(tabFaq).toBeVisible();
    await expect(tabFaq).toContainText('FAQ');
    await tabFaq.click();

    const tabContact = page.locator('li > a[href="/pages/contact-us"]').first();
    await expect(tabContact).toBeVisible();
    await expect(tabContact).toContainText('Contact');
    await tabContact.click();

    const tabCall = page.locator('li > a[href="tel:3053303424"]').first();
    await expect(tabCall).toBeVisible();
    await expect(tabCall).toContainText('📞 Call');
    await tabCall.click();


});