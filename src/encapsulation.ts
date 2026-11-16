


class Encap {

    private valueOne: string // inside class only
    protected valueTwo: string // inside class and subclasses
    readonly valueThree: string // cannot be modified


    constructor() {
        this.valueOne = "playwright"
        this.valueTwo = "typescript"
        this.valueThree = "Javascript"

    }

    protected getValue() {
        console.log(this.valueOne)
    }
}


// const e = new Encap()

// e.


class ChildEncap extends Encap {


    validate() {
        this.getValue()
        console.log(this.valueTwo)
    }



}