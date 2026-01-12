
// interfaces 

interface chai {
    flavor: string,
    price: number
}

const masala: chai = {
    flavor: "massala",
    price: 24
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id:1, name:"groty"}
s.name = "qwerty"

console.log(s)

 

interface TeaMachine{
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("Start");
    },
    stop(){
        console.log("start")
    }
}

// index rating

interface ChaiRatings {
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.2
}

// interfaces can be double but they get merge

interface User{
    name:string
}

interface User {
    age: number
}


const u: User = {
    name: "Sudhir",
    age: 21
}

// interfaces can be extended

interface A {a: string}
interface B {b: string}

interface C extends A,B {
    
}