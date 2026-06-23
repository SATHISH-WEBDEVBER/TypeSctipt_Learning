// Beginner: TypeScript enforces the declared datatype of a variable.
// பிகினர்: TypeScript-ல் variable-க்கு குறிக்கப்பட்ட datatype-ஐ மட்டுமே பயன்படுத்த முடியும்.
var age: number = 25;
console.log("Type of age:", typeof age);
// Expected Output: Type of age: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type of age: number

// Attempting to reassign a string will cause a compilation error.
// string-ஐ assign செய்ய முயற்சித்தால் compilation error ஏற்படும்.
// age = "Twenty Five";

// Intermediate: TypeScript enforces function parameter datatypes to avoid calculation bugs.
// இன்டர்மீடியட்: கணக்கீட்டு பிழைகளைத் தடுக்க function parameters-ன் datatypes-ஐ TypeScript கட்டாயப்படுத்துகிறது.
function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}
console.log("Result with correct types:", calculateTotal(10, 5));
// Expected Output: Result with correct types: 50
// எதிர்பார்க்கப்படும் வெளியீடு: Result with correct types: 50

// Passing incorrect types will cause a compilation error.
// தவறான types-ஐ அனுப்ப முயற்சித்தால் compilation error ஏற்படும்.
// console.log(calculateTotal("ten", 5));

// Advanced: TypeScript enforces strict object structures, preventing spelling mistakes and missing properties.
// அட்வான்ஸ்டு: எழுத்துப்பிழைகள் மற்றும் விடுபட்ட பண்புகளைத் தடுக்க strict object அமைப்பை TypeScript கட்டாயப்படுத்துகிறது.
interface User {
    id: number;
    name: string;
}

var user: User = {
    id: 101,
    name: "Sathish"
};

// Accessing misspelled properties or adding undefined properties causes a compilation error.
// எழுத்துப்பிழை கொண்ட அல்லது வரையறுக்கப்படாத property-ஐ அணுகும்போது compilation error ஏற்படும்.
// console.log("User email:", user.emial);