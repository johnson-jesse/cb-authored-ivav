runner = async (driver) => {
    const log = [`[TESTING] login-form: ${Date.now}`];

    try {
        const url = 'http://crossbrowsertesting.github.io/login-form.html';
        log.push[`[TRYING] ${url}`];
        await driver.get(url);

        log.push['[TRYING] snapshot'];
        await driver.takeSnapshot();

        log.push['[TRYING] send username to field'];
        await driver.findElement(webdriver.By.id("username")).sendKeys("tester@crossbrowsertesting.com");

        log.push['[TRYING] send password to field'];
        //send keys to element to enter text
        await driver.findElement(webdriver.By.xpath("//*[@type=\"password\"]")).sendKeys("test123");

        log.push['[TRYING] snapshot'];
        driver.takeSnapshot();

        log.push['[TRYING] submit form'];
        await driver.findElement(webdriver.By.css("button[type=submit]")).click();

        log.push['[TRYING] verify results'];
        await driver.wait(webdriver.until.elementLocated(webdriver.By.id("logged-in-message")), 10000);

        await driver.takeSnapshot();

        log.push['[TRYING] close down'];
        await driver.quit();
    } catch (e) {
        log.push[`[ERROR] ${e}`]
    }

    log[`[DONE] login-form:  ${Date.now}`];

    return log;
};

numberOfStories = 1;