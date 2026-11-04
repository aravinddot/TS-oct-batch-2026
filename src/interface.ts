
// interface


interface Tool {
    readonly name: string,
    age: number,
    company: string,
    country?: string
}




const automation: Tool = {
    name: "playwright",
    age: 6,
    company: "microsoft"

}

//automation.name = "cypress" // Error: Cannot assign to 'name' because it is a read-only property.