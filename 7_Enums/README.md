# Enums

## Definition | வரையறை

An Enum (short for Enumeration) is a special class-like structure that defines a set of named constants. Enums allow developers to create a custom type with a fixed set of allowed values (e.g. Days of the week, Traffic lights, or Sizes).

Enum (Enumeration என்பதன் சுருக்கம்) என்பது குறிப்பிட்ட மாறிலி மதிப்புகளின் தொகுப்பை வரையறுக்கப் பயன்படும் ஒரு சிறப்பு அமைப்பாகும். வாரத்தின் நாட்கள், போக்குவரத்து விளக்குகள் போன்ற நிலையான மதிப்புகளை உருவாக்க இது உதவுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript does not have native enum support, requiring developers to use objects frozen with `Object.freeze()`. However, these objects do not enforce compile-time safety, allowing any string or number to be passed to functions. TypeScript's native `enum` prevents invalid arguments from being passed at compile-time, reducing bugs and improving code readability.

JavaScript-ல் enum ஆதரவு இல்லாததால், `Object.freeze()` மூலமே objects-ஐப் பயன்படுத்த வேண்டியுள்ளது. ஆனால் இது கம்பைல் நேரப் பாதுகாப்பைத் தருவதில்லை. TypeScript-ன் `enum` தவறான மதிப்புகள் அனுப்பப்படுவதைக் கம்பைல் நேரத்திலேயே தடுக்கிறது.

---

## JavaScript Example

```javascript
// JavaScript does not have native enum support, so we often use objects with freeze to mimic them.
// JavaScript-ல் enum ஆதரவு கிடையாது, எனவே நாம் freeze செய்யப்பட்ட objects-ஐப் பயன்படுத்துகிறோம்.
var TrafficLight = Object.freeze({
    RED: 0,
    YELLOW: 1,
    GREEN: 2
});

function getAction(state) {
    if (state === TrafficLight.RED) {
        return "Stop";
    } else if (state === TrafficLight.YELLOW) {
        return "Slow Down";
    } else if (state === TrafficLight.GREEN) {
        return "Go";
    }
    return "Invalid State";
}

console.log("Light Action:", getAction(TrafficLight.RED));
// Expected Output: Light Action: Stop
// எதிர்பார்க்கப்படும் வெளியீடு: Light Action: Stop

// Without strict type protection, someone can pass an arbitrary number or string.
// வகை பாதுகாப்பு இல்லாததால், யார் வேண்டுமானாலும் எந்தவொரு எண்களையோ அல்லது உரையையோ அனுப்பலாம்.
console.log("Custom Input Action:", getAction(99));
// Expected Output: Custom Input Action: Invalid State
// எதிர்பார்க்கப்படும் வெளியீடு: Custom Input Action: Invalid State
```

### Output

```text
Light Action: Stop
Custom Input Action: Invalid State
```

### Observation

JavaScript emulates enums using frozen objects, but functions accepting these values cannot restrict inputs from receiving invalid parameters (e.g., passing `99`) at runtime.

JavaScript உறைந்த பொருட்களை (frozen objects) கொண்டு enum போன்ற அமைப்பை உருவாக்கினாலும், தவறான உள்ளீடுகள் (`99` போன்றவற்றை) கடத்தப்படுவதை ரன்டைமில் தடுக்க இயலாது.

---

## TypeScript Example

```typescript
// TypeScript introduces native "enum" to declare a set of named constants.
// குறிப்பிட்ட மாறிலி மதிப்புகளின் தொகுப்பை உருவாக்க TypeScript-ல் "enum" வசதி அறிமுகப்படுத்தப்பட்டுள்ளது.
enum TrafficLight {
    RED,
    YELLOW,
    GREEN
}

function getAction(state: TrafficLight): string {
    if (state === TrafficLight.RED) {
        return "Stop";
    } else if (state === TrafficLight.YELLOW) {
        return "Slow Down";
    } else if (state === TrafficLight.GREEN) {
        return "Go";
    }
    return "Invalid State";
}

console.log("Light Action:", getAction(TrafficLight.RED));

// Passing values outside the Enum options is blocked during compilation.
// Enum உறுப்புகளைத் தவிர வேறு ஏதேனும் மதிப்புகளை அனுப்ப முயன்றால் கம்பைலரால் தடுக்கப்படும்.
// getAction(99); // Compile Error
```

### Output

```text
Compilation Error: Argument of type '99' is not assignable to parameter of type 'TrafficLight'.
```

### Observation

TypeScript's native `enum` enforces strict bounds, blocking any parameters that are not defined within the `TrafficLight` enum list at compile-time.

TypeScript-ன் `enum` கடுமையான கட்டுப்பாட்டை விதிக்கிறது. இதன்மூலம் `TrafficLight`-ல் வரையறுக்கப்படாத மதிப்புகளைக் கடத்தும்போது கம்பைல் பிழை ஏற்படுகிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Native Support | No (emulated via frozen objects) | Yes (using the `enum` keyword) |
| Input Constraint | Weak (allows arbitrary values of matching underlying types) | Strong (blocks parameters outside the enum scope) |
| Compilation | Dynamic object lookup | Emitted as immediate objects mapping names to values and vice versa (reverse mapping) |

---

## Real-World Example | நடைமுறை உதாரணம்

Consider a pizza ordering application. The pizza sizes (Small, Medium, Large) can be represented as an Enum. If the system was written in JavaScript, a bug in the frontend could send an invalid size like "Extra-Large" or "10" to the ordering API, causing the order processor to crash. With TypeScript's Enum, the API accepts only the specified options, preventing invalid configurations.

ஒரு பீட்சா ஆர்டர் செய்யும் செயலியை நினைத்துப் பாருங்கள். பீட்சா அளவுகளை (Small, Medium, Large) Enum ஆக வரையறுக்கலாம். JavaScript-ல் எழுதப்பட்டிருந்தால் "Extra-Large" போன்ற தவறான உள்ளீடுகள் அனுப்பப்பட்டு செயலி முடங்க வாய்ப்புள்ளது. TypeScript Enum இதை முன்கூட்டியே தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Auto-incrementing | Automatically assigns numeric values starting from `0` unless custom values are specified. |
| Reverse Mapping | Numeric enums allow retrieving the key name from its numeric value (e.g. `TrafficLight[0]` returns `"RED"`). |
| Code Readability | Replaces magic numbers with meaningful name constants. |

---

## Interview Question

### What is the difference between a Numeric Enum and a String Enum in TypeScript, and when should you use each?

Numeric enums automatically assign numbers (0, 1, 2...) to their members and support **reverse mapping** (getting the name from the number). String enums require each member to be initialized with a string literal, do not support reverse mapping, but are much easier to read during debugging or when logging outputs since they print readable text instead of index numbers.

Numeric enums தானாகவே எண்களை (0, 1, 2...) உறுப்பினர்களுக்கு ஒதுக்கி, reverse mapping-ஐ ஆதரிக்கின்றன. String enums ஒவ்வொரு உறுப்பினருக்கும் உரை மதிப்பை கட்டாயமாக்குகிறது; இது reverse mapping-ஐ ஆதரிக்காது, ஆனால் பிழைதிருத்தம் மற்றும் பதிவு செய்யும் போது படிக்க எளிதாக இருக்கும்.

---

## Summary | சுருக்கம்

* Defines a group of named constant values.
  பெயரிடப்பட்ட மாறிலி மதிப்புகளின் தொகுப்பை வரையறுக்கிறது.
* Prevents magic numbers and unvalidated options.
  தெளிவற்ற எண்களையும், சரிபார்க்கப்படாத பிற விருப்பங்களையும் தடுக்கிறது.
* Supports numeric and string-based options.
  எண் மற்றும் உரை சார்ந்த விருப்பங்களை ஆதரிக்கிறது.
* Enforced statically at compile time, improving code safety.
  கம்பைல் நேரத்திலேயே சரிபார்க்கப்பட்டு, குறியீட்டின் பாதுகாப்பை உயர்த்துகிறது.
