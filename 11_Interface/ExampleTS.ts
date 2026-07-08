// TypeScript introduces interfaces to establish strict structural contracts (blueprints) for objects.
// ஆப்ஜெக்ட்களுக்கான கடுமையான கட்டமைப்பு ஒப்பந்தங்களை உருவாக்க TypeScript-ல் interface பயன்படுத்தப்படுகிறது.
interface Employee {
    name: string;
    role: string;
}

function printEmployeeDetails(employee: Employee) {
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
}

var regularEmp: Employee = { name: "Sathish", role: "Developer" };
printEmployeeDetails(regularEmp);
// Expected Output: Name: Sathish
// Expected Output: Role: Developer
// எதிர்பார்க்கப்படும் வெளியீடு: Name: Sathish
// எதிர்பார்க்கப்படும் வெளியீடு: Role: Developer

// Objects that do not meet the structural contract are rejected during compilation.
// ஒப்பந்தத்தின் அமைப்பைப் பூர்த்தி செய்யாத ஆப்ஜெக்ட்கள் கம்பைலர் நேரத்திலேயே தடுக்கப்படும்.
// var brokenEmp = { username: "Guest" };
// printEmployeeDetails(brokenEmp);
