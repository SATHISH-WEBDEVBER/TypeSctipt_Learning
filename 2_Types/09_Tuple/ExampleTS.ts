// Tuple Example - TypeScript

// Creating a tuple with fixed datatypes.
// நிர்ணயிக்கப்பட்ட datatype-களுடன் tuple உருவாக்கப்படுகிறது.
let employee: [number, string, boolean] = [
  101,
  "Sathish",
  true
];

// Display the tuple.
// tuple-ஐ காட்டுகிறது.
console.log(employee);

// TypeScript prevents assigning an invalid datatype.
// தவறான datatype assign செய்ய TypeScript அனுமதிக்காது.

// employee[0] = "EMP101";

// Uncommenting the above line will produce a type error.
// மேலுள்ள வரியை uncomment செய்தால் type error வரும்.