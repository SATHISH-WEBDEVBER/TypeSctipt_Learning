# Interface

## Definition | வரையறை

An Interface defines the structure that an object must follow.

Interface என்பது ஒரு object பின்பற்ற வேண்டிய structure-ஐ வரையறுக்கிறது.

---

## Why Use Interface?

Interfaces help maintain consistency across objects.

Objects அனைத்தும் ஒரே structure-ஐ பின்பற்ற Interfaces உதவுகின்றன.

---

## Syntax

```typescript
interface User {
  id: number;
  name: string;
}
```

---

## JavaScript Example

JavaScript provides no built-in interface support.

JavaScript-ல் Interface support இல்லை.

---

## TypeScript Example

```typescript
interface User {
  id: number;
  name: string;
  isActive: boolean;
}
```

---

## Real-World Example

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}
```

E-commerce applications commonly use interfaces to define product structures.

E-commerce applications-ல் product structure வரையறுக்க Interface அதிகமாக பயன்படுத்தப்படுகிறது.

---

## Advantages

| Benefit     | Description           |
| ----------- | --------------------- |
| Consistency | Same object structure |
| Readability | Easy to understand    |
| Reusability | Reuse across files    |
| Type Safety | Prevents mistakes     |

---

## Summary

* Defines object structure.
* Improves code consistency.
* Supports reusability.
* Provides type safety.
