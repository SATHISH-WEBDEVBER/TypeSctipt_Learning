# Unknown

## Definition | வரையறை

The unknown type can store any value, but TypeScript requires type checking before using it.

unknown datatype எந்த value-யையும் சேமிக்க முடியும். ஆனால் பயன்படுத்துவதற்கு முன் type checking செய்ய வேண்டும்.

---

## Why Use Unknown?

Unknown provides flexibility while maintaining type safety.

Type safety-ஐ பாதுகாத்துக்கொண்டு flexibility வழங்குகிறது.

---

## Syntax

```typescript
let value: unknown;
```

---

## JavaScript Example

JavaScript does not provide an unknown datatype.

JavaScript-ல் unknown datatype இல்லை.

---

## TypeScript Example

```typescript
let userData: unknown = "Sathish";

userData = 100;
```

---

## Real-World Example

```typescript
let apiResponse: unknown;
```

API response datatype தெரியாத சூழ்நிலைகளில் unknown பயன்படுத்தப்படுகிறது.

---

## Unknown vs Any

| Feature             | Unknown | Any |
| ------------------- | ------- | --- |
| Stores Any Value    | Yes     | Yes |
| Type Safe           | Yes     | No  |
| Requires Type Check | Yes     | No  |
| Recommended         | Yes     | No  |

---

## Advantages

| Benefit            | Description      |
| ------------------ | ---------------- |
| Type Safe          | Safer than any   |
| Flexible           | Stores any value |
| Better Reliability | Reduces errors   |

---

## Summary

* Stores any value.
* Safer than any.
* Requires type checking.
* Recommended over any in most cases.
