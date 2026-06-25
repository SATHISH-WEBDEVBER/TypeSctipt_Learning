# Null

## Definition | வரையறை

The `null` type represents an intentional absence of any object value. In TypeScript, it is commonly used in union types (like `string | null`) to indicate that a variable holds a valid object or text under normal states, but is empty under current conditions.

`null` என்பது ஒரு ஆப்ஜெக்ட் மதிப்பு திட்டமிட்டு இல்லை என்பதைக் குறிக்கிறது. TypeScript-ல், இது பொதுவாக யூனியன் வகைகளில் (எ.கா., `string | null`) பயன்படுத்தப்படுகிறது, இது ஒரு variable சாதாரண நிலைகளில் சரியான ஆப்ஜெக்ட் அல்லது உரையை வைத்திருக்கும், ஆனால் தற்போதைய நிலையில் காலியாக உள்ளது என்பதை உணர்த்துகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

If a variable is empty (`null`) and the program attempts to call methods or access properties on it (e.g. `user.name` when `user` is null), JavaScript crashes with a `TypeError` at runtime. TypeScript's strict null checks force developers to write safety guards (e.g., checks like `if (user !== null)`) before accessing properties, eliminating runtime crashes.

ஒரு variable காலியாக (`null`) இருக்கும்போது, நிரல் அதன் பண்புகளை அணுக முயன்றால் (எ.கா., `user` காலியாக இருக்கும்போது `user.name`), JavaScript ரன்டைமில் முடங்கும். TypeScript-ன் கடுமையான null சோதனைகள், பண்புகளை அணுகுவதற்கு முன் பாதுகாப்பு நிபந்தனைகளை (எ.கா. `if (user !== null)`) எழுத டெவலப்பர்களைக் கட்டாயப்படுத்தி பிழைகளைத் தடுக்கிறது.

---

## JavaScript Example

```javascript
// JavaScript treats null as an object, allowing any properties to be read or written.
// JavaScript null-ஐ ஒரு object-ஆகக் கருதுவதால், அதன் பண்புகளை அணுகவோ மாற்றவோ அனுமதிக்கிறது.
var selectedUser = null;
console.log("Selected User:", selectedUser);
// Expected Output: Selected User: null
// எதிர்பார்க்கப்படும் வெளியீடு: Selected User: null

// Accessing properties on null causes a crash at runtime.
// Null-ல் உள்ள பண்புகளை அணுக முயலும்போது ரன்டைமில் செயலி முடங்கும்.
try {
    console.log(selectedUser.name);
} catch (error) {
    console.log("Error caught:", error.message);
    // Expected Output: Error caught: Cannot read properties of null (reading 'name')
    // எதிர்பார்க்கப்படும் வெளியீடு: Error caught: Cannot read properties of null (reading 'name')
}
```

### Output

```text
Selected User: null
Error caught: Cannot read properties of null (reading 'name')
```

### Observation

JavaScript permits accessing properties on `null` variables without compile-time warnings, causing runtime crashes when those properties do not exist.

JavaScript, `null` variables-ன் பண்புகளை அணுகும்போது எச்சரிக்கைகளைத் தருவதில்லை, இதனால் இல்லாத பண்புகளை அணுகும்போது ரன்டைம் முடக்கம் ஏற்படுகிறது.

---

## TypeScript Example

```typescript
// TypeScript uses "null" to represent an intentional absence of value, blocking direct access.
// "null" என்பது திட்டமிட்டு மதிப்பு இல்லை என்பதைக் குறிக்கும், இது பண்புகளை அணுகுவதைத் தடுக்கிறது.
let selectedUser: string | null = null;
console.log("Selected User:", selectedUser);

// Directly calling string methods on a nullable variable without safety checks causes an error.
// பாதுகாப்புச் சோதனைகள் இன்றி nullable variable-ல் நேரடியாக string methods-ஐ அழைக்க முயன்றால் பிழை ஏற்படும்.
console.log(selectedUser.toUpperCase()); // Compile Error

// We must perform a safety check before using the variable.
// variable-ஐப் பயன்படுத்துவதற்கு முன்பு நாம் பாதுகாப்புச் சோதனையைச் செய்ய வேண்டும்.
if (selectedUser !== null) {
    console.log(selectedUser.toUpperCase());
}
```

### Output

```text
Compilation Error: Object is possibly 'null'.
```

### Observation

TypeScript prevents compilation when developers attempt to access properties of a nullable type without first narrowing the type or validating the presence of a value.

அமைப்பிற்குரிய சோதனைகளைச் செய்யாமல் nullable variables-ன் பண்புகளை அணுக முயற்சிக்கும் போது கம்பைல் நேரத்திலேயே TypeScript தடுத்து நிறுத்துகிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Null Checking | Implicitly allowed (crashes at runtime on property access) | Enforced via `strictNullChecks` config (blocks compilation if unchecked) |
| Union Type Options | Variables hold null dynamically without restriction | Must explicitly declare union capability (e.g. `type \| null`) |
| Safety Level | Weak (high risk of null pointer crashes) | High (requires type guards before accessing nullable references) |

---

## Real-World Example | நடைமுறை உதாரணம்

In an online bookstore, the variable `selectedBook` is empty when the user first loads the screen. If they click a book, it populates with book details. In JavaScript, a bug in loading the interface might call `selectedBook.title` before a book is chosen, crashing the screen. TypeScript blocks this unless the code checks if a book has actually been chosen.

ஒரு புத்தக இணையதளத்தில், பயனர் திரையை ஏற்றும்போது `selectedBook` காலியாக இருக்கும். ஒரு புத்தகத்தைத் தேர்ந்தெடுத்ததும் அது விவரங்களைப் பெறும். JavaScript-ல், ஒரு புத்தகம் தேர்ந்தெடுக்கப்படும் முன் `selectedBook.title` அழைக்கப்பட்டால் திரை முடங்கும். ஒரு புத்தகம் தேர்ந்தெடுக்கப்பட்டுள்ளதா எனச் சரிபார்க்கும் வரை TypeScript இதனைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Eliminates Null Errors | Prevents standard "null pointer" runtime failures. |
| Clear Empty States | Provides an explicit placeholder representing an empty object state. |
| Safe Data Pipelines | Forces developers to check input completeness in forms and database records. |

---

## Interview Question

### What is the purpose of `strictNullChecks` in TypeScript, and why is it important?

`strictNullChecks` is a compiler option in TypeScript. When enabled, it ensures that `null` and `undefined` are not assignable to other datatypes unless explicitly declared as a union (e.g. `string | null`). This is important because it forces developers to check for nullability before accessing properties or methods on variables, eliminating the common "null pointer exception" crashes at runtime.

`strictNullChecks` என்பது TypeScript-ன் கம்பைலர் விருப்பமாகும். இது இயக்கப்படும்போது, `null` மற்றும் `undefined` ஆகியவற்றை வெளிப்படையாக யூனியனில் (`string | null`) அறிவிக்காவிட்டால் பிற வகைகளுக்கு ஒதுக்க முடியாது. இது பண்புகளை அணுகுவதற்கு முன் சோதனைகளை மேற்கொள்ள டெவலப்பர்களைக் கட்டாயப்படுத்தி, ரன்டைம் பிழைகளை நீக்குகிறது.

---

## Summary | சுருக்கம்

* Represents an intentional absence of any object value.
  ஒரு ஆப்ஜெக்ட் மதிப்பு திட்டமிட்டு இல்லை என்பதைக் குறிக்கிறது.
* Blocks property access on null variables during compilation.
  Null variables-ன் பண்புகள் அணுகப்படுவதைக் கம்பைல் நேரத்திலேயே தடுக்கிறது.
* Commonly declared as a union type (`type | null`) for empty states.
  வெற்று நிலைகளுக்காகப் பொதுவாக யூனியன் வகைகளுடன் இணைத்து அறிவிக்கப்படுகிறது.
* Prevents runtime crash bugs by forcing type validation guards.
  பாதுகாப்புச் சோதனைகளைக் கட்டாயப்படுத்துவதன் மூலம் ரன்டைம் முடக்கங்களைத் தடுக்கிறது.
