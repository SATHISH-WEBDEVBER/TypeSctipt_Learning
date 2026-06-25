// TypeScript uses Union types to act like a port that accepts only specified types (string or number).
// TypeScript குறிப்பிட்ட types-ஐ (string அல்லது number) மட்டுமே ஏற்கும் வகையில் Union types-ஐப் பயன்படுத்துகிறது.
var identifier: string | number = 101;
console.log("Identifier:", identifier);
// Expected Output: Identifier: 101
// எதிர்பார்க்கப்படும் வெளியீடு: Identifier: 101

// Changing to a string is allowed because it is in the union contract.
// Union ஒப்பந்தத்தில் இருப்பதால் இதனை string ஆக மாற்றுவது அனுமதிக்கப்படுகிறது.
identifier = "EMP101";
console.log("Updated Identifier:", identifier);
// Expected Output: Updated Identifier: EMP101
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Identifier: EMP101

// Attempting to assign a boolean will cause a compile-time error.
// boolean மதிப்பை ஒதுக்க முயற்சித்தால் கம்பைல் நேரத்தில் பிழை ஏற்படும்.
// identifier = true;
