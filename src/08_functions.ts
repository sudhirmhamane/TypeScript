// 🔹 Functions in TypeScript

// Functions in TypeScript define reusable logic.

// TypeScript allows you to specify types for parameters and return values.

// This ensures functions receive the correct inputs and return the expected output.

// Functions help catch errors before runtime.

// Typed functions improve code clarity and maintainability.

// They are especially useful in APIs, business logic, and large projects.

function makeChai(type:string, cups:number) {
    console.log(`making ${cups} cups of ${type} chai..`)
}

makeChai("masala",4)


// in this fun price of chai get writing after the parenthess we get know the return type.

function getChaiPrice():number{
    return 23;
}

function makeOrder(order:string){
    if(!order) return null
    return order
}

function logChai(): void {
    console.log("Chai is making.")
}

function createTea(order:{
    type:string,
    sugar:number,
    size:"small" | "large "
}):number {
    return 4
}