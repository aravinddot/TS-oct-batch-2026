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
// let valueTwo: unknown = "playwright"
// valueTwo = "cypress"
// if(typeof valueTwo === "string") {
//     console.log(valueTwo.toUpperCase())
// }
const arr = ["playwright", "cypress", "selenium", 12, true, undefined];
const num = [1, 2, 3, 4, 5, "str"];
// [number, number, number, number, number, string] 
// const obj: Object = {
//     name: "playwright",
//     version: 1,
//     isPopular: true,
//     country: "USA"
// }
const obj = {
    name: "playwright",
    version: 1,
    isPopular: true,
    country: "USA"
};
// function print(): void {
//     console.log("playwright")
// }
// function print(): string {
//     return "playwright"
// }
// function print(): number {
//     return 11
// }
function getValues(a, b) {
    return a + b;
}
getValues(5, 10);
//# sourceMappingURL=dataTypes.js.map