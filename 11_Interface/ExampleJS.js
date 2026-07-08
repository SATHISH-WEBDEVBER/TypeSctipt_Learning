// JavaScript does not have interfaces, meaning objects are not validated against any contract.
// JavaScript-ல் interfaces கிடையாது, இதனால் objects எந்தவொரு ஒப்பந்தத்திற்கும் எதிராக சரிபார்க்கப்படுவதில்லை.
function printEmployeeDetails(employee) {
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
}

// Any arbitrary object can be passed, even if it lacks properties.
// பண்புகள் இல்லாவிட்டாலும் எந்தவொரு ஆப்ஜெக்ட்டையும் அனுப்பலாம்.
var regularEmp = { name: "Sathish", role: "Developer" };
printEmployeeDetails(regularEmp);
// Expected Output: Name: Sathish
// Expected Output: Role: Developer
// எதிர்பார்க்கப்படும் வெளியீடு: Name: Sathish
// எதிர்பார்க்கப்படும் வெளியீடு: Role: Developer

var brokenEmp = { username: "Guest" };
printEmployeeDetails(brokenEmp);
// Expected Output: Name: undefined
// Expected Output: Role: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Name: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Role: undefined
