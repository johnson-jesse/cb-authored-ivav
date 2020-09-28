"use strict";
const webdriver = require('selenium-webdriver');
const { nanoid } = require('nanoid');
const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false, timeZone: 'UTC', timeZoneName: 'short'
};
// Exec
const utcNow = () => new Intl.DateTimeFormat('en-US', options).format(Date.now());
const timeInSeconds = (start) => (Date.now() - start) / 1000;
const mklog = (story, message) => `[${story}] ${utcNow()} ${message}`;
const runner = {
    uuid: nanoid(),
    numberOfStories: 1,
    accept: async (driver) => {
        const results = [];
        const name = 'login-form';
        const start = Date.now();
        const url = 'http://crossbrowsertesting.github.io/login-form.html';
        const log = (message) => {
            results.push(mklog(name, message));
        };
        log('started');
        log(`subject: ${url}`);
        try {
            log(`loading`);
        }
        catch (e) {
            log(`error: ${e}`);
        }
        log(`finished in ${timeInSeconds(start)} seconds}`);
        return results;
    }
};
module.exports = runner;
