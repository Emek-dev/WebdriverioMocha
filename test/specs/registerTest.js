//
// var faker = require('faker');
// const expectChai = require('chai').expect;
//
// describe('register', () => {
//     var randomFirstName = faker.name.firstName(); // Rowan
//     var randomLastName = faker.name.lastName(); // Luke
//     var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//
//
//     it('check that user can register successfully', () => {
//         browser.url('/index.php')
//         expect(browser).toHaveTitle('My Store');
//
//         // locators identifiers
//
//         const signIn = $('#header > div.nav > div > div > nav > div.header_user_info > a');
//         const createEmail = $('#email_create');
//         const createAnAccountBtn = $('#SubmitCreate > span');
//         const genderBtn = $('#id_gender1');
//         const firstName = $('#customer_firstname');
//         const lastName = $('#customer_lastname');
//         const password = $('#passwd');
//         const daysBtn = $('#days > option:nth-child(5)');
//         const monthBtn = $('#months > option:nth-child(7)');
//         const yearBtn = $('#years > option:nth-child(4)');
//         const checkBox = $('#newsletter');
//         const tickBox = $('#optin');
//         const addFirstName = $('#firstname');
//         const addLastName = $('#lastname');
//         const companyName = $('#company');
//         const addressLn1 = $('#address1');
//         const addressLn2 = $('#address2');
//         const cityName = $('#city');
//         const state = $('#id_state > option:nth-child(4)');
//         const postCode = $('#postcode');
//         const country = $('#id_country > option:nth-child(2)');
//         const addInfo = $('#other');
//         const mobileNo = $('#phone_mobile');
//         const registerBtn = $('#submitAccount > span');
//         const registrationSuccessful = $('#center_column > p');
//
//
//
//
//         // call the actions
//
//         signIn.click();
//         createEmail.waitForDisplayed(5000);
//         createEmail.setValue(randomEmail);
//         createAnAccountBtn.click();
//         genderBtn.click();
//         firstName.setValue(randomFirstName);
//         lastName.setValue(randomLastName);
//         browser.pause(5000);
//         password.setValue('Q12345T');
//         $('#days').selectByIndex(4);
//         $('#months').selectByIndex(6);
//         $('#years').selectByIndex(3);
//         checkBox.click();
//         tickBox.click();
//         addFirstName.setValue('emeks');
//         addLastName.setValue('ekebs');
//         companyName.setValue('Don puzzo ent');
//         addressLn1.setValue('P.O. Box 50');
//         addressLn2.setValue('London way');
//         cityName.setValue('Los Angeles');
//         $('#id_state').selectByIndex(5);
//         postCode.setValue('00000');
//         $('#id_country').selectByIndex(1);
//         addInfo.setValue('until further notice');
//         addInfo.setValue('until further notice');
//         mobileNo.setValue('0754328765');
//         registerBtn.click();
//         expect(registrationSuccessful).toBeDisplayed();
//
//         browser.pause(5000);
//
//
//     })
// })