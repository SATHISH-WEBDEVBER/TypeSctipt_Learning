// TypeScript locks the variable to only accept numeric values.
// TypeScript எண் மதிப்புகளை மட்டுமே ஏற்கும் வகையில் variable-ஐ பூட்டுகிறது.
var price: number = 100;
console.log("Price:", price);
// Expected Output: Price: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Price: 100

// Attempting to assign a string to a number variable causes an error.
// number variable-க்கு string மதிப்பை வழங்க முயற்சித்தால் பிழை ஏற்படும்.
// price = "one hundred";

// TypeScript ensures safe math calculations by checking types at compile time.
// கம்பைல் நேரத்திலேயே சரிபார்ப்பதன் மூலம் பாதுகாப்பான கணிதக் கணக்கீட்டை TypeScript உறுதி செய்கிறது.
var quantity: number = 5;
var total: number = price * quantity;
console.log("Total:", total);
// Expected Output: Total: 500
// எதிர்பார்க்கப்படும் வெளியீடு: Total: 500