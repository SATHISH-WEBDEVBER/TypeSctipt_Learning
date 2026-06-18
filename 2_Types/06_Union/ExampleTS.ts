// Union Type Example - TypeScript

// Creating a variable that accepts both number and string.
// number அல்லது string value-ஐ ஏற்கும் variable உருவாக்கப்படுகிறது.
let userId1: number | string = 101;

// Display the current value.
// தற்போதைய மதிப்பை காட்டுகிறது.
console.log(userId1);

// Assigning a string value.
// string value assign செய்யப்படுகிறது.
userId1 = "EMP101";

console.log(userId1);

// TypeScript prevents assigning unsupported datatypes.
// அனுமதிக்கப்படாத datatype-ஐ TypeScript தடுக்கிறது.

// userId = true;

// Uncommenting the above line will produce a type error.
// மேலுள்ள வரியை uncomment செய்தால் type error வரும்.
