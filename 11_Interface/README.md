# Interfaces

## Definition | வரையறை

An Interface is a structural contract that defines the shape of an object. It specifies the properties, methods, and types that an object must have, ensuring structural compliance during compile-time without producing any JavaScript code at runtime.

Interface என்பது ஒரு ஆப்ஜெக்ட்டின் வடிவத்தை வரையறுக்கும் கட்டமைப்பு ஒப்பந்தமாகும். இது ஒரு ஆப்ஜெக்ட் கொண்டிருக்க வேண்டிய பண்புகள், முறைகள் மற்றும் வகைகளைத் தீர்மானிக்கிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript handles objects dynamically. If a function expects an object with specific properties and receives an incomplete one, it returns `undefined` or throws errors at runtime. TypeScript's interfaces prevent this by enforcing structural contracts during compilation, ensuring that objects conform to the expected format before the code is executed.

JavaScript ஆப்ஜெக்ட்களை மாறும் தன்மையுடன் கையாள்கிறது. இதனால் தேவையான பண்புகள் விடுபட்டிருக்கும் போது ரன்டைம் பிழைகள் ஏற்படலாம். TypeScript-ன் interfaces கம்பைல் நேரத்திலேயே இவற்றைச் சரிபார்த்து பிழைகளைத் தடுக்கிறது.

---

## JavaScript Example

```javascript
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
```

### Output

```text
Name: Sathish
Role: Developer
Name: undefined
Role: undefined
```

### Observation

JavaScript allows passing arbitrary objects without validating if the required keys are present, resulting in `undefined` values being used at runtime without safety warnings.

உறுதியான சரிபார்ப்புகள் ஏதுமில்லாமல் ஆப்ஜெக்ட்களை அனுமதிக்கிறது JavaScript. இதனால் தேவையான சாவிகள் விடுபட்டிருக்கும் போது எச்சரிக்கையின்றி `undefined` வெளியீடு கிடைக்கிறது.

---

## TypeScript Example

```typescript
// TypeScript introduces interfaces to establish strict structural contracts (blueprints) for objects.
// ஆப்ஜெக்ட்களுக்கான கடுமையான கட்டமைப்பு ஒப்பந்தங்களை உருவாக்க TypeScript-ல் interface பயன்படுத்தப்படுகிறது.
interface Employee {
    name: string;
    role: string;
}

function printEmployeeDetails(employee: Employee) {
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
}

var regularEmp: Employee = { name: "Sathish", role: "Developer" };
printEmployeeDetails(regularEmp);

// Objects that do not meet the structural contract are rejected during compilation.
// ஒப்பந்தத்தின் அமைப்பைப் பூர்த்தி செய்யாத ஆப்ஜெக்ட்கள் கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
var brokenEmp = { username: "Guest" };
printEmployeeDetails(brokenEmp); // Compile Error
```

### Output

```text
Compilation Error: Argument of type '{ username: string; }' is not assignable to parameter of type 'Employee'.
  Property 'name' is missing in type '{ username: string; }' but required in type 'Employee'.
```

### Observation

TypeScript strictly enforces the interface contract at compile-time, blocking object arguments that do not contain the required fields.

ஒப்பந்த அமைப்பில் வரையறுக்கப்பட்டுள்ள பண்புகள் விடுபட்டிருக்கும் போது, கம்பைல் நேரத்திலேயே TypeScript அதனைத் தடுத்து நிறுத்துகிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Object Contracts | No native way to define interface contracts | Explicit support via the `interface` keyword |
| Runtime Overhead | None | None (interfaces compile away completely, leaving no footprint in JS) |
| Missing Properties | Allowed (yields `undefined` at runtime) | Blocked (produces a compiler error) |

---

## Real-World Example | நடைமுறை உதாரணம்

Think of a secure building's ID card system. To enter, the security gate requires an ID card containing a photo and a barcode. It does not care about the person's identity or background, only that the card matches the required format. The TypeScript interface acts as this ID card format constraint, rejecting any object that does not present the correct structural format.

ஒரு கட்டிடத்தின் அடையாள அட்டை (ID card) நுழைவு முறையைக் கருதுங்கள். உள்ளே நுழைய புகைப்படம் மற்றும் பார்கோடு கொண்ட அடையாள அட்டை தேவை. அது யாருடைய அட்டை என்பதை விட, அட்டை சரியான அமைப்பில் உள்ளதா என்பது மட்டுமே சரிபார்க்கப்படும். TypeScript interface என்பது இந்த அடையாள அட்டை விதிமுறை போன்றது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Zero Runtime Footprint | Completely removed during compilation, preserving light JavaScript output. |
| Code Readability | Acts as clear documentation showing the expected fields in API responses or state objects. |
| Structural Reusability | Can be extended (inherited) using the `extends` keyword to build complex object hierarchies. |

---

## Interview Question

### What is the difference between an Interface and a Type Alias in TypeScript?

Interfaces are primarily used to define structural contracts for objects and support **declaration merging** (if you declare two interfaces with the same name, they are merged into one). Type aliases (`type`) can represent primitive types, unions, intersections, and tuples, but they do not support declaration merging. In general, interfaces are recommended for object structures.

Interfaces முக்கியமாக ஆப்ஜெக்ட்களின் கட்டமைப்பு ஒப்பந்தங்களை வரையறுக்கப் பயன்படுகின்றன, மேலும் இவை **declaration merging**-ஐ ஆதரிக்கின்றன. Type aliases எளிய வகைகள், union மற்றும் tuple-களை வரையறுக்கலாம், ஆனால் declaration merging-ஐ ஆதரிக்காது. ஆப்ஜெக்ட்களுக்கு interfaces பரிந்துரைக்கப்படுகிறது.

---

## Summary | சுருக்கம்

* Establishes a compile-time structural blueprint for objects.
  ஆப்ஜெக்ட்களுக்கான கம்பைல் நேர கட்டமைப்பு ஒப்பந்தத்தை உருவாக்குகிறது.
* Compiles away completely, producing zero runtime overhead.
  ரன்டைமில் பூஜ்ஜிய சுமையுடன் முற்றிலும் கம்பைல் செய்யப்படுகிறது.
* Enforces structural integrity, preventing missing property errors.
  வடிவமைப்பைப் பாதுகாத்து, விடுபட்ட பண்புகள் பிழைகளைத் தடுக்கிறது.
* Supports inheritance to extend schemas modularly.
  பரம்பரை (inheritance) முறையை ஆதரித்து அமைப்புகளை எளிதாக விரிவுபடுத்துகிறது.
