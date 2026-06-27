# Duck Typing

## Definition | வரையறை

Duck Typing (also known as Structural Typing) is a concept where the compatibility of an object is determined by its structure (shape), rather than its explicit class or type name. The name comes from the phrase: "If it walks like a duck and quacks like a duck, it is a duck." In TypeScript, if an object matches the minimum properties required by a type, it is accepted.

Duck Typing (Structural Typing என்றும் அழைக்கப்படும்) என்பது ஒரு object-ன் இணக்கத்தன்மை அதன் குறிப்பிட்ட வகுப்பு அல்லது வகை பெயரைக் காட்டிலும், அதன் கட்டமைப்பை (shape) அடிப்படையாகக் கொண்டு தீர்மானிக்கப்படும் ஒரு கருத்தாகும். "ஒரு பறவை வாத்தைப் போல நடந்து, வாத்தைப் போல கத்தினால், அது வாத்துதான்" என்ற பழமொழியில் இருந்து இப்பெயர் வந்தது.

---

## Why It Matters | ஏன் இது முக்கியம்?

In nominal typing languages (like Java), an object must explicitly implement an interface to be accepted by a function. TypeScript uses structural typing, which offers the flexibility of dynamic JavaScript (allowing object literals to match shapes directly) while ensuring compilation safety.

ஜாவா போன்ற பிற மொழிகளில், ஒரு function-ல் பயன்படுத்த ஒரு object குறிப்பிட்ட இடைமுகத்தை வெளிப்படையாக செயல்படுத்த வேண்டும். TypeScript இதற்கான நெகிழ்வுத்தன்மையை வழங்குகிறது (ஆப்ஜெக்ட்கள் தங்களின் வடிவத்திற்கு ஏற்ப நேரடியாகப் பொருந்தும்) அதே வேளையில் கம்பைல் பாதுகாப்பையும் உறுதி செய்கிறது.

---

## JavaScript Example

```javascript
// JavaScript uses duck typing implicitly: if an object has the keys, it is accepted.
// JavaScript-ல் duck typing மறைமுகமாக செயல்படுகிறது: ஒரு object தேவையான சாவிகளைக் கொண்டிருந்தால் அது ஏற்றுக்கொள்ளப்படும்.
function printCoordinates(point) {
    console.log("X:", point.x);
    console.log("Y:", point.y);
}

// Any object with x and y properties is accepted.
// x மற்றும் y பண்புகளைக் கொண்ட எந்தவொரு object-ம் ஏற்றுக்கொள்ளப்படும்.
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
```

### Output

```text
X: 10
Y: 20
X: undefined
Y: undefined
```

### Observation

JavaScript evaluates objects at runtime based on the presence of properties, returning `undefined` silently if the expected keys (like `x` or `y`) are missing.

JavaScript ரன்டைமில் பண்புகள் உள்ளதா என ஆராய்கிறது. எதிர்பார்க்கும் சாவிகள் (`x` அல்லது `y`) இல்லையெனில் எவ்வித எச்சரிக்கையுமின்றி `undefined`-ஐ வழங்குகிறது.

---

## TypeScript Example

```typescript
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

// Objects missing the required shape keys are blocked during compilation.
// தேவையான சாவிகள் இல்லாத objects கம்பைல் நேரத்திலேயே தடுக்கப்படும்.
var brokenPoint = { label: "Border" };
printCoordinates(brokenPoint); // Compile Error
```

### Output

```text
Compilation Error: Property 'x' is missing in type '{ label: string; }' but required in type 'Point'.
```

### Observation

TypeScript permits objects that meet the required shape (even if they have extra properties) while blocking shapes that miss the required properties during compilation.

தேவையான வடிவத்தைக் கொண்டுள்ள பொருட்களை அனுமதிக்கும் அதே வேளையில், தேவையான பண்புகள் விடுபட்டிருக்கும் பொருட்களை கம்பைல் நேரத்திலேயே TypeScript தடுக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Structural Integrity | Assumed at runtime (no warnings for missing keys) | Checked at compile time (verifies minimum required properties) |
| Extra Properties | Allowed freely | Allowed on object literals when passing through variables, but strictly checked on direct literals |
| Safety Level | Weak (risk of runtime crash when properties are missing) | Strong (ensures object complies with the minimum structural schema) |

---

## Real-World Example | நடைமுறை உதாரணம்

Consider a phone charging dock. The dock does not care which brand manufactured the charger cable (Samsung, Apple, Sony). It only checks if the connection pin shape is USB-C. If it matches the shape and power specifications, the dock accepts it. TypeScript's duck typing checks the object's property shape just like a USB-C charging dock checks the pin shape.

ஒரு போன் சார்ஜிங் டாக்கை நினைத்துப் பாருங்கள். டாக் எந்த பிராண்ட் சார்ஜர் கேபிளை தயாரித்தது என்பதைப் பொருட்படுத்துவதில்லை. இது சார்ஜரின் இணைப்பு முள் USB-C வடிவில் உள்ளதா என்று மட்டுமே சரிபார்க்கிறது. வடிவமும் மின்விவரமும் பொருந்தினால் அது ஏற்கப்படும். TypeScript-ன் duck typing ஒரு USB-C டாக் பினைச் சரிபார்ப்பது போல ஆப்ஜெக்ட்களின் வடிவத்தை சரிபார்க்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Structural Flexibility | Allows objects created on the fly (literals) to match types without implementing formal schemas. |
| Decoupled Types | Objects do not need to explicitly declare their relationship to an interface to comply with it. |
| Compile Safety | Guarantees that the expected object properties exist, avoiding runtime crashes. |

---

## Interview Question

### What is Duck Typing (Structural Typing) in TypeScript, and how does it differ from Nominal Typing?

Duck Typing is a type system where type compatibility is determined by the shape or structure of the object, rather than its name. If an object has the minimum properties required by a type, it is considered compatible. Nominal Typing (used in Java or C#) determines compatibility based on explicit declarations or class names; an object must explicitly implement an interface to be compatible, even if it already has all the required properties.

Duck Typing என்பது ஒரு ஆப்ஜெக்ட்டின் பெயரைக் காட்டிலும் அதன் வடிவமைப்பு அல்லது கட்டமைப்பை வைத்து இணக்கத்தன்மையை முடிவு செய்யும் முறையாகும். ஒரு ஆப்ஜெக்ட் தேவையான குறைந்தபட்ச பண்புகளைக் கொண்டிருந்தால் அது இணக்கமானது. Nominal Typing (Java போன்ற மொழிகளில் பயன்படுவது) ஆப்ஜெக்ட்டின் வகுப்பு பெயரை வைத்து இணக்கத்தை முடிவு செய்யும்; வடிவமைப்பு சரியாக இருந்தாலும் அது இடைமுகத்தை வெளிப்படையாகச் செயல்படுத்தியிருக்க வேண்டும்.

---

## Summary | சுருக்கம்

* Checks the structure (shape) of the object instead of its declared name.
  ஆப்ஜெக்ட்டின் பெயரைக் காட்டிலும் அதன் வடிவத்தை (structure) மட்டுமே சரிபார்க்கிறது.
* Objects matching the minimum required properties are accepted.
  தேவையான குறைந்தபட்ச பண்புகளைக் கொண்ட ஆப்ஜெக்ட்டுகள் ஏற்றுக்கொள்ளப்படும்.
* Combines the flexibility of JavaScript with the safety of TypeScript.
  JavaScript-ன் நெகிழ்வுத்தன்மையையும் TypeScript-ன் பாதுகாப்பையும் இணைக்கிறது.
* Caught during compile time to prevent runtime undefined access.
  ரன்டைம் முடக்கங்களைத் தவிர்க்க கம்பைல் நேரத்திலேயே சரிபார்க்கப்படுகிறது.
