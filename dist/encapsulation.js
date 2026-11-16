"use strict";
class Encap {
    constructor() {
        this.valueOne = "playwright";
        this.valueTwo = "typescript";
        this.valueThree = "Javascript";
    }
    getValue() {
        console.log(this.valueOne);
    }
}
// const e = new Encap()
// e.
class ChildEncap extends Encap {
    validate() {
        this.getValue();
        console.log(this.valueTwo);
    }
}
//# sourceMappingURL=encapsulation.js.map