"use strict";
// // dataTypes in TypeScript
// let automation: string = "playwright"
// automation = "cypress"
// console.log(automation)
// let value: number | string | boolean = 30
// value = true
// console.log(value)
// let ispopular = true
// ispopular = false
// console.log(ispopular)
// let nullValue: null | string | number = null
// nullValue = 12
// console.log(nullValue)
// let undefinedValue: undefined | string = undefined
// undefinedValue = "playwright"
// console.log(undefinedValue)
// // don't use any - it disables type safety
// let valueOne: any = 10
// valueOne = "string"
// valueOne = []
// valueOne = {}
// valueOne = true
// console.log(valueOne)
// unknown - safer than any data type
let valueTwo = "playwright";
valueTwo = "cypress";
if (typeof valueTwo === "string") {
    console.log(valueTwo.toUpperCase());
}
//# sourceMappingURL=dataTypes.js.map