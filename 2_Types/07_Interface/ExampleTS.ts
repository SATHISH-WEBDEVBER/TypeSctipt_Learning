// An interface acts like a business contract ensuring the employee structure.
// ஒரு interface என்பது employee அமைப்பை உறுதி செய்யும் வணிக ஒப்பந்தம் போன்றது.
interface Employee {
    id: number;
    name: string;
}

function printEmployee(employee: Employee) {
    console.log("Employee Name:", employee.name);
    console.log("Employee ID:", employee.id);
}

// Creating a valid object following the Employee contract.
// Employee ஒப்பந்தத்தைப் பின்பற்றி ஒரு சரியான object உருவாக்கப்படுகிறது.
var emp: Employee = { id: 101, name: "Sathish" };
printEmployee(emp);
// Expected Output: Employee Name: Sathish
// Expected Output: Employee ID: 101
// எதிர்பார்க்கப்படும் வெளியீடு: Employee Name: Sathish
// எதிர்பார்க்கப்படும் வெளியீடு: Employee ID: 101

// Attempting to create an object violating the contract causes an error.
// ஒப்பந்தத்தை மீறும் வகையில் ஒரு object-ஐ உருவாக்க முயன்றால் பிழை ஏற்படும்.
// var invalidEmp: Employee = { id: 102, fullName: "Sathish" };