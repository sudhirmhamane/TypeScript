// Generics are the templetes which makes our code more reuseble.

// If we write a function for one type only, we must repeat it for every type.


// for string
function getValueString(value: string) {
  return value;
}

// for number
function getValueNumber(value: number) {
  return value;
}

// using the simple method generics

function getValue<T>(value: T): T {
    return value;
}

// using generics

getValue<string>("Sudhir")
getValue<number>(10);
getValue<boolean>(true);

// Generics keep TypeScript strict and safe.


// Generic with array

// function getFirst<T>(arr: T[]): T {
//     return arr[0];
// }

// above code is written in correct but the tsc is showing the error

// tsc things if arr is empty

// arr[0] will be undefined, but our function it will always return T and undefine is not guaranteed to be T


// This usually happens when strictNullChecks is ON (default in modern TS).

// so the correct way is

function array<T>(arr: T[]): T | undefined {
    return arr[0];
}


/*

🔹 strictNullChecks

    TypeScript does not allow null or undefined unless you explicitly mention them.

    This prevents runtime errors.

    Because of this, arr[0] can be undefined, so TS shows an error.

🔹 Non-empty array types

    Normal arrays can be empty.

    Non-empty array types guarantee at least one element.

    This tells TypeScript a value will always exist, so no error.

🔹 Real-world API data example (idea)

    API responses may return empty lists.

    TypeScript forces you to handle that safely.

    This avoids crashes when data is missing.

*/


function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("Sudhri")
wrapInArray(34)
wrapInArray({first: "rtrtr"})


// interface

interface Box<T>{
    content: T
}

const newBox: Box<number> = {
    content:10
}

interface ApiPromise<T>{
    status:number,
    data:T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data:{flavor:"Sudhirvala"}
}