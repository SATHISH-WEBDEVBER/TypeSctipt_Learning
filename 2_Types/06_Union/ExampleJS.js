// A variable can store anything in JavaScript, making it hard to restrict to specific options.
// JavaScript-ல் ஒரு variable எதை வேண்டுமானாலும் சேமிக்கலாம், இதனால் குறிப்பிட்ட மதிப்புகளை மட்டும் கட்டுப்படுத்துவது கடினம்.
var identifier = 101;
console.log("Identifier:", identifier);
// Expected Output: Identifier: 101
// எதிர்பார்க்கப்படும் வெளியீடு: Identifier: 101

// Changing it to a string is allowed.
// இதனை string ஆக மாற்றுவது அனுமதிக்கப்படுகிறது.
identifier = "EMP101";
console.log("Updated Identifier:", identifier);
// Expected Output: Updated Identifier: EMP101
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Identifier: EMP101

// However, JavaScript also allows assigning totally unrelated types like booleans or objects.
// இருப்பினும், JavaScript முற்றிலும் தொடர்பில்லாத boolean அல்லது objects போன்றவற்றை ஒதுக்க அனுமதிக்கிறது.
identifier = true;
console.log("Invalid Identifier:", identifier);
// Expected Output: Invalid Identifier: true
// எதிர்பார்க்கப்படும் வெளியீடு: Invalid Identifier: true
