# Array

## Definition | வரையறை

An array is used to store multiple values in a single variable.

Array என்பது பல values-ஐ ஒரே variable-ல் சேமிக்க பயன்படுகிறது.

---

## When to Use

* Product Lists
* User Lists
* Categories
* Scores
* Collections of Data
* பொருட்கள் பட்டியல்
* பயனர் பட்டியல்
* வகைகள்
* மதிப்பெண்கள்
* தரவு தொகுப்புகள்

---

## JavaScript Example

```javascript
var fruits = ["Apple", "Orange", "Mango"];

fruits.push(100);
```

### Output

```text
["Apple", "Orange", "Mango", 100]
```

### Observation

JavaScript allows adding different datatypes to an array.

JavaScript array-ல் வேறு datatype values சேர்க்க முடியும்.

---

## TypeScript Example

```typescript
var fruits: string[] = ["Apple", "Orange", "Mango"];

fruits.push(100);
```

### Output

```text
Type Error
```

### Observation

TypeScript prevents adding a number to a string array.

string array-ல் number value சேர்க்க TypeScript அனுமதிக்காது.

---

## Common Array Values

| Example            | Description   |
| ------------------ | ------------- |
| ["Apple", "Mango"] | String Array  |
| [10, 20, 30]       | Number Array  |
| [true, false]      | Boolean Array |

---

## Real-World Example

```typescript
var students: string[] = [
  "Sathish",
  "Kumar",
  "Arun"
];
```

Arrays are useful when storing multiple related values.

தொடர்புடைய பல values-ஐ சேமிக்க arrays பயன்படுகின்றன.

---

## Advantages

| Benefit           | Description                    |
| ----------------- | ------------------------------ |
| Organized Storage | Stores multiple values         |
| Easy Iteration    | Loop through data              |
| Better Management | Manage collections efficiently |

---

## Summary

* Stores multiple values.
* Values are accessed using indexes.
* Improves data organization.
* TypeScript enforces array type safety.
