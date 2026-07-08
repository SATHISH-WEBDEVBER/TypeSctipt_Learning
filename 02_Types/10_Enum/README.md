# Enum

## Definition | வரையறை

An Enum (short for enumeration) is a way to define a set of named constants. In TypeScript, enums allow you to define a collection of related values (either numeric or string) as a closed set of choices, preventing invalid values from being assigned.

Enum (enumeration என்பதன் சுருக்கம்) என்பது பெயரிடப்பட்ட மாறிலிகளின் (constants) தொகுப்பை வரையறுக்கும் ஒரு வழியாகும். TypeScript-ல், enums தொடர்புடைய மதிப்புகளை (எண் அல்லது உரை வடிவில்) ஒரு குறிப்பிட்ட விருப்பங்களாக வரையறுக்க அனுமதிக்கிறது, இதனால் தவறான மதிப்புகள் ஒதுக்கப்படுவது தடுக்கப்படுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

In JavaScript, to represent states (like order statuses or directions), developers use plain objects. However, since there is no type enforcement, a function expecting a status can receive any arbitrary string (like `"UP-SIDE-DOWN"`), causing logic errors. Enums prevent this by restricting inputs strictly to the defined set.

JavaScript-ல், ஒழுங்கு நிலைகளைக் குறிக்க (order status) சாதாரண ஆப்ஜெக்ட்கள் பயன்படுத்தப்படுகின்றன. ஆனால் தரவுக் கட்டுப்பாடு இல்லாததால், ஒரு திசையை எதிர்பார்க்கும் function எந்தவொரு உரை மதிப்பையும் பெற்று தர்க்கப் பிழைகளை ஏற்படுத்தும். Enums இந்த உள்ளீடுகளைக் கடுமையான விருப்பத் தொகுப்பிற்குள் கட்டுப்படுத்துகிறது.

---

## JavaScript Example

```javascript
// In JavaScript, enums do not exist, so we use plain objects.
// JavaScript-ல் enums இல்லை, எனவே நாம் சாதாரண objects-ஐப் பயன்படுத்துகிறோம்.
var Direction = {
    NORTH: "NORTH",
    SOUTH: "SOUTH",
    EAST: "EAST",
    WEST: "WEST"
};

function move(direction) {
    console.log("Moving direction:", direction);
}

// Passing a valid direction works.
// சரியான திசையை அனுப்பும்போது செயல்படுகிறது.
move(Direction.NORTH);
// Expected Output: Moving direction: NORTH
// எதிர்பார்க்கப்படும் வெளியீடு: Moving direction: NORTH

// JavaScript allows passing arbitrary strings, causing silent logic bugs.
// JavaScript எதேச்சையான உரை மதிப்புகளையும் அனுமதிப்பதால் மறைமுகமான தர்க்கப் பிழைகள் ஏற்படுகின்றன.
move("UP-SIDE-DOWN");
// Expected Output: Moving direction: UP-SIDE-DOWN
// எதிர்பார்க்கப்படும் வெளியீடு: Moving direction: UP-SIDE-DOWN
```

### Output

```text
Moving direction: NORTH
Moving direction: UP-SIDE-DOWN
```

### Observation

JavaScript permits passing any arbitrary string value to functions that expect specific constants, creating risks of logic errors.

திசைகாட்டிகளை எதிர்பார்க்கும் செயல்பாடுகளுக்கு எந்தவொரு உரையையும் அனுப்ப JavaScript அனுமதிக்கிறது, இது தர்க்கரீதியான தவறுகளுக்கு வழிவகுக்கிறது.

---

## TypeScript Example

```typescript
// Enums act like a compass providing a closed set of choices.
// Enums என்பது வரையறுக்கப்பட்ட விருப்பங்களை வழங்கும் திசைகாட்டி போன்றது.
enum Direction {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
}

function move(direction: Direction) {
    console.log("Moving direction:", direction);
}

// Passing a valid enum value works as expected.
// சரியான enum மதிப்பை அனுப்பும்போது எதிர்பார்த்தபடி செயல்படுகிறது.
move(Direction.North);

// Passing invalid strings is blocked at compile time.
// தவறான உரை மதிப்புகளை அனுப்புவது கம்பைல் நேரத்திலேயே தடுக்கப்படும்.
move("UP-SIDE-DOWN"); // Compile Error
```

### Output

```text
Compilation Error: Argument of type '"UP-SIDE-DOWN"' is not assignable to parameter of type 'Direction'.
```

### Observation

TypeScript guarantees type safety by verifying enum parameters at compile time, rejecting arbitrary string inputs that are not defined in the enum declaration.

கம்பைல் நேரத்திலேயே திசைகாட்டி (enum) மதிப்புகளைச் சரிபார்த்து, அதில் இல்லாத உரை உள்ளீடுகளைத் தடுத்து TypeScript பாதுகாக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Enforcement | Relies on developer discipline (no runtime check) | Strict compile-time checks reject invalid options |
| Auto-completion | Limited to object keys, no type validation | Fully guided autocomplete suggestions in the editor |
| Output Code | Plain object mapping | Compiles to custom self-invoking function structures mapping keys/values |

---

## Real-World Example | நடைமுறை உதாரணம்

In an order checkout pipeline, an order can be in states: `PENDING`, `SHIPPED`, or `DELIVERED`. If a database bug writes a status `"shippppeed"`, JavaScript will process it as an unknown state, causing processing failures. An enum `OrderStatus` ensures that only the three valid states are ever used in the code.

ஒரு தயாரிப்பு ஆர்டர் பைப்லைனில், ஆர்டர் நிலை `PENDING`, `SHIPPED`, அல்லது `DELIVERED` ஆக இருக்கலாம். தரவுத்தளத்தில் `"shippppeed"` எனத் தவறாகச் சேமிக்கப்பட்டால், JavaScript அதனைத் தெரியாத நிலையாகக் கருதி பில்களை முடக்கும். `OrderStatus` enum இந்த மூன்று சரியான நிலைகள் மட்டுமே பயன்படுத்தப்படுவதை உறுதி செய்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Closed Set Choices | Guarantees parameters only receive predefined, valid options. |
| Spelling Safety | Eliminates string typos by utilizing constants in logic checks. |
| Readability | Replaces magic numbers or plain strings with descriptive names. |

---

## Interview Question

### What is an Enum in TypeScript, and when should you use it over a Union Type?

An Enum is a feature in TypeScript that defines a set of named constants (numeric or string). It compiles to an actual JavaScript object at runtime. You should use an Enum when you need a runtime representation of the options, need reverse mapping (for numeric enums), or have options that represent configuration metadata. If you only need compile-time validation without runtime code overhead, a string Union Type (`"North" | "South"`) is preferred.

Enum என்பது பெயரிடப்பட்ட மாறிலிகளின் தொகுப்பாகும், இது ரன்டைமில் ஒரு உண்மையான JavaScript ஆப்ஜெக்ட்டாக மாறும். உங்களுக்கு விருப்பங்களின் ரன்டைம் பிரதிநிதித்துவம் தேவைப்படும்போது அல்லது எண் தலைகீழ் வரைபடம் (reverse mapping) தேவைப்படும்போது Enum பயன்படுத்த வேண்டும். கம்பைல் நேர சரிபார்ப்பு மட்டும் போதுமென்றால், Union Type (`"North" | "South"`) போதுமானது.

---

## Summary | சுருக்கம்

* Defines a closed set of named constants for restricted options.
  வரையறுக்கப்பட்ட விருப்பங்களுக்காக மாறிலிகளின் தொகுப்பை உருவாக்குகிறது.
* Prevents arbitrary strings or magic numbers from breaking logic.
  தேவையற்ற உரை அல்லது எண்களால் தர்க்க அமைப்பு உடைவதைத் தடுக்கிறது.
* Available at runtime as compiled lookup objects.
  ரன்டைமிலும் கிடைக்கக்கூடிய வகையில் கம்பைல் ஆப்ஜெக்ட்களாக மாறுகிறது.
* Caught statically during compilation to ensure spelling safety.
  எழுத்துப்பிழைகளைத் தவிர்க்க கம்பைல் நேரத்திலேயே சரிபார்க்கப்படுகிறது.
