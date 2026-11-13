"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpPage = void 0;
class SignUpPage {
    constructor(userName, password) {
        this.userValue = userName;
        this.passvalue = password;
    }
    userName() {
        console.log(this.userValue);
    }
    passWord() {
        console.log(this.passvalue);
    }
    login() {
        this.userName();
        this.passWord();
        console.log('User Logged in');
    }
}
exports.SignUpPage = SignUpPage;
//# sourceMappingURL=fileOne.js.map