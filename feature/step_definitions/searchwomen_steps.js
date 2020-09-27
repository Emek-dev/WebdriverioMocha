var {Given} = require('cucumber');
Given(/^i move the mouse over women and selected from the drop down list$/, function () {
    $('a[title=\'Women\']').moveTo(30,60);
    browser.pause(3000)
    const selectSummerDresses = $('.sfHover > .first-in-line-xs.submenu-container a[title=\'Summer Dresses\']')
    selectSummerDresses.click();
    browser.pause(4000)
});
Given(/^i see "([^"]*)" on the PLP$/, function (expectedMessage) {
    const actualMessage = $('.cat-name').getText()
    console.log(actualMessage)
    expect(expectedMessage).to.equal(actualMessage);
    browser.pause(8000)
});
Given(/^i clicked on printed chiffon dress and see PDP$/, function () {
    const chiffonDress = $('a[title=\'Printed Chiffon Dress\'] > img[alt=\'Printed Chiffon Dress\']')
    chiffonDress.click()
});
Given(/^I select quantity as "([^"]*)" and size as "([^"]*)"$/, function (q2,size) {
   const quantity = $('input#quantity_wanted')
    quantity.setValue(q2)
    const dressSize = $('select#group_1')
    dressSize.selectByVisibleText(size)
    browser.pause(5000)
});
Given(/^i click on add to cart button$/, function () {
    const addToCart = $('p#add_to_cart  span')
    addToCart.click()
    browser.pause(5000)
});
Given(/^i see add to cart success and and click on proceed to check out button$/, function () {
    const proceedCheckOut = $('a[title=\'Proceed to checkout\'] > span')
    proceedCheckOut.click()
    browser.pause(2000)
});
Given(/^i see cart summary and continue to click on check out button$/, function () {
    const checkOutBtn2 = $('div#center_column  a[title=\'Proceed to checkout\'] > span')
    checkOutBtn2.click()
    browser.pause(3000)
});
Given(/^i confirm the delivery address: "([^"]*)" and "([^"]*)"$/, function (expectedDeliveryAdd,expectedBillingAdd) {
    const actualDeliveryAdd = $('ul#address_delivery  .page-subheading').getText()
    console.log(actualDeliveryAdd)
    expect(expectedDeliveryAdd).to.equal(actualDeliveryAdd);
    const actualBillingAdd = $('ul#address_invoice  .page-subheading').getText()
    console.log(actualBillingAdd)
    expect(expectedBillingAdd).to.equal(actualBillingAdd);
    browser.pause(3000)
});
Given(/^i confirm the order summery message "([^"]*)"$/, function (expectedMessage) {
    const actualMessage = $('div#center_column > .page-heading').getText()
    console.log(actualMessage)
    expect(expectedMessage).to.equal(actualMessage);


});