



// OOP - Object Oriented Programming

// 1) Class
// 2) constructor
// 3) this keyword
// 4) encapsulation
// 5) inheritance
// 6) polymorphism
// 7) abstraction
// 8) access modifiers
// 9) Static members


// import & export

import * as MultiClass from './constructor'

class HomePage {


    value = "playwright"



    printOne() {
        const value = 'Cypress'
        console.log(value)
    }

    validate() {
        console.log("validating...");

    }


    userLogin() {
        const log = new MultiClass.LoginPage('Admin', 'Test@123')
        log.login()

    }


}


const home = new HomePage()

home.userLogin()

// home.validate()
// console.log(home.value)
// home.printOne()



// export function print() {

// }
