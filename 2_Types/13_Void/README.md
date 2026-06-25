# Void

## Definition | வரையறை

The `void` type represents the complete absence of any return value. In TypeScript, it is primarily used as the return type of functions that perform an action (like logging or saving records) but do not return any result to the caller.

`void` என்பது எந்தவொரு திரும்பும் மதிப்பும் (return value) இல்லாத நிலையைக் குறிக்கிறது. TypeScript-ல், இது முதன்மையாக ஒரு செயலைச் செய்யும் (பதிவுகள் எழுதுவது போன்ற) ஆனால் அழைப்பவருக்கு எந்த விடையையும் தராத functions-ன் திரும்பும் வகையாகப் பயன்படுத்தப்படுகிறது.

---

## Why It Matters | ஏன் இது முக்கியம்?

In JavaScript, a function without a return statement returns `undefined` implicitly. If a developer mistakenly attempts to use this returned value in other calculations or conditions, it leads to logical bugs. Enforcing a `void` return type ensures that the caller cannot access or use the output of the function, preventing programming mistakes.

JavaScript-ல், return இல்லாத function மறைமுகமாக `undefined`-ஐத் தரும். ஒரு டெவலப்பர் இந்த மதிப்பை மற்ற கணக்கீடுகளில் பயன்படுத்த முயற்சித்தால் தர்க்கப் பிழைகள் ஏற்படும். `void` திரும்பும் வகையைக் கட்டாயப்படுத்துவது, அழைப்பவர் அதன் விடையைப் பயன்படுத்தாமல் தடுத்து பிழைகளை நீக்குகிறது.

---

## JavaScript Example

```javascript
// In JavaScript, functions without a return statement implicitly return undefined.
// JavaScript-ல், return கட்டளை இல்லாத functions மறைமுகமாக undefined-ஐத் திருப்பித் தரும்.
function logMessage(message) {
    console.log("Log:", message);
}

var result = logMessage("Action completed");
// Expected Output: Log: Action completed
// எதிர்பார்க்கப்படும் வெளியீடு: Log: Action completed

console.log("Returned Value:", result);
// Expected Output: Returned Value: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Returned Value: undefined

// JavaScript allows using the returned undefined value in other logic, causing bugs.
// JavaScript இந்த undefined மதிப்பை மற்ற தர்க்கங்களில் பயன்படுத்த அனுமதிப்பதால் பிழைகள் வரலாம்.
if (result) {
    console.log("This will not print because undefined is falsy.");
}
```

### Output

```text
Log: Action completed
Returned Value: undefined
```

### Observation

JavaScript returns `undefined` for functions that do not declare a return value, permitting developers to assign and use this non-existent value in other sections of the code.

JavaScript, return மதிப்பு இல்லாத செயல்பாடுகளுக்கு `undefined`-ஐத் தருகிறது, இதனால் டெவலப்பர்கள் இந்த இல்லாத மதிப்பை மற்ற இடங்களில் பயன்படுத்த முடிகிறது.

---

## TypeScript Example

```typescript
// TypeScript uses "void" like a postbox: it tells the compiler that the function returns nothing.
// "void" என்பது தபால் பெட்டி போன்றது: function எதையும் திருப்பித் தராது என்பதை கம்பைலருக்குக் கூறுகிறது.
function logMessage(message: string): void {
    console.log("Log:", message);
    // Explicitly returning values here is blocked by the compiler.
}

var result: void = logMessage("Action completed");

// Attempting to assign or use a void return value in calculations causes an error.
// Void திரும்பும் மதிப்பை கணக்கீடுகளிலோ அல்லது தர்க்கங்களிலோ பயன்படுத்த முயன்றால் பிழை ஏற்படும்.
console.log(result); // Compile Error
```

### Output

```text
Compilation Error: Property 'toString' does not exist on type 'void'.
```

### Observation

TypeScript prevents compile-time completion when developers attempt to access, assign, or call methods on values returned by `void` functions.

`void` functions வழங்கிய மதிப்புகளை அணுக அல்லது கணக்கீடுகளில் பயன்படுத்த முயற்சிக்கும் போது கம்பைல் நேரத்திலேயே TypeScript அதனைத் தடுத்து நிறுத்துகிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Return Concept | No explicit way to declare a function returns nothing | Declared clearly as `void` in function signatures |
| Return Value | Implicitly returns `undefined` at runtime | Compiler rejects any attempt to return values from `void` functions |
| Value Usage | Allows assigning and evaluating the returned `undefined` | Rejects compile operations if void return is assigned or processed |

---

## Real-World Example | நடைமுறை உதாரணம்

In an analytics tracker, a function `sendTelemetry(event)` sends usage statistics to a cloud server. Since the function only fires a request, it returns no value. A developer trying to execute checkouts based on the return value of `sendTelemetry` will create transaction bugs. Typing the function as returning `void` prevents this logical error.

ஒரு பகுப்பாய்வு டிராக்கரில், `sendTelemetry(event)` என்ற function மேகக்கணி சேவையகத்திற்குத் புள்ளிவிவரங்களை அனுப்புகிறது. இந்தச் செயல்பாடு எந்த மதிப்பையும் திருப்பித் தராது. இதன் திரும்பும் மதிப்பை வைத்து பணப்பரிவர்த்தனையைச் செய்ய முயன்றால் பிழைகள் ஏற்படும். இந்த function-க்கு `void` வழங்குவது இந்த தர்க்கப் பிழையைத் தடுக்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Safe Function Signatures | Explicitly states that a function is designed only for side-effects. |
| Blocks Value Misuse | Prevents developers from assigning or evaluating useless function outputs. |
| Strict Logic Control | Ensures code execution flow does not rely on empty returns. |

---

## Interview Question

### What is the purpose of the `void` type in TypeScript, and how is it different from `undefined`?

The `void` type represents the complete absence of a return value, commonly used for functions that perform side-effects. `undefined` is an actual value in JavaScript. In TypeScript, if a function is declared to return `void`, it cannot return any value. If it is declared to return `undefined`, it must explicitly return `undefined` or have a return statement with no value. `void` is a type definition, whereas `undefined` is both a type and a value.

`void` என்பது எந்தவொரு திரும்பும் மதிப்பும் இல்லாத நிலையைக் குறிக்கிறது, இது பக்கவிளைவுச் செயல்பாடுகளுக்கு (logging) பயன்படுத்தப்படுகிறது. `undefined` என்பது JavaScript-ல் ஒரு உண்மையான மதிப்பாகும். TypeScript-ல், ஒரு function `void` திரும்பும் எனக் குறிக்கப்பட்டால், அது எந்த மதிப்பையும் தர முடியாது. `undefined` திரும்பும் எனக் குறிக்கப்பட்டால், அது வெளிப்படையாக `undefined`-ஐத் திருப்பித் தர வேண்டும். `void` என்பது ஒரு வகை வரையறையாகும், ஆனால் `undefined` என்பது ஒரு வகையும் மதிப்பும் ஆகும்.

---

## Summary | சுருக்கம்

* Represents the absence of any return value in function structures.
  Functions-ல் எந்தவொரு திரும்பும் மதிப்பும் இல்லாத நிலையைக் குறிக்கிறது.
* Prevents calculations or logic checks from utilizing empty function outputs.
  பயனற்ற செயல்பாடுகளின் விடைகளைத் தர்க்கங்களில் பயன்படுத்துவதைத் தடுக்கிறது.
* Restricts return statements inside the function to be empty or nonexistent.
  Functions-க்குள்ளான return கூற்றுகளை வெற்று அல்லது இல்லாததாக்குகிறது.
* Caught statically, ensuring correct application control flow.
  பாதுகாப்பான பயன்பாட்டு ஓட்டத்திற்காகக் கம்பைல் நேரத்திலேயே சரிபார்க்கப்படுகிறது.
```

Let's write these files for `13_Void`.
