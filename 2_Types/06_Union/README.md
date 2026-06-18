# Union

## Definition | வரையறை

A union type allows a variable to store more than one specified datatype.

Union Type என்பது ஒரு variable-ல் ஒன்றுக்கு மேற்பட்ட datatype-களை அனுமதிக்கிறது.

---

## When to Use

* IDs
* API Responses
* Form Values
* Flexible Inputs
* Optional Data Formats
* அடையாள எண்கள்
* API பதில்கள்
* Form தரவுகள்
* பலவகை உள்ளீடுகள்
* மாற்றக்கூடிய தரவு வடிவங்கள்

---

## Syntax

```typescript
var value: string | number;
```

---

## JavaScript Example

```javascript
var userId = 101;

userId = "EMP101";
```

### Observation

JavaScript allows any datatype without explicit rules.

JavaScript datatype கட்டுப்பாடுகளை வழங்காது.

---

## TypeScript Example

```typescript
var userId: number | string = 101;

userId = "EMP101";
```

### Output

```text
Valid
```

### Observation

TypeScript allows only the specified datatypes.

குறிப்பிட்ட datatype-களை மட்டுமே TypeScript அனுமதிக்கிறது.

---

## Common Union Types

```typescript
var id: number | string;

var status: boolean | string;

var score: number | null;
```

---

## Real-World Example

```typescript
var orderId: number | string;

orderId = 1001;

orderId = "ORD1001";
```

Some systems may use either numeric or string IDs.

சில அமைப்புகள் number அல்லது string ID-களை பயன்படுத்தலாம்.

---

## Advantages

| Benefit   | Description                  |
| --------- | ---------------------------- |
| Flexible  | Supports multiple datatypes  |
| Type Safe | Restricts unsupported values |
| Reusable  | Useful in many scenarios     |

---

## Summary

* Supports multiple datatypes.
* Uses the pipe (`|`) operator.
* Provides flexibility with type safety.
* Commonly used in APIs and form handling.
