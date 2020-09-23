import { WebDriver } from 'selenium-webdriver';

function run(driver: WebDriver) {
    console.log('I am run:', driver);
}

const story = run;