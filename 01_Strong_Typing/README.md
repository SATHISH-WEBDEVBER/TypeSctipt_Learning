# Strong Typing

## Definition | வரையறை

Strong Typing is like labeling containers in a kitchen. If a container is labeled "Sugar," you cannot put "Salt" inside it. In programming, once a variable is assigned a datatype, it is locked to that type, and the compiler prevents any other datatype from being stored inside it.

Strong Typing என்பது சமையலறையில் உள்ள டப்பாக்களுக்கு லேபிளிடுவது போன்றது. ஒரு டப்பாவில் "சர்க்கரை" என்று எழுதப்பட்டிருந்தால், அதில் "உப்பு" போட முடியாது. நிரலாக்கத்தில், ஒரு variable-க்கு datatype வழங்கப்பட்டால், அதில் வேறு வகை மதிப்புகளைச் சேமிக்க முடியாது.

---

## Why It Matters | ஏன் இது முக்கியம்?

Imagine driving a car where the fuel tank accepts water instead of petrol without warning, ruining the engine. In JavaScript, variables accept any type at runtime, causing silent crashes (like NaN or undefined). TypeScript acts as a strict guard, preventing wrong inputs before the application runs.

ஒரு காரில் பெட்ரோலுக்குப் பதிலாக தண்ணீரை ஊற்றினாலும் கார் அதை எச்சரிக்கையின்றி ஏற்றுக்கொண்டு என்ஜினை கெடுத்துவிடுவதாக கற்பனை செய்து பாருங்கள். JavaScript-ல் variables எந்த வகையையும் ஏற்றுக்கொண்டு runtime-ல் பிழைகளை (NaN அல்லது undefined) ஏற்படுத்தும். TypeScript ஒரு காவலர் போல செயல்பட்டு, தவறான உள்ளீடுகளை முன்கூட்டியே தடுக்கிறது.

---

## JavaScript Example

```JavaScript
// A variable acts like a box that can store any type of value.
// ஒரு variable எந்த வகையான மதிப்பையும் சேமிக்கக்கூடிய ஒரு பெட்டி போன்றது.
var age = 25;
console.log("Age:", age);
// Expected Output: Age: 25
// எதிர்பார்க்கப்படும் வெளியீடு: Age: 25

// JavaScript allows putting a string value into a number box.
// JavaScript ஒரு number பெட்டியில் string மதிப்பை வைக்க அனுமதிக்கிறது.
age = "Twenty Five";
console.log("Updated Age:", age);
// Expected Output: Updated Age: Twenty Five
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Age: Twenty Five

// A function is like a machine expecting two numbers to calculate.
// ஒரு function என்பது கணக்கிடுவதற்கு இரண்டு numbers-ஐ எதிர்பார்க்கும் இயந்திரம் போன்றது.
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Passing correct values works as expected.
// சரியான மதிப்புகளை அனுப்பும்போது எதிர்பார்த்தபடி செயல்படுகிறது.
console.log("Total:", calculateTotal(10, 5));
// Expected Output: Total: 50
// எதிர்பார்க்கப்படும் வெளியீடு: Total: 50

// Passing text to the math function causes an invalid output (NaN) silently.
// கணக்கீட்டு function-க்கு உரையை அனுப்பும்போது மறைமுகமாக தவறான விடை (NaN) கிடைக்கிறது.
console.log("Invalid Total:", calculateTotal("ten", 5));
// Expected Output: Invalid Total: NaN
// எதிர்பார்க்கப்படும் வெளியீடு: Invalid Total: NaN

// An object is like an ID card with a strict layout.
// ஒரு object என்பது குறிப்பிட்ட அமைப்பைக் கொண்ட அடையாள அட்டை போன்றது.
var student = {
    id: 101,
    name: "Sathish"
};

// Accessing a misspelled property returns undefined without warning.
// எழுத்துப்பிழை கொண்ட property-ஐ அணுகும்போது warning இன்றி undefined கிடைக்கும்.
console.log("Student Roll Number:", student.rollNum);
// Expected Output: Student Roll Number: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Student Roll Number: undefined
```

### Output

```text
Age: 25
Updated Age: Twenty Five
Total: 50
Invalid Total: NaN
Student Roll Number: undefined
```

### Observation

JavaScript lacks strict boundaries. It allows type switching, incorrect calculation values, and accessing non-existent properties without warning, which leads to silent bugs.

JavaScript-ல் கடுமையான கட்டுப்பாடுகள் இல்லை. இது எவ்வித எச்சரிக்கையுமின்றி datatypes-ஐ மாற்றவும், தவறான கணக்கீடுகளைச் செய்யவும் மற்றும் இல்லாத பண்புகளை அணுகவும் அனுமதிக்கிறது.

---

## TypeScript Example

```typescript
// TypeScript labels the box so it only accepts numbers.
// TypeScript பெட்டியை லேபிளிடுவதால் அது எண்களை மட்டுமே ஏற்கும்.
var age: number = 25;
console.log("Age:", age);

// Attempting to store a string value in a number box causes an error.
// number பெட்டியில் string மதிப்பைச் சேமிக்க முயன்றால் பிழை ஏற்படும்.
age = "Twenty Five"; // Compile Error

// The function machine is configured to strictly accept only number inputs.
// function இயந்திரம் எண்களை மட்டுமே ஏற்கும் வகையில் அமைக்கப்பட்டுள்ளது.
function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

// Passing text will be blocked during compilation, preventing bugs.
// உரையை அனுப்ப முயற்சித்தால் கம்பைல் நேரத்திலேயே தடுக்கப்பட்டு பிழைகள் தவிர்க்கப்படும்.
calculateTotal("ten", 5); // Compile Error

// An interface acts as a template for the student ID card.
// ஒரு interface மாணவர் அடையாள அட்டைக்கான மாதிரியாக செயல்படுகிறது.
interface Student {
    id: number;
    name: string;
}
var student: Student = { id: 101, name: "Sathish" };

// Accessing properties not defined in the template causes an error.
// மாதிரியில் இல்லாத பண்புகளை அணுக முயற்சித்தால் பிழை ஏற்படும்.
console.log(student.rollNum); // Compile Error
```

### Output

```text
Compilation Error: Mismatched assignments and invalid property access are blocked.
```

### Observation

TypeScript acts as a validation template, instantly checking every assignment, parameter, and object property during compile time to block developer errors.

TypeScript ஒரு சரிபார்ப்பு மாதிரியாக செயல்பட்டு, கம்பைல் நேரத்திலேயே தவறான தரவு ஒதுக்கீடு மற்றும் அணுகுமுறைகளைக் கண்டறிந்து தடுக்கிறது.

---

## JavaScript vs TypeScript

| Feature         | JavaScript                                       | TypeScript                                                  |
| --------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| Analogy         | Unlabeled boxes that accept anything             | Labeled boxes that strictly enforce contents                |
| Error Catching  | Mismatched inputs cause errors at runtime        | Mismatched inputs are caught at compile time                |
| Function Inputs | Open input slots (accepts any value type)        | Restricted input slots (only accepts declared types)        |
| Object Layout   | Freeform objects (allows typos and missing keys) | Enforced layout templates (prevents typos and missing keys) |

---

## Real-World Example | நடைமுறை உதாரணம்

Think of a theater ticketing system where the ticket price must be a number (e.g., 150). If a user booking system passes a text string like "free", JavaScript might add it up as a string concatenation ("Total: 150free") or fail with NaN. TypeScript ensures that the input slot only accepts numbers, completely avoiding accounting errors in production.

திரையரங்க டிக்கெட் முன்பதிவு அமைப்பை நினைத்துப் பாருங்கள், அங்கு டிக்கெட் விலை number ஆக (எ.கா., 150) இருக்க வேண்டும். ஒருவேளை தவறுதலாக "free" என்ற உரை அனுப்பப்பட்டால், JavaScript அதனைத் தவறாக இணைக்கலாம் ("Total: 150free") அல்லது கணக்கீடு தோல்வியடையலாம். TypeScript டிக்கெட் விலை எண் வடிவில் மட்டுமே இருக்க வேண்டும் என்று கட்டாயப்படுத்துவதன் மூலம் இந்த பிழையைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit                | Description                                                             |
| ---------------------- | ----------------------------------------------------------------------- |
| Prevention Over Cure   | Prevents datatypes mistakes from reaching production.                   |
| Predictable Code       | Ensures variables and functions always hold and return expected values. |
| Auto-Complete Guidance | Helps the editor show exactly what keys and methods are available.      |
| Typos Protection       | Immediately flags misspelled property names.                            |

---

## Interview Question

### How does Strong Typing improve code quality?

Strong Typing establishes clear rules for variables, parameters, and return types. It ensures code correctness during compilation, eliminates runtime errors like undefined or NaN, and makes the code self-documenting for other developers.

Strong Typing என்பது variables, parameters மற்றும் return types-க்கு தெளிவான விதிகளை வகுக்கிறது. இது கம்பைல் நேரத்திலேயே பிழைகளைத் தடுத்து, runtime பிழைகளை நீக்குகிறது. மேலும் இது குறியீட்டை மற்ற டெவலப்பர்கள் எளிதாகப் புரிந்துகொள்ள உதவுகிறது.

---

## Summary | சுருக்கம்

* Variables are strictly locked to their assigned datatype.
  Variables அவற்றின் வரையறுக்கப்பட்ட datatype-க்கு மட்டுமே கட்டுப்படுத்தப்படும்.
* Type checking happens before code is executed (Compile time).
  குறியீடு இயங்குவதற்கு முன்பே (Compile time) சரிபார்ப்பு நடைபெறும்.
* Avoids runtime issues caused by typos or wrong arguments.
  எழுத்துப்பிழைகள் மற்றும் தவறான arguments-களால் ஏற்படும் runtime பிழைகளைத் தவிர்க்கிறது.
* Increases reliability and serves as a blueprint for developers.
  நம்பகத்தன்மையை அதிகரித்து, டெவலப்பர்களுக்கான வழிகாட்டியாகச் செயல்படுகிறது.
