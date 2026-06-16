# String

## Definition | வரையறை

A string is used to store textual data.

String datatype text values-ஐ சேமிக்க பயன்படுகிறது.

---

## When to Use

* Names
* Messages
* Addresses
* User Input
* Labels
* பெயர்கள்
* தகவல்கள்
* முகவரிகள்
* பயனர் உள்ளீடுகள்
* தலைப்புகள்

---

## JavaScript Example

```javascript
var firstName = "Sathish";

firstName = 100;
```

### Output

```text
Sathish
100
```

### Observation

JavaScript allows changing the datatype of a variable.

Variable datatype-ஐ JavaScript மாற்ற அனுமதிக்கிறது.

---

## TypeScript Example

```typescript
var firstName: string = "Sathish";

firstName = 100;
```

### Output

```text
Type Error
```

### Observation

TypeScript does not allow assigning a number to a string variable.

string variable-க்கு number value assign செய்ய TypeScript அனுமதிக்காது.

---

## Common String Values

| Example       | Description |
| ------------- | ----------- |
| "Sathish"     | Name        |
| "Chennai"     | City        |
| "India"       | Country     |
| "Hello World" | Message     |

---

## Real-World Example

```typescript
var email: string = "user@example.com";
```

Email values should always be stored as text.

Email values எப்போதும் text ஆகவே சேமிக்கப்பட வேண்டும்.

---

## Advantages

| Benefit     | Description              |
| ----------- | ------------------------ |
| Readable    | Easy to understand       |
| Flexible    | Supports text operations |
| Widely Used | Common in applications   |

---

-

## Summary

* Used to store text values.
* Declared using the string datatype.
* Supports names, messages, and labels.
* TypeScript prevents invalid assignments.
