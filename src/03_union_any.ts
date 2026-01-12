let sub :string | number = "1M"
// by using the sign '|' union we can use the one or more datatypes in ones.

sub = 23
console.log(sub)

sub = "50M";
console.log(sub)


//  any in typescript

// any = You allow anything

let value: any;
value = 10;
value = "hello";
// value = true;
// value = {};

console.log(value)


/* 

any means “turn off TypeScript checking” for that variable.

It allows assigning any type: number, string, boolean, object, etc.

It makes the variable behave like normal JavaScript.

TypeScript will not show errors even if the value is wrong.

It is powerful but risky because it can cause runtime errors.

It removes type safety, so bugs become harder to catch early.

Use it only when the type is completely unknown or temporary.

Avoid using any in real or production projects.

Prefer safer options like specific types, unions, or unknown.

Good for quick testing, bad for long-term clean code.

*/