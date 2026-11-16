"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOne_1 = require("./fileOne");
class ProductPage extends fileOne_1.SignUpPage {
    constructor(userNameVal, passwordValue) {
        super(userNameVal, passwordValue);
        // this.value = "playwright"
    }
    userLogin() {
        this.login();
    }
}
const product = new ProductPage('Admin', 1234);
product.login();
//# sourceMappingURL=fileTwo.js.map