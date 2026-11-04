

type arrType = [string, number, boolean, string, string, undefined, string, number, string]


const tupleArr: arrType = ["playwright", 6, true, "cypress", "selenium", undefined, "abc", 22, "str"]



type automationType = {
    readonly name: string,
    age: number,
    company: string,
    country?: string
}


const automationObj: automationType = {
    name: "playwright",
    age: 6,
    company: "microsoft",

}


const automationTwo : automationType= {
    name: "cypress",
    age: 5,
    company: "google",
    country: "USA"
}

//automationTwo.name = "seleinum"


// union type

type status = "active" | "inactive" | "pending"


const currentStatus: status = "pending"


// intersection type


type one = {name: string}

type two = {age: number}

type intersectionType = one & two


const  firstRes: one = {
    name: "John",
}

const secondRes: two = {
    age: 30
}

const thirdRes: intersectionType = {
    name: "John",
    age: 30
}