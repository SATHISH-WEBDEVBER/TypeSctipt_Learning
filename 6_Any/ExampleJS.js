// JavaScript operates dynamically, allowing variables to hold any type of value.
// JavaScript மாறும் தன்மையுடன் செயல்படுவதால், variables எந்தவொரு மதிப்பையும் பெற அனுமதிக்கிறது.
var wildcard = 100;
console.log("Value:", wildcard);
// Expected Output: Value: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Value: 100

wildcard = "Hello";
console.log("Updated Value:", wildcard);
// Expected Output: Updated Value: Hello
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Value: Hello

// JavaScript allows calling non-existent properties on variables, returning undefined.
// இல்லாத பண்புகளை அணுகும்போது JavaScript எச்சரிக்கையின்றி undefined மதிப்பைத் தரும்.
console.log("Property Access:", wildcard.secretKey);
// Expected Output: Property Access: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Property Access: undefined
