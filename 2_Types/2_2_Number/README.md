# Number

## Definition | வரையறை

A number is used to store numeric values.

Number datatype எண்களை சேமிக்க பயன்படுகிறது.

---

## When to Use

* Age
* Salary
* Marks
* Price
* Quantity
* வயது
* சம்பளம்
* மதிப்பெண்கள்
* விலை
* அளவு

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

JavaScript allows changing the datatype of a variable.

Variable datatype-ஐ JavaScript மாற்ற அனுமதிக்கிறது.

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

TypeScript does not allow assigning a string value to a number variable.

number variable-க்கு string value assign செய்ய TypeScript அனுமதிக்காது.

---

## Common Number Values

| Example | Description |
| ------- | ----------- |
| 25      | Age         |
| 50000   | Salary      |
| 100     | Marks       |
| 999.99  | Price       |

---

## Real-World Example

```typescript
var productPrice: number = 1999;
```

Product prices should always be stored as numeric values.

Product விலைகள் எப்போதும் number value ஆக சேமிக்கப்பட வேண்டும்.

---

## Advantages

| Benefit               | Description             |
| --------------------- | ----------------------- |
| Supports Calculations | Mathematical operations |
| Accurate Storage      | Stores numeric values   |
| Easy Comparison       | Supports comparisons    |

---

-

## Summary

* Used to store numeric values.
* Supports integers and decimals.
* Useful for calculations.
* TypeScript prevents invalid assignments.
