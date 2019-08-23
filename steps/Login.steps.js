const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const loginPage  = require('../pages/Login.page');

Given("I'm on the login page", () => {
  loginPage.open();
});

When("I log in with incorrect password", () => {
  loginPage.login("rvalek", "badpass");
});

When("I log in with teacher's credentials", () => {
  loginPage.login("rvalek", "goodpass");
});

Then("show error message", () => {
  assert.equal(loginPage.errorMessage, "Invalid login, please try again");
});

// Then("show the list of teacher's classes", userName => {
//   // assert.equal(loginPage.userLoggedIn.getText(), userName);
// });
