# Object

## Definition | வரையறை

The Object datatype represents a structured collection of key-value pairs. In TypeScript, object shapes are strictly checked, meaning variables are defined with exact keys and corresponding types, and any deviation (like missing keys or wrong value types) is caught during compilation.

Object என்பது சாவி-மதிப்பு (key-value) இணைகளைக் கொண்ட ஒரு கட்டமைக்கப்பட்ட தொகுப்பாகும். TypeScript-ல், objects-ன் வடிவங்கள் கடுமையாக சரிபார்க்கப்படுகின்றன, அதாவது குறிப்பிட்ட சாவிகள் மற்றும் அவற்றின் தரவு வகைகளுடன் variables வரையறுக்கப்படுகின்றன.

---

## Why It Matters | ஏன் இது முக்கியம்?

JavaScript objects are dynamic, allowing properties to be added, changed, or deleted freely. Accessing a misspelled property (like `user.emial` instead of `user.email`) yields `undefined` silently instead of showing an error, leading to runtime failures. Strong typing enforces structural contracts.

JavaScript objects மாறும் தன்மை கொண்டவை, இதனால் சாவிகளை எளிதாகச் சேர்க்கவோ நீக்கவோ முடியும். இதில் எழுத்துப்பிழையுள்ள சாவியை அணுகும்போது பிழை காட்டாமல் `undefined` எனத் தரும், இது செயலி முடங்குவதற்குக் காரணியாகிறது. Strong typing இதனைத் தடுக்கிறது.

---

## JavaScript Example

```javascript
// An object acts like a product specification sheet with flexible values.
// ஒரு object என்பது மாற்றக்கூடிய மதிப்புகளைக் கொண்ட தயாரிப்பு விவரக்குறிப்புத் தாள் போன்றது.
var user = {
    id: 101,
    name: "Sathish"
};
console.log("User Name:", user.name);
// Expected Output: User Name: Sathish
// எதிர்பார்க்கப்படும் வெளியீடு: User Name: Sathish

// JavaScript allows changing datatype values of property keys freely.
// JavaScript அதன் பண்புகளின் (properties) datatypes-ஐ எளிதாக மாற்ற அனுமதிக்கிறது.
user.id = "One Zero One";
console.log("Updated User:", user);
// Expected Output: Updated User: { id: 'One Zero One', name: 'Sathish' }
// எதிர்பார்க்கப்படும் வெளியீடு: Updated User: { id: 'One Zero One', name: 'Sathish' }

// Accessing a misspelled property returns undefined without warning.
// எழுத்துப்பிழை கொண்ட property-ஐ அணுகும்போது warning இன்றி undefined கிடைக்கும்.
console.log("User Email:", user.emial);
// Expected Output: User Email: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: User Email: undefined
```

### Output

```text
User Name: Sathish
Updated User: { id: 'One Zero One', name: 'Sathish' }
User Email: undefined
```

### Observation

JavaScript allows key values to switch types dynamically and does not warn when developer typos result in accessing non-existent properties, returning `undefined`.

JavaScript, சாவிகளின் தரவு வகைகளை மாற்ற அனுமதிக்கிறது மற்றும் இல்லாத சாவிகளை அணுக முயற்சிக்கும் போது எச்சரிக்கையின்றி `undefined` மதிப்பை வழங்குகிறது.

---

## TypeScript Example

```typescript
// TypeScript enforces strict object blueprints to ensure matching types.
// சரியான வகைகளுடன் பொருந்துவதை உறுதி செய்ய TypeScript கடுமையான object மாதிரிகளை கட்டாயப்படுத்துகிறது.
var user: { id: number; name: string } = {
    id: 101,
    name: "Sathish"
};
console.log("User Name:", user.name);

// Attempting to assign a string to user.id (which is defined as a number) causes an error.
// number ஆக வரையறுக்கப்பட்ட user.id-க்கு string மதிப்பை வழங்க முயன்றால் பிழை ஏற்படும்.
user.id = "One Zero One"; // Compile Error

// Accessing misspelled properties or undeclared properties causes compile-time errors.
// மாதிரியில் இல்லாத அல்லது எழுத்துப்பிழை கொண்ட பண்புகளை அணுக முயற்சித்தால் பிழை ஏற்படும்.
console.log(user.emial); // Compile Error
```

### Output

```text
Compilation Error: Property 'emial' does not exist on type '{ id: number; name: string; }'.
```

### Observation

TypeScript prevents runtime errors by checking object structures statically, blocking misspelled property access and invalid datatype assignments.

Object கட்டமைப்புகளை கம்பைல் நேரத்திலேயே சரிபார்ப்பதன் மூலம், தவறான ஒதுக்கீடுகளையும் மற்றும் எழுத்துப்பிழைகளையும் தடுத்து TypeScript பாதுகாக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Schema Enforcement | Freeform structure (add/remove properties dynamically) | Strict shape validation (checks keys and value datatypes) |
| Missing Properties | Returns `undefined` at runtime | Blocked at compile time |
| Extensibility | Allows arbitrary keys to be added at any time | Requires explicit index signatures or definitions for new keys |

---

## Real-World Example | நடைமுறை உதாரணம்

In a database sync operation, a user record is sent to a save function. If the program spells the identifier key as `userID` instead of `userId`, JavaScript saves a null value or creates a new field silently. TypeScript blocks compilation if the object shape doesn't match the exact schema contract.

ஒரு தரவுத்தள ஒத்திசைவுச் செயல்பாட்டில், பயனர் விவரங்கள் சேமிப்புச் செயல்பாட்டிற்கு அனுப்பப்படுகின்றன. நிரலாக்கத்தில் `userId`-க்குப் பதிலாக `userID` என எழுதப்பட்டால், JavaScript அதனை எச்சரிக்கையின்றி வெற்று மதிப்பாகச் சேமிக்கும். TypeScript இந்த வடிவ ஒழுங்கீனத்தைக் கண்டறிந்து கம்பைல் நேரத்திலேயே தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Shape Enforcement | Ensures objects conform to a strict layout, avoiding runtime key errors. |
| Spelling Protection | Flags typos in key names instantly during writing. |
| Inline Documentation | Displays defined property structures directly inside the editor. |

---

## Interview Question

### How does TypeScript enforce type safety for objects, and what happens if we access a non-existent property?

TypeScript enforces type safety for objects by requiring a schema definition, which can be inline, via interfaces, or type aliases. If a developer attempts to access a non-existent property, TypeScript immediately flags a compile-time error. In contrast, JavaScript returns `undefined`, which often leads to runtime crashes when trying to access further sub-properties (e.g., `Cannot read property 'x' of undefined`).

TypeScript, object-களுக்கு inline, interfaces அல்லது type aliases மூலமாக கட்டமைப்புகளை வரையறுத்துக் கட்டுப்படுத்துகிறது. இல்லாத ஒரு பண்பை அணுகும்போது TypeScript கம்பைல் நேரத்திலேயே பிழையைக் காட்டுகிறது. ஆனால் JavaScript `undefined` மதிப்பை வழங்குகிறது, இது பிற செயல்பாடுகளின் போது ரன்டைமில் செயலியை முடக்கிவிடும்.

---

## Summary | சுருக்கம்

* Validates object schemas including keys and value datatypes.
  Object-ன் சாவிகள் மற்றும் அவற்றின் தரவு வகைகளைச் சரிபார்க்கிறது.
* Prevents silent spelling mistakes in property access.
  Properties-ஐ அணுகும்போது ஏற்படும் எழுத்துப்பிழைகளைத் தடுக்கிறது.
* Blocks undefined keys from entering structural records.
  வரையறுக்கப்படாத சாவிகள் தரவுக்குள் நுழைவதைத் தடுக்கிறது.
* Provides rich editor autocomplete for object property keys.
  சாவிகளுக்குத் துல்லியமான autocomplete பரிந்துரைகளை வழங்குகிறது.
