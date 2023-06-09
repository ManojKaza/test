const {Builder,By, Key} = require('selenium-webdriver');
async function login(username,password){
    const driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.css('a[href="/login"]')).click();
    await driver.findElement(By.id('username')).sendKeys(username,Key.TAB,password,Key.ENTER);
    await driver.quit();
}
login('manojkaza','admin');