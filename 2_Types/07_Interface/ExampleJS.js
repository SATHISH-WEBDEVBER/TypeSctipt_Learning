// In JavaScript, there are no interfaces to enforce object structures.
// JavaScript-ல் object அமைப்புகளைக் கட்டுப்படுத்த interfaces இல்லை.
function printEmployee(employee) {
    console.log("Employee Name:", employee.name);
    console.log("Employee ID:", employee.id);
}

// Creating a valid employee object.
// சரியான employee object உருவாக்கப்படுகிறது.
var emp = { id: 101, name: "Sathish" };
printEmployee(emp);
// Expected Output: Employee Name: Sathish
// Expected Output: Employee ID: 101
// எதிர்பார்க்கப்படும் வெளியீடு: Employee Name: Sathish
// எதிர்பார்க்கப்படும் வெளியீடு: Employee ID: 101

// Accessing misspelled properties returns undefined silently.
// எழுத்துப்பிழை கொண்ட property-ஐ அணுகும்போது warning இன்றி undefined கிடைக்கும்.
var invalidEmp = { id: 102, fullName: "Sathish" };
printEmployee(invalidEmp);
// Expected Output: Employee Name: undefined
// Expected Output: Employee ID: 102
// எதிர்பார்க்கப்படும் வெளியீடு: Employee Name: undefined
// எதிர்பார்க்கப்படும் வெளியீடு: Employee ID: 102