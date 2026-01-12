// An interface is a blueprint that defines the structure of an object.

// It specifies what properties and methods must exist and their types.

// Interfaces help TypeScript enforce type safety in objects and classes.

// They make code clear, predictable, and easier to maintain.

// Interfaces act like a contract: whoever uses it must follow the rules.

// They are mainly used for objects, classes, and function shapes.

// Interfaces can be extended, allowing reuse and better organization.

// They improve editor autocomplete and error checking.

// Interfaces exist only at compile time, not in JavaScript output.

// Best used in large projects, APIs, and team-based code.

type Chaiorder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: Chaiorder) {
  console.log(order);
}

function serveChai(order: Chaiorder) {
  console.log(order);
}



interface TeaRecipe {
    water: number;
    milk: number;
}

// this MasalaChai can implements the properties of TeaRecipe class.

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface cupSize {
    size: "Small" | "Larger" 
} 

class Chai implements cupSize {
    size: "Small" | "Larger" = "Small"
}


// this is called as literal values because here we haven't used the datatypes and all.
type TeaType = "masala" | "eliachi" | "soda"

function orderChai(t: TeaType){
    console.log(t)
}


type Chai1 = {tleave: number}
type Chai2 = {masala: number}

type masalaChai = Chai1 & Chai2 

const cup: masalaChai = {
    tleave: 2,
    masala: 3
}


type User = {
    username: string,
    bio?: string 
}

const user1: User = {
    username:"Hitesh"
}

const user2: User = {
    username:"Sudhir",
    bio: "my age and name is 21 and sudhir"
}

console.log(user1)

type Config = {
    readonly appName:string
    version: number
}

const cfg: Config = {
    appName: "sudhirji",
    version: 1.2
}

cfg.version = 34

console.log(cfg)