
// Tuples

// 1) fixed length
// 2) fixed types for each element


const arrOne: [string, number, boolean, string, string, undefined, string, number] = ["playwright", 6, true, "cypress", "selenium", undefined, "abc", 22]


const arrTwo: (string | number | boolean | undefined)[] = ["playwright", 6, true, "cypress", "selenium", undefined, "abc", 22]


console.log(arrOne)
console.log(arrTwo)