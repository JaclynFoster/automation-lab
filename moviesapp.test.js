
const {By,Key,Builder, Browser} = require("selenium-webdriver");
//require("chromedriver");
let driver;
beforeEach(async () => {
    driver = new Builder().forBrowser(Browser.CHROME).build();
  });
  
  afterEach(async () => {
    await driver.quit();
  });

describe("Test the Movies App", () => {
    test("can delete a movie", async () => {
        await driver.get("http://localhost:3000/");
        await driver
        .findElement(By.css('input[name="movieTitle"]'))
        .sendKeys("Movie Name")
        await driver.findElement(By.css('button[type="submit"]')).click
        const addedMovie = await driver.wait(
            until.elementLocated(By.css("#movies-list li label", 1000))
            ); 
            const deleteMovie = await driver
            .findElement(By.css('button[class="delete-btn"]')).click
            expect(await driver.wait(
                until.elementLocated(deleteMovie.remove(addedMovie)))
                )
                
            })
            test("can cross off a movie", async () => {
                await driver.get("http://localhost:3000/");
                await driver
                .findElement(By.css('input[name="movieTitle"]'))
                .sendKeys("Movie Name")
                await driver.findElement(By.css('button[type="submit"]')).click
                const checkOff = await driver.findElement(By.css('input[type="checkbox"]')).click
                expect(await checkOff.toBeTruthy())
                
            })
            test("notifications were displayed", async () => {
                await driver.get("http://localhost:3000/");
                await driver
                .findElement(By.css('input[name="movieTitle"]'))
                .sendKeys("Movie Name")
                await driver.findElement(By.css('button[type="submit"]')).click
                await driver.findElement(By.css('input[type="checkbox"]')).click
                const messageText = await driver.findElement(By.css("#message")) 
                expect (await messageText.getText()).toBe(messageText)
            })
        })