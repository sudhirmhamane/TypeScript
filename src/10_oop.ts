class Chai {
    flavour: string;
    // price: number

    // in a class it is recommonded that create a constructor

    // constructor(flavour:string, price: number) {
    //     this.flavour = flavour
    //     this.price = price
    // }
    constructor(flavour:string) {
        this.flavour = flavour
        console.log(this)
    }
}

// this always point towards which created the object.
// this refers to the new object.
const masalaChai = new Chai("ginger")

// masalaChai.flavour = "jrro chai"
// masalaChai.price = 24

// access modifier

class ChaiLover {
    public flavour: string = "Masala"


    private secretIng = "pati"
    reveal(){ // as the secretIng is private so it cannot access by outside the class.
        return this.secretIng
    }
     
}
const ch = new ChaiLover()
console.log(ch.reveal())


// protected

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName
    }
}
 
new Branch().getName


// readonly property -> we can assign the values and cannot change.

class cup {
    readonly capacity: number = 200

    constructor(capacity:number){
        this.capacity = capacity
    }
}


// control gates or we can say getters and setters

class ModernChai {
    private _sugar = 2

    // by this we can get the values 
    get sugar(){
        return this._sugar
    }

    // by this we can set the values

    set sugar(value){
        if(value > 5) throw new Error("Too sugar");
        this._sugar = value
    }
}

const d = new ModernChai()
console.log(d.sugar)

// static keyword

class DoChai {
    static shopName = "Chaicode caffffuyyy"
    constructor(public flavour: string){}
}
console.log(DoChai.shopName)


// in the abstact class the implementations are less.

abstract class Drink {
    abstract make():void
}

class mychai extends Drink{
    make(): void {
        console.log("Making tea..")
    }
}

class Heater {
    heat(){

    }
}

class ChaiMaker{
    constructor(private heater: Heater){}
    make(){
        this.heater.heat
    }
}

// | Inheritance       | Composition               |
// | ----------------- | ------------------------- |
// | IS-A relationship | HAS-A relationship        |
// | Uses `extends`    | Uses objects inside class |
// | Tightly coupled   | Loosely coupled           |
// | Less flexible     | More flexible             |
// | Harder to modify  | Easier to modify          |
