const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const loginPage = require("../pages/Login.page");
const errors = require("../data/errors");
const creds = require("../data/credentials");

Given("I'm on the login page", () => {
  loginPage.open();
});

When("I log in with incorrect password", () => {
  loginPage.login({ ...creds, password: "badpass" });
});

When("I log in with teacher's credentials", () => {
  loginPage.login(creds);
});

Then("show {string} error message", errorType => {
  assert.equal(loginPage.errorMessage, errors[errorType]);
});

Then("show the list of teacher's classes", () => {
  // assert.equal(loginPage.userLoggedIn.getText(), userName);
});
