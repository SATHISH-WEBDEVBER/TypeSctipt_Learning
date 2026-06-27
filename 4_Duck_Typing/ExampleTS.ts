// TypeScript enforces Duck Typing structurally: it only checks the object's shape, not its name.
// TypeScript-ல் Duck Typing கட்டமைப்பின் மூலம் செயல்படுத்தப்படுகிறது: இது object-ன் வடிவத்தை மட்டுமே சரிபார்க்கும்.
interface Point {
    x: number;
    y: number;
}

function printCoordinates(point: Point) {
    console.log("X:", point.x);
    console.log("Y:", point.y);
}

// An object with x, y, and extra properties is accepted because it meets the minimum shape.
// x, y மற்றும் கூடுதல் பண்புகளைக் கொண்ட object ஏற்கப்படும், ஏனெனில் இது தேவையான வடிவத்தைக் கொண்டுள்ளது.
var customPoint = { x: 10, y: 20, label: "Center" };
printCoordinates(customPoint);
// Expected Output: X: 10
// Expected Output: Y: 20
// எதிர்பார்க்கப்படும் வெளியீடு: X: 10
// எதிர்பார்க்கப்படும் வெளியீடு: Y: 20

// Objects missing the required shape keys are blocked during compilation.
// தேவையான சாவிகள் இல்லாத objects கம்பைல் நேரத்திலேயே தடுக்கப்படும்.
// var brokenPoint = { label: "Border" };
// printCoordinates(brokenPoint);
