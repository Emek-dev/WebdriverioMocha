var {Then} = require('cucumber');
var {When} = require('cucumber');
var {Given} = require('cucumber');
//const expectChai = require('chai').expect;

Given(/^i am on the home page$/, function () {
    browser.url('/index.php')

});
Given(/^i click on the sign in link$/, function () {
    const signInLink = $('a[title=\'Log in to your customer account\']')
    signInLink.click();

});
Given(/^i enter my email "([^"]*)" in the email field$/, function (myemail) {
    const email = $('input#email')
    email.setValue(myemail)

});
Given(/^i enter my password "([^"]*)" in the password field$/, function (mypassword) {
    const password = $('input#passwd')
    password.setValue(mypassword)

});
When(/^i click the login button$/, function () {
    const loginBtn = $('button#SubmitLogin > span')
    loginBtn.click()
});
Then(/^i should be logged in$/, function () {

});
Then(/^i verify "([^"]*)" on my details page$/, function (expectedName) {
    const actualName = $('a[title=\'View my customer account\'] > span').getText();
    console.log(actualName);
    expect(expectedName).to.equal(actualName);
    //expectChai(expectedName, actualName)

});
Then(/^i sign out$/, function () {
    const signOutLink = $('a[title=\'Log me out\']')
    signOutLink.click();

});
Then(/^i see an error "([^"]*)" message details$/, function (expectedErrorMessage) {
    const actualErrorMessage = $('div#center_column li').getText();
    console.log(actualErrorMessage);
    expect(expectedErrorMessage).to.equal(actualErrorMessage);
   // expectChai(expectedErrorMessage,actualErrorMessage);
    browser.pause(4000)


});

