// import { webdriver } from 'selenium-webdriver';

const utcNow = () => new Date().toUTCString();
const timeInSeconds = (start: number): number => (Date.now() - start) / 1000;

var runner = {
    numberOfStories: 1,

    start: async (driver: any): Promise<string[]> => {
        const start = Date.now();
        const url = 'http://crossbrowsertesting.github.io/login-form.html';
    
        const log = [`[login-form] started: ${utcNow()}`];
        log.push(`[login-form] subject: ${url}`);
    
        try {
            log.push(`[login-form] loading: ${utcNow()}`);
            await driver.get(url);
    
            //log.push('[TRYING] send username to field');
            //await driver.findElement(webdriver.By.id("username")).sendKeys("tester@crossbrowsertesting.com");
    
            //log.push('[TRYING] send password to field');
            //send keys to element to enter text
            //await driver.findElement(webdriver.By.xpath("//*[@type=\"password\"]")).sendKeys("test123");
    
            //log.push('[TRYING] submit form');
            //await driver.findElement(webdriver.By.css("button[type=submit]")).click();
    
            //log.push('[TRYING] verify results');
            //await driver.wait(webdriver.until.elementLocated(webdriver.By.id("logged-in-message")), 10000);
    
            //log.push('[TRYING] close down');
            //await driver.quit();
        } catch (e) {
            log.push(`[login-form] error: ${e}`);
            //await driver.quit();
        }
    
        log.push(`[login-form] finished at: ${utcNow()}`)
        log.push(`[login-form] done in: ${timeInSeconds(start)} seconds`);
    
        return log;
    }
}