// The "any" type acts like a wildcard, telling TypeScript to skip all type validation.
// "any" என்பது வகைச் சோதனைகளைத் தவிர்க்குமாறு கம்பைலருக்குக் கூறும் காட்டு அட்டை (wildcard) போன்றது.
var wildcard: any = 100;
console.log("Value:", wildcard);
// Expected Output: Value: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Value: 100

wildcard = "Hello";
console.log("Updated Value:", wildcard);
// Expected Output: Updated Value: Hello
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Value: Hello

// Accessing non-existent properties compiles without error, returning undefined at runtime.
// "any" என்பதால் இல்லாத பண்புகளை அணுகினாலும் கம்பைல் பிழை ஏற்படாது, ரன்டைமில் undefined கிடைக்கும்.
console.log("Property Access:", wildcard.secretKey);
// Expected Output: Property Access: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Property Access: undefined
