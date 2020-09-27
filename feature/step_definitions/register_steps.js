var {Given} = require('cucumber');
var faker = require('faker');
var {Then} = require('cucumber');
var {When} = require('cucumber');
var randomFirstName = faker.name.firstName(); // Rowan
var randomLastName = faker.name.lastName(); // Luke
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const expectChai = require('chai').expect;

Given(/^i enter email in the email field$/, function () {
    const newEmail = $('input#email_create')
    newEmail.setValue(randomEmail)
});
Given(/^i click on create new account button$/, function () {
    const createAccountBtn = $('button#SubmitCreate > span')
    createAccountBtn.click()
});
Given(/^i click on male gender radio button$/, function () {
    const genderBtn = $('div:nth-of-type(1) > .top > .radio  input[name=\'id_gender\']')
        genderBtn.click()
});
Given(/^i enter my first name in the name field$/, function () {
    const firstName = $('input#customer_firstname')
    firstName.setValue(randomFirstName)
});
Given(/^i enter my last name in the name field$/, function () {
    const lastName = $('input#customer_lastname')
    lastName.setValue(randomLastName)
});
Given(/^i enter password "([^"]*)" in the password field$/, function (psw) {
    const password = $('input#passwd')
    password.setValue(psw)
});
Given(/^i enter DOB DAY "([^"]*)" MONTH "([^"]*)" and year "([^"]*)"$/, function (DD,MM,YY) {
    const selectDay = $('select#days')
    const selectMonth = $('select#months')
    const selectYear = $('select#years')

    selectDay.selectByAttribute('value',DD)
    selectMonth.selectByAttribute('value',MM)
    selectYear.selectByAttribute('value',YY)
    browser.pause(10000)

});
Given(/^i enter address details "([^"]*)" address "([^"]*)" line2 "([^"]*)" city "([^"]*)" state "([^"]*)" zipcode "([^"]*)" county "([^"]*)"$/, function (company,ln1,ln2,city,state,zipcode,country) {
    const companyName = $('input#company')
    companyName.setValue(company)
    const addressLn1 = $('input[name=\'address1\']')
    addressLn1.setValue(ln1)
    const addressln2 = $('input[name=\'address2\']')
    addressln2.setValue(ln2)
    const cityName = $('input#city')
    cityName.setValue(city)
    const stateName = $('select#id_state')
    stateName.selectByVisibleText(state);
    const zipcodeNo = $('input#postcode')
    zipcodeNo.setValue(zipcode)
    const countryName = $('select#id_country')
    countryName.selectByVisibleText(country);
});
Given(/^i enter my mobile number$/, function () {
    const mobileNo = $('input#phone_mobile')
    mobileNo.setValue('+134748484939')
});
When(/^i click on the register button$/, function () {
    const registerBtn = $('button#submitAccount > span')
    registerBtn.click()
});
Then(/^i verify register success message: "([^"]*)"$/, function (expectedMessage) {
    const actualMessage = $('div#center_column > .info-account').getText();
    console.log(actualMessage)
    expectChai(expectedMessage, actualMessage)


});