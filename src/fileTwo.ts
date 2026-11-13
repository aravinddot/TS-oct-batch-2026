
import { SignUpPage } from './fileOne'


class ProductPage extends SignUpPage {


    constructor(userNameVal: string, passwordValue: number) {
        super(userNameVal, passwordValue)
        // this.value = "playwright"
    }


    userLogin() {
        this.login()
    }



}

const product = new ProductPage('Admin', 1234)

product.login()