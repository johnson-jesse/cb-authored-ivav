import { By, until, WebDriver } from 'selenium-webdriver';
import { nanoid } from 'nanoid';

type service = {
    driver: WebDriver;
    log(message: string): void;
    name(name: string): void;
}

export default {
    uuid: nanoid(),
    numberOfStories: 1,

    accept: async (service: service) => {
        service.name('login-form');
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
    
            //log.push('[TRYING] submit form');
            await service.driver.findElement(By.css("button[type=submit]")).click();
    
            //log.push('[TRYING] verify results');
            await service.driver.wait(until.elementLocated(By.id("logged-in-message")), 10000);
        } catch (e) {
            service.log(`error: ${e}`);
        }
    }
}