# Object

## Definition | வரையறை

An object is used to store multiple related values as key-value pairs.

Object என்பது தொடர்புடைய பல values-ஐ key-value pairs ஆக சேமிக்க பயன்படுகிறது.

---

## When to Use

* User Information
* Product Details
* Employee Records
* Configuration Settings
* Real-World Entities
* பயனர் தகவல்கள்
* பொருள் விவரங்கள்
* ஊழியர் பதிவுகள்
* அமைப்பு தகவல்கள்
* நிஜ உலக தகவல்கள்

---

## JavaScript Example

```javascript
var student = {
  name: "Sathish",
  age: 21
};

student.age = "Twenty One";
```

### Output

```text
{
  name: "Sathish",
  age: "Twenty One"
}
```

### Observation

JavaScript allows changing the datatype of object properties.

Object property datatype-ஐ JavaScript மாற்ற அனுமதிக்கிறது.

---

## TypeScript Example

```typescript
var student: {
  name: string;
  age: number;
};

student.age = "Twenty One";
```

### Output

```text
Type Error
```

### Observation

TypeScript validates property datatypes inside objects.

Object property datatype-களை TypeScript சரிபார்க்கிறது.

---

## Common Object Structure

```typescript
var employee = {
  id: 101,
  name: "Sathish",
  isActive: true
};
```

---

## Real-World Example

```typescript
var product = {
  id: 1,
  name: "Laptop",
  price: 55000
};
```

Objects help organize related information in a single structure.

தொடர்புடைய தகவல்களை ஒரே அமைப்பில் சேமிக்க objects பயன்படுகின்றன.

---

## Advantages

| Benefit             | Description                         |
| ------------------- | ----------------------------------- |
| Organized Data      | Stores related information together |
| Easy Access         | Access values using keys            |
| Real-World Modeling | Represents real entities            |

---

## Summary

* Stores data as key-value pairs.
* Groups related information together.
* Represents real-world entities.
* TypeScript validates property types.
