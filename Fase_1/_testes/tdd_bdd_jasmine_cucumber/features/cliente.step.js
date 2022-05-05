const assert = require("assert");
const { Given, When, Then } = require("cucumber");

const path = require("path");
const { ServiceBuilder } = require("selenium-webdriver/chrome");
const { Builder, By, Key, until } = require("selenium-webdriver");

const pathDriver =
  "/home/jonathan/Jobs/My/hiring-coders/Fase_1/_testes/tdd_bdd_jasmine_cucumber/driver/chromedriver";
const serviceBuilder = new ServiceBuilder(pathDriver);

const driver = new Builder()
  .forBrowser("chrome")
  .setChromeService(serviceBuilder)
  .build();

Given("I'm have {string} clients in my database", (string) => {
  console.log("Inseri os dados na base de dados");
});

When("I acess the home webpage", async () => {
  await driver.get("http://localhost:3000/");
  await driver.sleep(1000);
});

Then("see the list of {string} items", async (string) => {
  let qtd = await driver.findElements(By.css('tbody tr'));
  assert.equal(qtd.length, parseInt(string));
  await driver.quit();
});
node_modules