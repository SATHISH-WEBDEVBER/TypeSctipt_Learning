// JavaScript does not lock types, even after a variable is initialized with a value.
// JavaScript ஒரு variable-க்கு தொடக்க மதிப்பு வழங்கப்பட்டாலும், அதன் வகையைப் பூட்டுவதில்லை.
var price = 100;
console.log("Type of price:", typeof price);
// Expected Output: Type of price: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type of price: number

// JavaScript allows changing the datatype freely.
// JavaScript அதன் வகையை எளிதாக மாற்ற அனுமதிக்கிறது.
price = "One Hundred";
console.log("Type of price after change:", typeof price);
// Expected Output: Type of price after change: string
// எதிர்பார்க்கப்படும் வெளியீடு: Type of price after change: string
