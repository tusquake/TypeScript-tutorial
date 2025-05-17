// PRIMITIVE DATA TYPES

// 1. number: Represents numeric values (integers and floating-point numbers)
let ag: number = 25;
let price: number = 99.99;
console.log("Number Example:", ag, price);

// 2. string: Represents textual data
let nam: string = "Tushar";
let greeting: string = `Hello, ${nam}!`;
console.log("String Example:", greeting);

// 3. null: Represents the intentional absence of any value
let emptyValue: null = null;
console.log("Null Example:", emptyValue);

// 4. undefined: Represents a variable that has been declared but not assigned a value
let notAssigned: undefined;
console.log("Undefined Example:", notAssigned);

// 5. bigint: Represents large integers beyond the safe range of the number type
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log("BigInt Example:", bigNumber);

// 6. symbol: Represents a unique and immutable value
// let uniqueKey: symbol = Symbol("key");
// console.log("Symbol Example:", uniqueKey);

// NON-PRIMITIVE DATA TYPES

// 1. object: Represents a collection of key-value pairs
let person: { name: string; age: number } = { name: "Tushar", age: 25 };
console.log("Object Example:", person);

// 2. array: Represents a list of values
let numbe: number[] = [1, 2, 3, 4, 5];
console.log("Array Example:", numbe);

// 3. tuple: Represents an array with fixed types and length
let tupleExample: [string, number] = ["Tushar", 25];
console.log("Tuple Example:", tupleExample);

// 4. enum: Represents a set of named constants
enum Color {
    Red,
    Green,
    Blue,
}
let favoriteColor: Color = Color.Green;
console.log("Enum Example:", favoriteColor);

// 5. function: Represents a block of reusable code
let add: (a: number, b: number) => number = (a, b) => a + b;
console.log("Function Example (Addition):", add(5, 10));

// Function that always throws an error
function throwError(message: string): never {
    throw new Error(message);
}

// Example of exhaustive type-checking
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
    switch (shape) {
        case "circle":
            return Math.PI * 2 * 2; // Example for a circle
        case "square":
            return 4 * 4; // Example for a square
        default:
            // This ensures all cases are handled
            const _exhaustiveCheck: never = shape;
            throw new Error(`Unhandled shape: ${_exhaustiveCheck}`);
    }
}