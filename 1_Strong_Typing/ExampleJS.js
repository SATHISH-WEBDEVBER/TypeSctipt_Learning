// Beginner: JavaScript allows variables to change types dynamically.
// பிகினர்: JavaScript-ல் variable-ன் datatypes-ஐ எளிதாக மாற்றிக்கொள்ளலாம்.
var age = 25;
console.log("Type of age:", typeof age);
// Expected Output: Type of age: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type of age: number

age = "Twenty Five";
console.log("Type of age after change:", typeof age);
// Expected Output: Type of age after change: string
// எதிர்பார்க்கப்படும் வெளியீடு: Type of age after change: string

// Intermediate: Functions in JavaScript accept any datatype, causing unexpected outputs.
// இன்டர்மீடியட்: JavaScript function-கள் எந்த datatype-ஐயும் ஏற்கும், இதனால் எதிர்பாராத விடைகள் வரலாம்.
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log("Result with correct types:", calculateTotal(10, 5));
// Expected Output: Result with correct types: 50
// எதிர்பார்க்கப்படும் வெளியீடு: Result with correct types: 50

console.log("Result with incorrect types:", calculateTotal("ten", 5));
// Expected Output: Result with incorrect types: NaN
// எதிர்பார்க்கப்படும் வெளியீடு: Result with incorrect types: NaN

// Advanced: JavaScript allows adding or changing object properties without structure enforcement.
// அட்வான்ஸ்டு: JavaScript-ல் object அமைப்பை கட்டுப்படுத்தாமல் புதிய பண்புகளைச் சேர்க்கவோ மாற்றவோ முடியும்.
var user = {
    id: 101,
    name: "Sathish"
};
// Accessing a misspelled property returns undefined without warning.
// எழுத்துப்பிழை கொண்ட property-ஐ அணுகும்போது warning இன்றி undefined கிடைக்கும்.
console.log("User email:", user.emial);
// Expected Output: User email: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: User email: undefined