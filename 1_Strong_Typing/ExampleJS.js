// Creating a variable with a number value.
// number மதிப்புடன் ஒரு variable உருவாக்கப்படுகிறது.
var score = 100;
console.log("Type:", typeof score);
// Expected Output: Type: number
// எதிர்பார்க்கப்படும் வெளியீடு: Type: number

// JavaScript allows dynamically changing the datatype.
// JavaScript-ல் variable-ன் datatype-ஐ எளிதாக மாற்ற முடியும்.
score = "One Hundred";
console.log("New Type:", typeof score);
// Expected Output: New Type: string
// எதிர்பார்க்கப்படும் வெளியீடு: New Type: string

// Extra: JavaScript allows mixed types in calculations, causing unexpected results.
// கூடுதல்: JavaScript கணக்கீடுகளில் வெவ்வேறு types-ஐ அனுமதிப்பதால் எதிர்பாராத முடிவுகள் ஏற்படும்.
function addBonus(score, bonus) {
    return score + bonus;
}
console.log("Result:", addBonus(100, "50"));
// Expected Output: Result: 10050
// எதிர்பார்க்கப்படும் வெளியீடு: Result: 10050