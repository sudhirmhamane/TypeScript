//  Objects in TypeScript

// An object in TypeScript represents a collection of related data.

// TypeScript allows you to define the structure of an object using types or interfaces.

// Each property in an object has a fixed type, which improves safety.

// Objects help group data logically, like user details or settings.

// TypeScript checks objects at compile time to prevent missing or wrong properties.

// Objects make large applications more organized and readable.

const chai = {
  name: "green tea",
  price: 20,
  isHot: true,
};

// in typescript behind the scene these value infer in below value

// {
//     name:string,
//     price: number;
//     isHot: boolean
// }

// we can define types like this

let tea: {
  name: string;
  size: string;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  size: "Large",
  isHot: true,
};

// elice object

type Tea = {
  name: string;
  price: number;
  size: string;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "adraktea",
  price: 23,
  size: "small",
  ingredients: ["ginger", "sugar", "chaipati"],
};

type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: "500ml",
};

let bigCup = {
  size: "100ml",
  material: "Steel",
};
smallCup = bigCup;

// user system

type User = {
  name: string;
  password: string;
};

const u: User = {
  name: "sudhir",
  password: "123",
};

// datatype splitout

type Item = {
  name: string;
  quality: number;
};
type Address = {
  street: string;
  pin: number;
};

type order = {
  id: string;
  items: Item[];
  address: Address;
};

// update object values

type TeaChai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<TeaChai>) => {
  console.log("Updating chai with", updates);
};

updateChai({ price: 324 });
updateChai({ isHot: true });
updateChai({});


type CoffeOrder = {
    name?: string,
    quantity?:number
}

const placeOrder = (order: Required<CoffeOrder>) => {
    console.log(order)
}

placeOrder({
    name: "Green Coffee",
    quantity: 3
}) 