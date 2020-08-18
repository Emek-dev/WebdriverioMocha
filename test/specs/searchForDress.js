describe('search for dress, select add to cart', () => {
    it('check that customer can search for dress, select add to cart successfully', () => {
        browser.url('/index.php')
        expect(browser).toHaveTitle('My Store');

        // locator identifiers

        const signIn = $('a[title=\'Log in to your customer account\']');
        const searchBar = $('#search_query_top');
        const searchBtn = $('#searchbox > button');
        const sortByBtn = $('#selectProductSort > option:nth-child(3)');
        const blouse = $('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img');
        const quickView = $('#view_full_size > span');
        const close = $('#product > div.fancybox-wrap.fancybox-desktop.fancybox-type-image.fancybox-opened > div > a');
        const viewWhite = $('#thumb_6');
        const closeWhite = $('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a');
        const shareToFriend = $('#send_friend_button');
        const closeShareToFriend = $('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a');
        const quantity = $('#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up > span > i');
        const size = $('#group_1 > option:nth-child(3)');
        const selectColour = $('#color_11');
        const addToCart = $('#add_to_cart > button > span');
        const proceedToCheckOut = $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span');
        const proceedToCheckoutPay = $('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span');
        const myEmail = $('#email');
        const password = $('#passwd');
        const submitBtn = $('#SubmitLogin > span');
        const addComment = $('#ordermsg > textarea');
        const proceedToCheckoutPayment = $('#center_column > form > p > button > span');
        const terms = $('#cgv');
        const proceedToPayment = $('#form > p > button > span');
        const payByCheck = $('#HOOK_PAYMENT > div:nth-child(2) > div > p > a');
        const comfirmPayment = $('#cart_navigation > button > span');
        const orderComfirmation = $('#columns > div.breadcrumb.clearfix > span.navigation_page')


        // call actions

        signIn.click();
        searchBar.setValue('dress');
        searchBtn.click();
        $('#selectProductSort').selectByIndex(2);
        blouse.click();
        quickView.click();
        close.click();
        viewWhite.click();
        closeWhite.click();
        shareToFriend.click();
        closeShareToFriend.click();
        quantity.click();
        $('#group_1').selectByIndex(2);
        selectColour.click();
        addToCart.click();
        proceedToCheckOut.waitForDisplayed(3000);
        proceedToCheckOut.click();
        proceedToCheckoutPay.click();
        myEmail.setValue('maxtest433@gmail.com');
        password.setValue('Friday24');
        submitBtn.click();
        addComment.setValue('if i am not available, please leave item with my neighbour, thanks');
        proceedToCheckoutPayment.click();
        terms.click();
        proceedToPayment.click();
        payByCheck.click();
        comfirmPayment.waitForDisplayed(3000);
        comfirmPayment.click();
        expect(orderComfirmation).toBeDisplayed();





      })
})