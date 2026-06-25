# Type Alias

## Definition | வரையறை

A Type Alias creates a new name (a nickname) for any datatype, including primitives, unions, and object shapes. In TypeScript, you declare them using the `type` keyword (e.g. `type ID = string | number`), making complex types reusable and easier to read.

Type Alias என்பது பிரைமிடிவ்ஸ், யூனியன்கள் மற்றும் ஆப்ஜெக்ட் வடிவங்கள் உட்பட எந்தவொரு தரவு வகைக்கும் ஒரு புதிய சுருக்கப்பெயரை உருவாக்குகிறது. TypeScript-ல், இது `type` என்ற முக்கிய வார்த்தையைப் பயன்படுத்தி அறிவிக்கப்படுகிறது, இது சிக்கலான வகைகளை மீண்டும் பயன்படுத்தக்கூடியதாகவும் படிக்க எளிதாகவும் மாற்றுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

In complex codebases, writing inline union types or nested object schemas repeatedly in multiple locations leads to code duplication and maintenance challenges. If a type needs to change, you must update every occurrence. Type aliases provide a single source of truth for custom types.

சிக்கலான குறியீடுகளில், பல இடங்களில் ஒரே மாதிரியான யூனியன் வகைகளையோ அல்லது ஆப்ஜெக்ட் கட்டமைப்புகளையோ மீண்டும் மீண்டும் எழுதுவது குறியீடு நகலெடுப்பு மற்றும் பராமரிப்பு சவால்களுக்கு வழிவகுக்கும். Type aliases தனிப்பயன் வகைகளுக்கு ஒரு பொதுவான வரைவிலக்கணத்தை வழங்குகிறது.

---

## JavaScript Example

```javascript
// JavaScript does not support type aliases, requiring duplicate definitions.
// JavaScript-ல் type aliases இல்லாததால், நாம் விளக்கங்களை மீண்டும் மீண்டும் எழுத வேண்டும்.
function printId(id) {
    console.log("ID:", id);
}

// Any type can be passed since there is no type nickname check.
// வகைகளை சரிபார்க்கும் சுருக்கப்பெயர் இல்லாததால் எந்த வகையையும் அனுப்பலாம்.
printId(101);
// Expected Output: ID: 101
// எதிர்பார்க்கப்படும் வெளியீடு: ID: 101

printId("EMP101");
// Expected Output: ID: EMP101
// எதிர்பார்க்கப்படும் வெளியீடு: ID: EMP101

printId(true);
// Expected Output: ID: true
// எதிர்பார்க்கப்படும் வெளியீடு: ID: true
```

### Output

```text
ID: 101
ID: EMP101
ID: true
```

### Observation

JavaScript does not support defining type aliases, allowing variables or function parameters to take any datatype at runtime without structural restrictions.

JavaScript-ல் type aliases வரையறுப்பதற்கான ஆதரவு இல்லாததால், எந்தவொரு தடையுமின்றி variables அல்லது parameters எந்த தரவு வகையையும் பெறுகின்றன.

---

## TypeScript Example

```typescript
// A Type Alias acts like a custom nickname to simplify complex type signatures.
// Type Alias என்பது சிக்கலான வகை விளக்கங்களை எளிமையாக்க பயன்படும் தனிப்பயன் சுருக்கப்பெயர் போன்றது.
type ID = string | number;

function printId(id: ID) {
    console.log("ID:", id);
}

// Using union type nickname is allowed.
// யூனியன் வகையின் சுருக்கப்பெயரைப் பயன்படுத்துவது அனுமதிக்கப்படுகிறது.
printId(101);
printId("EMP101");

// Unrelated types are blocked during compile time.
// தொடர்பில்லாத வகைகள் கம்பைல் நேரத்திலேயே தடுக்கப்படும்.
printId(true); // Compile Error
```

### Output

```text
Compilation Error: Argument of type 'boolean' is not assignable to parameter of type 'ID'.
```

### Observation

TypeScript permits assigning any value that complies with the type alias definition while blocking incompatible types from compiling.

அமைப்பிற்குப் பொருந்தும் மதிப்புகளை அனுமதிக்கும் அதே வேளையில், பொருந்தாத வகைகளின் செயலாக்கத்தை கம்பைல் நேரத்திலேயே TypeScript தடுக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Custom Names | No (types are dynamic and cannot be named) | Yes (defined using the `type` keyword) |
| Reusability | Manual duplication of type schemas in docstrings | Centralized type definitions that can be reused anywhere |
| Type Combinations | Cannot enforce restricted unions or custom types | Can easily define aliases for unions, tuples, and primitives |

---

## Real-World Example | நடைமுறை உதாரணம்

In an API transaction handler, a status code can be `"success"`, `"failed"`, or `"pending"`. Writing this union `("success" | "failed" | "pending")` in every function parameter is tedious. By creating a type alias `TransactionStatus`, we write it once and reuse it across multiple transaction systems.

ஒரு API பரிவர்த்தனை கையாளுபவத்தில், பரிவர்த்தனை நிலை `"success"`, `"failed"`, அல்லது `"pending"` ஆக இருக்கலாம். இந்தத் தொகுப்பை ஒவ்வொரு முறையும் எழுதுவது கடினமானது. `TransactionStatus` என்ற type alias-ஐ உருவாக்குவதன் மூலம், நாம் அதை ஒரு முறை எழுதி பல இடங்களிலும் பயன்படுத்தலாம்.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Reusability | Define a type schema once and reuse it in variables, function parameters, and classes. |
| Code Simplicity | Keeps function signatures short and clean by abstracting complex inline definitions. |
| Union and Tuple Support | Unlike interfaces, aliases can represent primitive unions and fixed arrays. |

---

## Interview Question

### What is the difference between Type Alias and Interface in TypeScript?

A Type Alias (`type`) can define alias names for any type, including primitives, unions, intersections, and tuples, but it cannot be extended using the `extends` keyword or merged with duplicate definitions. An Interface (`interface`) is strictly used to define object shapes, can be extended using `extends`, and supports "declaration merging" where defining the same interface name twice merges their properties.

Type Alias (`type`) என்பது பிரைமிடிவ்ஸ், யூனியன்கள் மற்றும் டூப்பிள்கள் உட்பட எந்தவொரு வகைக்கும் சுருக்கப்பெயரை வரையறுக்கலாம், ஆனால் இதனை `extends` மூலம் விரிவாக்கவோ அல்லது மீண்டும் வரையறுத்து இணைக்கவோ முடியாது. Interface (`interface`) என்பது ஆப்ஜெக்ட் வடிவங்களை வரையறுக்க மட்டுமே பயன்படும், இதனை `extends` கொண்டு விரிவாக்கலாம் மற்றும் ஒரே பெயரில் இருமுறை வரையறுக்கும்போது அவை தானாகவே இணையும்.

---

## Summary | சுருக்கம்

* Creates reusable nicknames for complex type definitions using the `type` keyword.
  `type` மூலம் சிக்கலான வகை வரையறைகளுக்கு மீண்டும் பயன்படுத்தக்கூடிய சுருக்கப்பெயர்களை உருவாக்குகிறது.
* Reduces code duplication in function parameters and variable definitions.
  Parameters மற்றும் variables-ல் குறியீடு மீண்டும் மீண்டும் எழுதப்படுவதைக் குறைக்கிறது.
* Can represent primitives, unions, intersections, and tuple shapes.
  யூனியன்கள், டூப்பிள்கள் மற்றும் ஆப்ஜெக்ட் வடிவங்களைக் குறிக்கப்ப்படுகிறது.
* Caught statically during compile time for consistent type behavior.
  நிலையான வகை நடத்தைகளுக்காக கம்பைல் நேரத்திலேயே பிழைகள் சரிபார்க்கப்படுகின்றன.
