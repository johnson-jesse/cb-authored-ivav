// const { WebDriver }  = require('selenium-webdriver');
// const { nanoid } = require('nanoid');
import { By, until, WebDriver } from 'selenium-webdriver';
import { nanoid } from 'nanoid';

const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false, timeZone: 'UTC', timeZoneName: 'short' };

const utcNow = (): string => new Intl.DateTimeFormat('en-US', options).format(Date.now());
const timeInSeconds = (start: number): number => (Date.now() - start) / 1000;
const mklog = (story: string, message: string): string => `[${story}] ${utcNow()} ${message}`;

type service = {
    driver: WebDriver;
}

export default {
    uuid: nanoid(),
    numberOfStories: 1,

    accept: async ({ driver }: service): Promise<string[]> => {
        const results: string[] = [];
        const name = 'login-form';
        const start = Date.now();
        const url = 'http://crossbrowsertesting.github.io/login-form.html';
        const log = (message: string) => {
            results.push(mklog(name, message));
        };
    
        log('started');
        log(`subject: ${url}`);
    
        try {
            log(`loading`);
            await driver.get(url);
    
            log(`Sending username to field`);
            await driver.findElement(By.id("username")).sendKeys("tester@crossbrowsertesting.com");

            log('Sending password to field');
            await driver.findElement(By.xpath("//*[@type=\"password\"]")).sendKeys("test123");
    
            //log.push('[TRYING] submit form');
            await driver.findElement(By.css("button[type=submit]")).click();
    
            //log.push('[TRYING] verify results');
            await driver.wait(until.elementLocated(By.id("logged-in-message")), 10000);
        } catch (e) {
            log(`error: ${e}`);
            //await driver.quit();
        }
    
       log(`finished in ${timeInSeconds(start)} seconds}`);

    
        return results;
    }
}