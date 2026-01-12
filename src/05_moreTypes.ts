// type Assertion

let res: any = "43";

let numericLength: number = (res as string).length;

type Book = {
    name: string
};

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject); 


// unknown and any

let value: any;

value = 12
value = "23"
value = 23.4
value = "sudhir" // it will not give the error and execute the program

console.log(value.toUpperCase())  


let newValue: unknown;

newValue = 12;
newValue = "Str"
newValue = [1,2,3]
newValue = "sharma"

// console.log(newValue.toUpperCase());

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error)
}

const data:unknown = "chao gaho"
const strData: string = data as string


type Role = "admin" | "user" ;

function redirBOR(role: Role): void{
    if(role === "admin"){
        console.log("return ro admin")
        return
    }
    if(role === "user"){
        console.log("return ro user")
        return
    }
    role;
}