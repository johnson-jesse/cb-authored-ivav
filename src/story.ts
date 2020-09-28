const webdriver = require('selenium-webdriver');
const { nanoid } = require('nanoid');

const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false, timeZone: 'UTC', timeZoneName: 'short' };

const utcNow = (): string => new Intl.DateTimeFormat('en-US', options).format(Date.now());
const timeInSeconds = (start: number): number => (Date.now() - start) / 1000;
const mklog = (story: string, message: string): string => `[${story}] ${utcNow()} ${message}`;

const runner = {
    uuid: nanoid(),
    numberOfStories: 1,

    accept: async (service: any): Promise<string[]> => {
        const results: string[] = [];
        const name = 'login-form';
        const start = Date.now();
        const url = 'http://crossbrowsertesting.github.io/login-form.html';
        const log = (message: string) => {
            results.push(mklog(name, message));
        };
    
        log('started');
        log(`subject: ${url}`);
        console.log('service', service);
        const driver = service.driver;
    
        try {
            log(`loading`);
            await driver.get(url);
    
            log(`Sending username to field`);
            await driver.findElement(webdriver.By.id("username")).sendKeys("tester@crossbrowsertesting.com");

            log('Sending password to field');
            await driver.findElement(webdriver.By.xpath("//*[@type=\"password\"]")).sendKeys("test123");
    
            //log.push('[TRYING] submit form');
            await driver.findElement(webdriver.By.css("button[type=submit]")).click();
    
            //log.push('[TRYING] verify results');
            await driver.wait(webdriver.until.elementLocated(webdriver.By.id("logged-in-message")), 10000);
        } catch (e) {
            log(`error: ${e}`);
            //await driver.quit();
        }
    
       log(`finished in ${timeInSeconds(start)} seconds}`);

    
        return results;
    }
}

module.exports = runner;
