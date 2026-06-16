# Strong Typing

## Definition | வரையறை

Strong Typing means a variable must follow the datatype assigned to it. Assigning a value of a different datatype will result in an error.

Strong Typing என்பது ஒரு variable-க்கு கொடுக்கப்பட்ட datatype-ஐ அது தொடர்ந்து பின்பற்ற வேண்டும் என்பதைக் குறிக்கிறது. வேறு datatype value கொடுத்தால் error ஏற்படும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

Strong Typing helps catch datatype-related mistakes during development, making applications more reliable and easier to maintain.

Strong Typing, datatype தொடர்பான தவறுகளை development நேரத்திலேயே கண்டறிந்து application-ஐ நம்பகமானதாகவும் பராமரிக்க எளிதாகவும் மாற்றுகிறது.

---

## JavaScript Example

```javascript
var age = 25;

age = "Twenty Five";
```

### Output

```text
25
Twenty Five
```

### Observation

JavaScript allows changing the datatype of a variable after it has been declared.

### கவனிக்க வேண்டியது

Variable உருவாக்கப்பட்ட பிறகு அதன் datatype-ஐ JavaScript மாற்ற அனுமதிக்கிறது.

---

## TypeScript Example

```typescript
var age: number = 25;

age = "Twenty Five";
```

### Output

```text
Type Error
```

### Observation

TypeScript does not allow assigning a string value to a variable declared as a number.

### கவனிக்க வேண்டியது

number datatype கொண்ட variable-க்கு string value assign செய்ய TypeScript அனுமதிக்காது.

---

## JavaScript vs TypeScript

| Feature               | JavaScript | TypeScript       |
| --------------------- | ---------- | ---------------- |
| Datatype Enforcement  | No         | Yes              |
| Type Safety           | Low        | High             |
| Compile-Time Checking | No         | Yes              |
| Error Detection       | Runtime    | Development Time |

---

## Real-World Example | நடைமுறை உதாரணம்

Consider an employee's salary:

```typescript
var salary: number = 50000;
```

The salary should always remain a number value.

```typescript
salary = "Fifty Thousand";
```

TypeScript prevents this mistake before the application runs.



ஒரு ஊழியரின் சம்பளத்தை எடுத்துக்கொள்ளலாம்:

```typescript
var salary: number = 50000;
```

சம்பளம் எப்போதும் number value ஆக இருக்க வேண்டும்.

```typescript
salary = "Fifty Thousand";
```

இந்த தவறை TypeScript program run ஆகும் முன்பே தடுக்கிறது.

---

## Advantages | நன்மைகள்

| English                    | தமிழ்                                         |
| -------------------------- | -------------------------------------------------- |
| Prevents datatype mistakes | Datatype தவறுகளை தடுக்கிறது       |
| Improves code quality      | Code தரத்தை மேம்படுத்துகிறது |
| Easier maintenance         | பராமரிக்க எளிதாகிறது            |
| Better IDE support         | IDE உதவி சிறப்பாக கிடைக்கும் |
| Reduces runtime errors     | Runtime errors குறைகின்றன                |

---

## Summary | சுருக்கம்

* TypeScript follows Strong Typing.
* Variables must follow their declared datatype.
* Invalid datatype assignments produce errors.
* Errors can be identified during development.
* Strong Typing improves code quality and reliability.
