"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartPage = exports.LoginPage = void 0;
class LoginPage {
    constructor(user, pass) {
        this.userNameValue = user;
        this.passwordValue = pass;
    }
    userName() {
        console.log(this.userNameValue);
    }
    password() {
        console.log(this.passwordValue);
    }
    login() {
        this.userName();
        this.password();
        console.log('Logged in');
    }
}
exports.LoginPage = LoginPage;
class CartPage {
}
exports.CartPage = CartPage;
// const login = new LoginPage('USER1', 'Test@123')
// login.login()
//# sourceMappingURL=constructor.js.map