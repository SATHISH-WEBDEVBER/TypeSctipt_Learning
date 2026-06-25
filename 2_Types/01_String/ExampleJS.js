// A variable acts like a box that can store any type of value.
// ஒரு variable எந்த வகையான மதிப்பையும் சேமிக்கக்கூடிய ஒரு பெட்டி போன்றது.
var message = "Hello";
console.log("Message:", message);
// Expected Output: Message: Hello
// எதிர்பார்க்கப்படும் வெளியீடு: Message: Hello

// JavaScript allows putting a number value into a string box.
// JavaScript ஒரு string பெட்டியில் number மதிப்பை வைக்க அனுமதிக்கிறது.
message = 100;
console.log("Updated Message:", message);
// Expected Output: Updated Message: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Message: 100

// In JavaScript, changing the type can break string-specific features like toUpperCase.
// JavaScript-ல், type-ஐ மாற்றுவது toUpperCase போன்ற string-க்குரிய வசதிகளை செயலிழக்கச் செய்யும்.
try {
    console.log(message.toUpperCase());
} catch (error) {
    console.log("Error caught:", error.message);
    // Expected Output: Error caught: message.toUpperCase is not a function
    // எதிர்பார்க்கப்படும் வெளியீடு: Error caught: message.toUpperCase is not a function
}
