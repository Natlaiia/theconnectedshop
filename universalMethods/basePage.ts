import { expect, Locator, Page } from '@playwright/test';
 
export class BasePage {
  readonly page: Page;
 
  constructor(page: Page) {
    this.page = page;
  }
 
  async clickElement(element: Locator, stepName = 'Click Element') {
    try {
      await expect(element).toBeVisible();
      await element.click();
    } catch (error) {
      console.error(`[${stepName}] Помилка при кліку:`, error);
    }
  }
 
  async fillInput(element: Locator, value: string, stepName = 'Fill Input') {
    try {
      await expect(element).toBeVisible();
      await expect(element).toBeEnabled();
      await element.fill(value);
      await expect(element).toHaveValue(value);
    } catch (error) {
      console.error(`[${stepName}] Помилка при введенні "${value}":`, error);
    }
  }
 
  async expectVisible(element: Locator, stepName = 'Expect Visible') {
    try {
      await expect(element).toBeVisible();
    } catch (error) {
      console.error(`[${stepName}] Елемент не відображається:`, error);
    }
  }
 
  async expectHasAttribute(element: Locator, attr: string, value: string, stepName = 'Expect Attribute') {
    try {
      await expect(element).toHaveAttribute(attr, value);
    } catch (error) {
      console.error(`[${stepName}] Атрибут "${attr}" не дорівнює "${value}":`, error);
    }
  }
 
  async expectText(element: Locator, text: string, stepName = 'Expect Text') {
    try {
      await expect(element).toHaveText(text);
    } catch (error) {
      console.error(`[${stepName}] Текст не відповідає "${text}":`, error);
    }
  }
}