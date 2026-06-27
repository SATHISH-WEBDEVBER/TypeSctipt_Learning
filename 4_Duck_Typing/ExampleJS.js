// JavaScript uses duck typing implicitly: if an object has the keys, it is accepted.
// JavaScript-ல் duck typing மறைமுகமாக செயல்படுகிறது: ஒரு object தேவையான சாவிகளைக் கொண்டிருந்தால் அது ஏற்றுக்கொள்ளப்படும்.
function printCoordinates(point) {
    console.log("X:", point.x);
    console.log("Y:", point.y);
}

// Any object with x and y properties is accepted.
// x மற்றும் y பண்புகளைக் கொண்ட எந்தவொரு object-ம் uppercase-ஆக ஏற்றுக்கொள்ளப்படும்.
var customPoint = { x: 10, y: 20, label: "Center" };
printCoordinates(customPoint);
// Expected Output: X: 10
// Expected Output: Y: 20
// எதிர்பார்க்கப்படும் வெளியீடு: X: 10
// எதிர்பார்க்கப்படும் வெளியீடு: Y: 20

// If the object lacks the keys, it returns undefined without compile warnings.
// Object-ல் சாவிகள் விடுபட்டிருந்தால், எச்சரிக்கையின்றி undefined கிடைக்கும்.
var brokenPoint = { label: "Border" };
printCoordinates(brokenPoint);
// Expected Output: X: undefined
// Expected Output: Y: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: X: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Y: undefined
