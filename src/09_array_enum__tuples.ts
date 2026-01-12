// 🔹 Arrays in TypeScript

// Arrays are used to store multiple values of the same type.

// TypeScript ensures all elements follow the defined type.

// They improve consistency and reduce runtime errors.

// Arrays are useful for lists like users, products, or records.

// TypeScript provides better autocomplete and safety for array operations.

const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [19, 45, 55];

const rating:Array<number> = [
    4.5,
    4,5
]

// Array as object

type chai = {
    name:string,
    price:number
}

const menu:chai[] = [
    {name:"Masala", price: 12},
    {name:"adrak", price: 123}
]


// readonly array => in these array we can just define but cannot modify.

const cities: readonly string[] = [
    "Delhi",
    "Pune"
]

// multidimensional arrays:

const table: number[][] = [
    [1,2,3],
    [4,5,6]
]



// Tuples in TypeScript:

// every values in tuple inend cames in arrays

// Tuples are fixed-length arrays with fixed types for each position.

// Each element has a specific meaning and type.

// They are useful when order matters, like coordinates or key–value pairs.

// Tuples provide stricter control compared to normal arrays.

// They help represent structured data compactly.

let chaiTuple: [string,number];
chaiTuple = ["Masala", 23]
chaiTuple = ["34", 34]

let userInfo: [string, number, boolean?]
userInfo = ["Sudhir", 122, true]
userInfo = ["raj", 32]

// readonly tuples:

const location: readonly [number, number] = [28.66, 32.22]

// named tuples

 const namedTuple:[name:string, price:number] = ["sudhir", 34]


// ---------------

// enum in TypeScript

// it restrict the user to enter or choose the value by own

// it provide certain data or values available in the software and that data only use can choose or used.

// 🔹 Enums in TypeScript

// Enums define a set of named constant values.

// They make code more readable and meaningful instead of using raw values.

// Enums help avoid magic numbers or strings.

// Used for fixed options like roles, status, or directions.

// They improve maintainability and reduce mistakes.

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.MEDIUM

enum Chaitype {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: Chaitype){
    console.log(`Making: ${type} chai sir..`);
}

makeChai(Chaitype.MASALA)

// constant enum

const enum Sugar {
    LOW = 1,
    MEDIM = 2,
    HIGH =3
}
const s = Sugar.HIGH