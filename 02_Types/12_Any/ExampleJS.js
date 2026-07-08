// JavaScript behaves like the "any" type by default, allowing any assignment and property access.
// JavaScript இயல்பாகவே "any" வகையைப் போல செயல்படுகிறது, எந்த ஒதுக்கீட்டையும் சாவியையும் அனுமதிக்கிறது.
var wildCard = 100;
console.log("Value:", wildCard);
// Expected Output: Value: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Value: 100

// We can assign a string to it.
// நாம் இதில் string மதிப்பை ஒதுக்கலாம்.
wildCard = "Hello";
console.log("Updated Value:", wildCard);
// Expected Output: Updated Value: Hello
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Value: Hello

// We can call non-existent properties on it, returning undefined or throwing errors.
// இல்லாத பண்புகளை அணுகும்போது, undefined திரும்பும் அல்லது பிழைகள் ரன்டைமில் ஏற்படும்.
console.log("Non-existent Property:", wildCard.secretKey);
// Expected Output: Non-existent Property: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Non-existent Property: undefined