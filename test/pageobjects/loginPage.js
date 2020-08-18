class LoginPage {

    //locator identifiers

    get myEmail () {return $('input#email')}
    get myPassword () {return $('input#passwd')}
    get logInBtn () {return $('button#SubmitLogin > span')}
    get signOutBtn () {return $('')}

    //method declarations

    login(email, password) {
        this.myEmail.setValue(email)
        this.myPassword.setValue(password)
        this.logInBtn.click()
    }
}
      module.exports = new LoginPage();