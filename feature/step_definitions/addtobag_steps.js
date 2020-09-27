var {Then} = require('cucumber');
var {When} = require('cucumber');
var {Given} = require('cucumber');

Given(/^i select more items$/, function () {
    const quantity = $('.icon-plus')
    quantity.click()
});
Given(/^i select size L$/, function () {
    const size = $('#group_1 > option:nth-child(3)')
    size.click()

});
When(/^i add to cart$/, function () {
    const addToCart = $('p#add_to_cart > button[name=\'Submit\']')
    addToCart.click()
    browser.pause(5000)

});
Then(/^i verify item is added to cart$/, function () {
    const itemAddedToCart = $('a[title=\'View my shopping cart\']')
    itemAddedToCart.click()
    browser.pause(2000)


});