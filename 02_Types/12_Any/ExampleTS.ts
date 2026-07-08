// The "any" type acts like a wildcard pass, disabling all compiler type checks.
// "any" என்பது கம்பைலரின் அனைத்து வகைச் சோதனைகளையும் தவிர்க்கும் ஒரு காட்டு அட்டை (wildcard) போன்றது.
var wildCard: any = 100;
console.log("Value:", wildCard);
// Expected Output: Value: 100
// எதிர்பார்க்கப்படும் வெளியீடு: Value: 100

// Setting to a string is allowed since type checking is disabled.
// வகைச் சோதனை தவிர்க்கப்பட்டுள்ளதால் இதில் string மதிப்பை அமைப்பது அனுமதிக்கப்படுகிறது.
wildCard = "Hello";
console.log("Updated Value:", wildCard);
// Expected Output: Updated Value: Hello
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Value: Hello

// Accessing non-existent properties compiles without error, returning undefined at runtime.
// இல்லாத பண்புகளை அணுகும்போது கம்பைல் பிழை ஏற்படாது, ஆனால் ரன்டைமில் undefined கிடைக்கும்.
console.log("Non-existent Property:", wildCard.secretKey);
// Expected Output: Non-existent Property: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Non-existent Property: undefined