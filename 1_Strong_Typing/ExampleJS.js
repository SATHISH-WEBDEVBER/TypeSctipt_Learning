// A variable acts like a box that can store any type of value.
// ஒரு variable எந்த வகையான மதிப்பையும் சேமிக்கக்கூடிய ஒரு பெட்டி போன்றது.
var age = 25;
console.log("Age:", age);
// Expected Output: Age: 25
// எதிர்பார்க்கப்படும் வெளியீடு: Age: 25

// JavaScript allows putting a string value into a number box.
// JavaScript ஒரு number பெட்டியில் string மதிப்பை வைக்க அனுமதிக்கிறது.
age = "Twenty Five";
console.log("Updated Age:", age);
// Expected Output: Updated Age: Twenty Five
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Age: Twenty Five

// A function is like a machine expecting two numbers to calculate.
// ஒரு function என்பது கணக்கிடுவதற்கு இரண்டு numbers-ஐ எதிர்பார்க்கும் இயந்திரம் போன்றது.
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Passing correct values works as expected.
// சரியான மதிப்புகளை அனுப்பும்போது எதிர்பார்த்தபடி செயல்படுகிறது.
console.log("Total:", calculateTotal(10, 5));
// Expected Output: Total: 50
// எதிர்பார்க்கப்படும் வெளியீடு: Total: 50

// Passing text to the math function causes an invalid output (NaN) silently.
// கணக்கீட்டு function-க்கு உரையை அனுப்பும்போது மறைமுகமாக தவறான விடை (NaN) கிடைக்கிறது.
console.log("Invalid Total:", calculateTotal("ten", 5));
// Expected Output: Invalid Total: NaN
// எதிர்பார்க்கப்படும் வெளியீடு: Invalid Total: NaN

// An object is like an ID card with a strict layout.
// ஒரு object என்பது குறிப்பிட்ட அமைப்பைக் கொண்ட அடையாள அட்டை போன்றது.
var student = {
    id: 101,
    name: "Sathish"
};

// Accessing a misspelled property returns undefined without warning.
// எழுத்துப்பிழை கொண்ட property-ஐ அணுகும்போது warning இன்றி undefined கிடைக்கும்.
console.log("Student Roll Number:", student.rollNum);
// Expected Output: Student Roll Number: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Student Roll Number: undefined