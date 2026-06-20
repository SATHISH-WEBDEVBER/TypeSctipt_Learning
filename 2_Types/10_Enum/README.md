# Enum

## Definition | வரையறை

An Enum is a collection of named constant values.

Enum என்பது பெயரிடப்பட்ட constant values-களின் தொகுப்பாகும்.

---

## Why Use Enum?

Enums make code more readable and prevent the use of magic values.

Magic values பயன்படுத்துவதை தவிர்த்து code-ஐ தெளிவாக மாற்றுகிறது.

---

## Syntax

```typescript
enum OrderStatus {
  Pending,
  Approved,
  Rejected
}
```

---

## JavaScript Example

JavaScript does not provide enum support.

JavaScript-ல் Enum support இல்லை.

---

## TypeScript Example

```typescript
enum OrderStatus {
  Pending,
  Approved,
  Rejected
}
```

---

## Real-World Example

```typescript
enum UserRole {
  Admin,
  Manager,
  Employee
}
```

Enums are commonly used for roles, statuses, and categories.

Roles, status மற்றும் category values-க்கு Enum அதிகமாக பயன்படுத்தப்படுகிறது.

---

## Advantages

| Benefit         | Description             |
| --------------- | ----------------------- |
| Readability     | Easy to understand      |
| Consistency     | Fixed values            |
| Type Safety     | Prevents invalid values |
| Maintainability | Easy to manage          |

---

## Summary

* Stores named constants.
* Improves readability.
* Prevents magic values.
* Commonly used for roles and statuses.
