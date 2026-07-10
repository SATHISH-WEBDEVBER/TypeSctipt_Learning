# Closures

## Definition | வரையறை

A Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In simpler terms, a closure gives an inner function access to the outer function's scope even after the outer function has returned.

Closure என்பது ஒரு உள்கூறு (inner function) அதன் வெளிப்புறக் கூறின் (outer function) மாறிலிகளை (variables), வெளிப்புறக் கூறு இயங்கி முடிந்த பின்பும் அணுக அனுமதிக்கும் ஒரு மொழி அமைப்பாகும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

Closures are a fundamental JavaScript feature used to create private variables, stateful helper functions, and factory functions. In JavaScript, because there are no compile-time checks, it is easy to accidentally change the datatype of a captured variable (e.g. changing a counter from a number to a string), causing subsequent function calls to fail at runtime. TypeScript secures closures by statically typing captured variables, ensuring all operations remain safe and consistent.

JavaScript-ல் உள்ளீடாகப் பிடிபட்ட மாறிகளின் (captured variables) தரவு வகையைத் தவறாக மாற்றுவது போன்ற பிழைகள் ஏற்படலாம். TypeScript அவற்றின் வகைகளை முன்கூட்டியே உறுதி செய்து பாதுகாப்பினை வழங்குகிறது.

---

## JavaScript Example

```javascript
// JavaScript closures allow inner functions to access outer scope variables even after execution ends.
// JavaScript closures, வெளிப்புற function இயங்கி முடிந்த பின்பும் அதன் variables-ஐ அணுக அனுமதிக்கிறது.
function createCounter() {
    var count = 0; // Captured variable in lexical scope

    return {
        increment: function () {
            count += 1;
            return count;
        },
        getValue: function () {
            return count;
        }
    };
}

var counter = createCounter();
console.log("Count 1:", counter.increment());
// Expected Output: Count 1: 1
// எதிர்பார்க்கப்படும் வெளியீடு: Count 1: 1

console.log("Count 2:", counter.increment());
// Expected Output: Count 2: 2
// எதிர்பார்க்கப்படும் வெளியீடு: Count 2: 2
```

### Output

```text
Count 1: 1
Count 2: 2
```

### Observation

JavaScript captures the scope environment at execution time, preserving state variables like `count` in memory, but does not prevent direct type modifications if outer variables are exposed or mutated incorrectly.

JavaScript ரன்டைமில் மாறிகளை நினைவகத்தில் பாதுகாக்கும். ஆனால் அவற்றின் மீது தவறான செயல்பாடுகள் நடப்பதைத் தடுக்க வகை பாதுகாப்பு ஏதும் இல்லை.

---

## TypeScript Example

```typescript
// TypeScript closures provide type safety for captured variables, ensuring strict type bounds.
// Captured variables-களுக்கு வகை பாதுகாப்பை வழங்கி, TypeScript closures இயங்குகிறது.
function createCounter() {
    let count: number = 0; // Lexically captured typed variable

    return {
        increment: (): number => {
            count += 1;
            return count;
        },
        getValue: (): number => {
            return count;
        }
    };
}

const counter = createCounter();
console.log("Count 1:", counter.increment());
console.log("Count 2:", counter.increment());

// Attempting to assign incompatible values to captured state is protected by compilation types.
// பிடிபட்ட மாறிகளுக்கு தவறான தரவு வகையை ஒதுக்கீடு செய்ய முயல்வது தடுக்கப்படும்.
// In TypeScript, 'count' remains strictly bounded to type number.
```

### Output

```text
Count 1: 1
Count 2: 2
```

### Observation

TypeScript locks down the captured variables within closures with strict static annotations, ensuring that operations inside inner functions adhere to the verified contracts.

விருப்ப உள்கூறு செயல்பாடுகளின் போது பிடிபடும் மாறிகளைத் துல்லியமான வகை கட்டுப்பாடுகளுடன் TypeScript பாதுகாக்கிறது.

---

## JavaScript vs TypeScript

| Feature | JavaScript | TypeScript |
| ------- | ---------- | ---------- |
| Captured Variable Safety | Weak (no warnings if types change inside the closure) | Strong (checks that modifications match the declared type) |
| Return Type Inference | Dynamic lookup | Static verification of return types for inner functions |
| Encapsulation Security | Private state through lexical scope (no compiler-enforced access modifiers needed) | Combines lexical scoping with compiler type safety checks |

---

## Real-World Example | நடைமுறை உதாரணம்

Think of a student's backpack. When a student leaves the school building (when the outer function completes execution), their backpack stays with them. Inside the backpack, they have notebooks and pencils (lexically captured variables). Wherever they go, they can open the backpack and write in their notebooks (inner function operations). TypeScript's compiler ensures they only put valid items (correct datatypes) into that backpack.

ஒரு மாணவனின் பள்ளிப் பையை (backpack) நினைத்துப் பாருங்கள். பள்ளி முடிந்து வீடு திரும்பிய பிறகும் (outer function முடிந்த பின்பும்) பை அவனிடமே இருக்கும். அதில் உள்ள குறிப்பேடுகளை (captured variables) அவன் எங்கு சென்றாலும் பயன்படுத்தலாம். TypeScript கம்பைலர் அந்த பைக்குள் சரியான பொருட்கள் (correct datatypes) மட்டுமே வைக்கப்படுவதை உறுதி செய்கிறது.

---

## Advantages | நன்மைகள்

| Benefit | Description |
| ------- | ----------- |
| Data Encapsulation | Allows creating truly private state variables that cannot be accessed directly from the outside. |
| Stateful Factories | Enables generating functions with unique, isolated state memories (e.g. unique ID generators). |
| Static Security | Assures captured states do not suffer from silent type mutations over time. |

---

## Interview Question

### How do closures retain access to outer variables in memory, and what is a lexical environment?

A lexical environment is a structure that holds identifier-variable mappings. In JavaScript and TypeScript, when a function is created, it retains a reference to the lexical environment in which it was declared. Even after the outer function has popped off the call stack, the runtime garbage collector does not clean up the outer function's scope variables because the inner function still holds active references to them.

ஒவ்வொரு function-ம் உருவாக்கப்படும் போது அது அறிவிக்கப்பட்ட சூழலை (lexical environment) நினைவில் வைத்திருக்கும். வெளிப்புறக் கூறு முடிந்தாலும், உள்கூறு அந்த மாறிகளைக் கொண்டிருப்பதால் நினைவகத்தில் இருந்து அவை அழிக்கப்பட மாட்டாது.

---

## Summary | சுருக்கம்

* Inner functions retain references to outer scope variables.
  உள்கூறுகள் வெளிப்புற மாறிகளை நினைவகத்தில் தொடர்ந்து தக்கவைத்துக் கொள்ளும்.
* Useful for creating private variables and stateful helper modules.
  தனிப்பட்ட மாறிகள் மற்றும் நிலைகொண்ட செயல்பாடுகளை உருவாக்கப் பயனுள்ளது.
* Restricts captured variables to strict type constraints in TypeScript.
  பிடிபடும் மாறிகளுக்கு கடுமையான வகை கட்டுப்பாடுகளை TypeScript விதிக்கிறது.
* Binds functions to their birth scopes, eliminating memory loss.
  செயல்பாடுகளை அவற்றின் தொடக்கச் சூழலுடன் இணைத்து நினைவக இழப்பைத் தடுக்கிறது.
