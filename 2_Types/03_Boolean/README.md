# Boolean

## Definition | வரையறை

A boolean is used to store one of two values: true or false.

Boolean datatype true அல்லது false என்ற இரண்டு மதிப்புகளில் ஒன்றை மட்டும் சேமிக்க பயன்படுகிறது.

---

## When to Use

* Login Status
* User Verification
* Permission Checks
* Feature Toggles
* Conditions
* Login நிலை
* பயனர் சரிபார்ப்பு
* அனுமதி சரிபார்ப்பு
* Feature கட்டுப்பாடு
* நிபந்தனைகள்

---

## JavaScript Example

```javascript
var isLoggedIn = true;

isLoggedIn = "Yes";
```

### Output

```text
true
Yes
```

### Observation

JavaScript allows changing the datatype of a variable.

Variable datatype-ஐ JavaScript மாற்ற அனுமதிக்கிறது.

---

## TypeScript Example

```typescript
var isLoggedIn: boolean = true;

isLoggedIn = "Yes";
```

### Output

```text
Type Error
```

### Observation

TypeScript does not allow assigning a string value to a boolean variable.

boolean variable-க்கு string value assign செய்ய TypeScript அனுமதிக்காது.

---

## Common Boolean Values

| Value | Description   |
| ----- | ------------- |
| true  | Yes / Enabled |
| false | No / Disabled |

---

## Real-World Example

```typescript
var isEmailVerified: boolean = true;
```

This value indicates whether a user's email has been verified.

இந்த value பயனரின் email verify செய்யப்பட்டதா என்பதை குறிக்கிறது.

---

## Advantages

| Benefit            | Description             |
| ------------------ | ----------------------- |
| Simple Logic       | Easy condition handling |
| Better Readability | Improves code clarity   |
| Decision Making    | Useful for control flow |

---

## Summary

* Stores true or false values.
* Commonly used in conditions.
* Improves decision-making logic.
* TypeScript prevents invalid assignments.
