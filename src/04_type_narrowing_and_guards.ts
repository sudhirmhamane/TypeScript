function getChai(kind:string | number){
    if(typeof kind == 'string'){
        return `Making ${kind} chai..` 
        // here the value is always string 
    }
    return `chai order: ${kind}`
    // here the value is always number 

}

console.log(getChai(123))


// finding out the truthyness.

function serverChai(msg?: string){
    if(msg) {
        return `Serving ${msg}` // if the message is given so this block of code will execute.
    }
    return `Serving Masala chai..` // else this part will be return were the default statements present.
}

console.log(serverChai("normal chai"))
// output -> Serving normal chai.

console.log(serverChai())
// output -> Serving Masala chai..


function orderChai(size: "Small" | "Medium" | "Large" | number){
    if(size === "Small"){
        return `small cutting chai..`
    }
    if(size === "Medium" || size === "Large") {
        return `make extra chai..`
    }
    return `chai order #${size}`
}

class kulhadChai {
    serve(){
        return `Serving kulhad chai..`;
    }
}

class Cutting {
    serve(){
        return `Serving cutting chai..`
    }
}

function serve(chai: kulhadChai | Cutting){
    if(chai instanceof kulhadChai) {
        return chai.serve();
    }
}

type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number"

    )
}

function serveOrder(item:chaiOrder | string) {
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala"; spiceLevel: number}
type ElaichiChai = {type: "elaichi"; amount: number}
type GingerChai = {type: "ginger"; limit: number}

type Chai = MasalaChai | ElaichiChai | GingerChai


function MakeChai(order:Chai) {
    switch (order.type) {
        case "masala":
            return `Making Masala chai `
            break;
        case "elaichi":
            return `Making elaichi chai `
            break;
        case "ginger":
            return `Making ginger chai `
            break;
    }
}


/*


In Typescript sometimes a variable can be more that one type so the value can be number or string.

at that time the tsc get confused for that type checking is required.


Type Narrowing -> it makes the type more specific..

Type Guard -> the check you use to identify the type


## Common Type Guards 

    Checking type of value
    Checking property exists
    Checking instance of a class
    Using custom checking functions

*/