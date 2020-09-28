import { By, until, WebDriver } from 'selenium-webdriver';
import { nanoid } from 'nanoid';

// This type should be removed and the imported version when available should be used
type service = {
    driver: WebDriver;
    log(message: string): void;
    setName(name: string): void;
}

export default {
    uuid: nanoid(),
    numberOfStories: 1,

    accept: async (service: service) => {
        service.setName('login-form');
        const url = 'http://crossbrowsertesting.github.io/login-form.html';
    
        service.log('started');
        service.log(`subject: ${url}`);
    
        try {
            service.log(`loading`);
            await service.driver.get(url);
    
            service.log(`Sending username to field`);
            await service.driver.findElement(By.id("username")).sendKeys("tester@crossbrowsertesting.com");

            service.log('Sending password to field');
            await service.driver.findElement(By.xpath("//*[@type=\"password\"]")).sendKeys("test123");
    
            service.log('submitting form');
            await service.driver.findElement(By.css("button[type=submit]")).click();
    
            service.log('waiting on result');
            await service.driver.wait(until.elementLocated(By.id("logged-in-message")), 10000);
        } catch (e) {
            service.log(`error: ${e}`);
        }
    }
}