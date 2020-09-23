runner = async (driver) => {
    const log = [`[TESTING] login-form: ${Date.now}`];

    try {
        const url = 'http://crossbrowsertesting.github.io/login-form.html';
        log.push[`[TRYING] ${url}`];
        await driver.get(url);

        log.push['[TRYING] snapshot'];
        await driver.takeSnapshot();
    } catch(e) {
        log.push[`[ERROR] ${e}`]
    }

    log[`[DONE] login-form:  ${Date.now}`];

    return log;
};

numberOfStories = 1;