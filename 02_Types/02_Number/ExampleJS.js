// A variable acts like a calculator memory slot that can store any type.
// ஒரு variable எந்த வகையையும் சேமிக்கக்கூடிய கால்குலேட்டர் மெமரி ஸ்லாட் போன்றது.
var price = 100;
console.log("Price:", price);
// Expected Output: Price: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Price: 100

// JavaScript allows putting a string value into a number variable.
// JavaScript ஒரு number variable-ல் string மதிப்பை வைக்க அனுமதிக்கிறது.
price = "one hundred";
console.log("Updated Price:", price);
// Expected Output: Updated Price: one hundred
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Price: one hundred

// Performing math calculations with strings causes unexpected NaN results silently.
// உரையுடன் கணிதக் கணக்கீடுகளைச் செய்யும்போது மறைமுகமாக NaN பிழை முடிவு கிடைக்கிறது.
var quantity = 5;
var total = price * quantity;
console.log("Total:", total);
// Expected Output: Total: NaN
// எதிர்பார்க்கப்படும் வெளியீடு: Total: NaN
