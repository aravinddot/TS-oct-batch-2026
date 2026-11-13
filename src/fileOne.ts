





export class SignUpPage {

    userValue: string
    passvalue: number

    constructor(userName: string, password: number) {
        this.userValue = userName
        this.passvalue = password
    }


    userName() {
        console.log(this.userValue);
    }


    passWord() {
        console.log(this.passvalue);
    }


    login() {
        this.userName()
        this.passWord()
        console.log('User Logged in');
    }


}