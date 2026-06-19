# Type Alias

## Definition | வரையறை

A Type Alias creates a custom name for a type.

Type Alias என்பது ஒரு type-க்கு custom பெயர் வழங்க பயன்படுகிறது.

---

## Why Use Type Alias?

Type aliases improve readability and reduce repetition.

Repeated type definitions-ஐ தவிர்த்து code-ஐ எளிமையாக்குகிறது.

---

## Syntax

```typescript
type User = {
  id: number;
  name: string;
};
```

---

## JavaScript Example

JavaScript does not provide Type Alias support.

JavaScript-ல் Type Alias support இல்லை.

---

## TypeScript Example

```typescript
type User = {
  id: number;
  name: string;
  isActive: boolean;
};
```

---

## Real-World Example

```typescript
type Employee = {
  id: number;
  name: string;
  department: string;
};
```

Applications often use type aliases to represent reusable business entities.

Reusable business entities-ஐ உருவாக்க Type Alias பயன்படுத்தப்படுகிறது.

---

## Interface vs Type Alias

| Feature          | Interface | Type Alias |
| ---------------- | --------- | ---------- |
| Object Structure | Yes       | Yes        |
| Union Types      | No        | Yes        |
| Extendable       | Yes       | Yes        |
| Reusable         | Yes       | Yes        |

---

## Advantages

| Benefit      | Description                 |
| ------------ | --------------------------- |
| Reusable     | Define once, use many times |
| Readable     | Cleaner code                |
| Maintainable | Easier updates              |
| Flexible     | Supports complex types      |

---

## Summary

* Creates custom types.
* Improves readability.
* Reduces duplication.
* Supports reusable type definitions.
