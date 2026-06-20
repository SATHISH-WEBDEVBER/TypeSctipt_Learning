# Tuple

## Definition | வரையறை

A Tuple is an array with a fixed number of elements and predefined datatypes.

Tuple என்பது நிர்ணயிக்கப்பட்ட எண்ணிக்கையிலான elements மற்றும் datatype-களை கொண்ட array ஆகும்.

---

## Why Use Tuple?

Tuples ensure that values are stored in a specific order and datatype.

Values-ஐ குறிப்பிட்ட வரிசையிலும் datatype-லும்தான் சேமிக்க Tuple உதவுகிறது.

---

## Syntax

```typescript
let employee: [number, string, boolean];
```

---

## JavaScript Example

JavaScript does not provide tuple support.

JavaScript-ல் Tuple support இல்லை.

---

## TypeScript Example

```typescript
let employee: [number, string, boolean] = [
  101,
  "Sathish",
  true
];
```

---

## Real-World Example

```typescript
let user: [number, string] = [
  1,
  "Sathish"
];
```

Tuples are useful when the position of values matters.

Value-களின் வரிசை முக்கியமான இடங்களில் Tuple பயன்படுகிறது.

---

## Advantages

| Benefit         | Description                  |
| --------------- | ---------------------------- |
| Fixed Structure | Predetermined order          |
| Type Safety     | Prevents invalid assignments |
| Readability     | Clear value meaning          |

---

## Summary

* Fixed-size array.
* Predefined datatypes.
* Order matters.
* Provides type safety.
