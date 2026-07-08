# Undefined

## Definition | வரையறை

The `undefined` type represents a variable that has been declared but has not yet been assigned a value. In TypeScript, it is commonly used in union types (like `string | undefined`) to indicate that a variable holds a value or is currently uninitialized.

`undefined` என்பது ஒரு variable உருவாக்கப்பட்டு இன்னும் எந்தவொரு மதிப்பும் ஒதுக்கப்படாத நிலையைக் குறிக்கிறது. TypeScript-ல், இது பொதுவாக யூனியன் வகைகளில் (எ.கா., `string | undefined`) பயன்படுத்தப்படுகிறது, இது ஒரு variable மதிப்பைப் பெற்றுள்ளது அல்லது இன்னும் மதிப்பில்லாமல் உள்ளது என்பதை உணர்த்துகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

If a variable is declared but uninitialized (`undefined`), trying to execute methods or access properties on it (e.g. calling `userName.toUpperCase()`) will crash the application with a `TypeError` at runtime. Enforcing strict compiler checks for `undefined` ensures that developers handle empty variables safely before executing type-specific properties.

ஒரு variable உருவாக்கப்பட்டு மதிப்பு வழங்கப்படாமல் (`undefined`) இருக்கும்போது, அதன் பண்புகளை அணுக முயன்றால் செயலி ரன்டைமில் முடங்கும். `undefined`-க்கான கடுமையான கம்பைலர் சோதனைகள், செயல்பாடுகளைச் செய்வதற்கு முன் சோதனைகளை மேற்கொள்ள டெவலப்பர்களைக் கட்டாயப்படுத்தி பிழைகளைத் தடுக்கிறது.

---

## JavaScript Example

```javascript
// JavaScript defaults declared but unassigned variables to "undefined".
// JavaScript உருவாக்கப்பட்டு மதிப்பு ஒதுக்கப்படாத variables-க்கு "undefined" மதிப்பை வழங்கும்.
var userName;
console.log("User Name:", userName);
// Expected Output: User Name: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: User Name: undefined

// JavaScript allows accessing properties on undefined variables, crashing at runtime.
// Undefined variables-ன் பண்புகளை அணுக முயலும்போது JavaScript ரன்டைமில் முடங்கும்.
try {
    console.log(userName.toUpperCase());
} catch (error) {
    console.log("Error caught:", error.message);
    // Expected Output: Error caught: Cannot read properties of undefined (reading 'toUpperCase')
    // எதிர்பார்க்கப்படும் வெளியீடு: Error caught: Cannot read properties of undefined (reading 'toUpperCase')
}
```

### Output

```text
User Name: undefined
Error caught: Cannot read properties of undefined (reading 'toUpperCase')
```

### Observation

JavaScript assigns `undefined` automatically to uninitialized variables and does not warn at compile time when developers try to access properties of those variables.

JavaScript, மதிப்பு வழங்கப்படாத variables-க்கு தானாகவே `undefined`-ஐ வழங்குகிறது மற்றும் அவற்றின் பண்புகளை அணுகும்போது கம்பைல் நேரத்தில் எச்சரிப்பதில்லை.

---

## TypeScript Example

```typescript
// TypeScript uses "undefined" to represent uninitialized state, enforcing safety checks.
// மதிப்பற்ற நிலையை குறிக்க "undefined" பயன்படுகிறது, இது பாதுகாப்புச் சோதனைகளைக் கட்டாயப்படுத்துகிறது.
let userName: string | undefined;
console.log("User Name:", userName);

// Directly using methods on an undefined variable is blocked by the compiler.
// Undefined variable-ல் நேரடியாக methods-ஐப் பயன்படுத்துவது கம்பைலரால் தடுக்கப்படும்.
console.log(userName.toUpperCase()); // Compile Error

// We must perform a type check before executing string-specific methods.
// உரை செயல்பாடுகளை இயக்குவதற்கு முன்பு நாம் வகைச் சோதனையைச் செய்ய வேண்டும்.
if (userName !== undefined) {
    console.log(userName.toUpperCase());
}
```

### Output

```text
Compilation Error: Variable 'userName' is used before being assigned.
```

### Observation

TypeScript blocks compilation if uninitialized variables are accessed or used without safety checks or explicit narrowing guards.

பாதுகாப்புச் சோதனைகள் இல்லாமல் மதிப்பு வழங்கப்படாத variables பயன்படுத்தப்படும்போது கம்பைல் நேரத்திலேயே TypeScript அதனைத் தடுத்து நிறுத்துகிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Default Value | Automatically assigns `undefined` to declared variables | Automatically assigns `undefined` but restricts usage unless typed as `undefined` |
| Safety Level | Weak (causes common "cannot read property of undefined" runtime crashes) | High (compiler blocks property access on undefined slots until checked) |
| Optional Parameters | Implicitly returns `undefined` for missing arguments | Requires optional marker (`?`) or union syntax (e.g. `type \| undefined`) |

---

## Real-World Example | நடைமுறை உதாரணம்

In a user registration form, the `middleName` field is optional. If a user leaves it blank, the variable is uninitialized (`undefined`). If the system tries to format it directly (like calling `middleName.toUpperCase()`), JavaScript will crash. TypeScript prevents this by forcing the developer to check if the middle name was actually entered before processing it.

ஒரு பயனர் பதிவு படிவத்தில், `middleName` என்பது விருப்பத்தேர்வாகும். பயனர் அதை காலியாக விட்டால், அதன் மதிப்பு `undefined` ஆகும். அதனை நேரடியாக மாற்ற முயன்றால் (`middleName.toUpperCase()`) JavaScript முடங்கும். `middleName` உள்ளிடப்பட்டுள்ளதா எனச் சரிபார்க்கும் வரை TypeScript இதனைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Eliminates Uninitialized Crashes | Blocks code compilation if variables are used before they are assigned values. |
| Strict Optional Parameters | Enforces verification checks on optional properties and function arguments. |
| Secure Forms | Standardizes the checking of empty user form fields before saving to DB. |

---

## Interview Question

### What is the difference between `null` and `undefined` in TypeScript?

In TypeScript, `null` represents the intentional absence of a value (e.g. a chair explicitly reserved but empty), whereas `undefined` represents an uninitialized state where a variable has been declared but no value has been assigned yet (e.g. a blank sheet of paper). Both are separate datatypes, and in strict mode, they cannot be assigned to other types unless declared as a union.

TypeScript-ல், `null` என்பது திட்டமிட்டு மதிப்பு இல்லை என்பதைக் குறிக்கிறது (எ.கா. முன்பதிவு செய்யப்பட்டு காலியாக உள்ள நாற்காலி). ஆனால் `undefined` என்பது ஒரு variable உருவாக்கப்பட்டு இன்னும் எந்த மதிப்பும் ஒதுக்கப்படாத நிலையைத் குறிக்கிறது (எ.கா. வெற்றுக் காகிதம்). இரண்டுமே வெவ்வேறு datatypes ஆகும், மேலும் கம்பைலர் சோதனைகளின் போது இவை பிற வகைகளுக்கு ஒதுக்கப்படுவது தடுக்கப்படும்.

---

## Summary | சுருக்கம்

* Represents declared variables that have not yet been assigned a value.
  உருவாக்கப்பட்டு இன்னும் மதிப்பு ஒதுக்கப்படாத variables-ஐக் குறிக்கிறது.
* Blocks compile operations if uninitialized references are used.
  மதிப்பு வழங்கப்படாத variables பயன்படுத்தப்படுவதைக் கம்பைல் நேரத்தில் தடுக்கிறது.
* Commonly utilized in optional parameter structures and union types.
  விருப்பத்தேர்வு அளவுருக்கள் (optional parameters) மற்றும் யூனியன் வகைகளில் பயன்படுகிறது.
* Caught statically, avoiding the common runtime "cannot read properties of undefined" errors.
  ரன்டைம் பிழைகளைத் தவிர்க்க கம்பைல் நேரத்திலேயே சோதனைகளைச் செய்ய வழிவகுக்கிறது.
```

Let's write these files for `15_Undefined`. Free
