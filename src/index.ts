// import webdriver from 'selenium-webdriver';

// const options = {
//     year: 'numeric', month: 'numeric', day: 'numeric',
//     hour: 'numeric', minute: 'numeric', second: 'numeric',
//     hour12: false, timeZone: 'UTC', timeZoneName: 'short' };

// const utcNow = (): string => new Intl.DateTimeFormat('en-US', options).format(Date.now());
// const timeInSeconds = (start: number): number => (Date.now() - start) / 1000;
// const mklog = (story: string, message: string): string => `[${story}] ${utcNow()} ${message}`

// var runner = {
//     numberOfStories: 1,

//     start: async (driver: any): Promise<string[]> => {
//         const results: string[] = [];
//         const name = 'login-form';
//         const start = Date.now();
//         const url = 'http://crossbrowsertesting.github.io/login-form.html';
//         const log = (message: string) => {
//             results.push(mklog(name, message));
//         };
    
//         log('started');
//         log(`subject: ${url}`);
    
//         try {
//             log(`loading`);
//             await driver.get(url);
    
//             log(`Sending username to field`);
//             await driver.findElement(webdriver.By.id("username")).sendKeys("tester@crossbrowsertesting.com");
    
//             //log.push('[TRYING] send password to field');
//             //send keys to element to enter text
//             //await driver.findElement(webdriver.By.xpath("//*[@type=\"password\"]")).sendKeys("test123");
    
//             //log.push('[TRYING] submit form');
//             //await driver.findElement(webdriver.By.css("button[type=submit]")).click();
    
//             //log.push('[TRYING] verify results');
//             //await driver.wait(webdriver.until.elementLocated(webdriver.By.id("logged-in-message")), 10000);
    
//             //log.push('[TRYING] close down');
//             //await driver.quit();
//         } catch (e) {
//             log(`error: ${e}`);
//             //await driver.quit();
//         }
    
//        log(`finished in ${timeInSeconds(start)} seconds}`);

    
//         return results;
//     }
// }

export default {
    numberOfStories: 0
}