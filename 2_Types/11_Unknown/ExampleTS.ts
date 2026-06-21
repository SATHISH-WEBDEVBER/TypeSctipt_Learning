// Unknown Example - TypeScript

// Creating a variable with unknown datatype.
// unknown datatype-உடன் variable உருவாக்கப்படுகிறது.
let userData1: unknown = "Sathish";

// Display the value.
// value-ஐ காட்டுகிறது.
console.log(userData1);

// Assigning a number value.
// number value assign செய்யப்படுகிறது.
userData1 = 100;

console.log(userData1);

// TypeScript prevents direct operations on unknown values.
// unknown value-ஐ நேரடியாக பயன்படுத்த TypeScript அனுமதிக்காது.

// let userName: string = userData1;

// மேலுள்ள வரியை uncomment செய்தால் type error வரும்.