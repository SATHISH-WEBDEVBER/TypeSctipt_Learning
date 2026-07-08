// TypeScript enforces strict object blueprints to ensure matching types.
// சரியான வகைகளுடன் பொருந்துவதை உறுதி செய்ய TypeScript கடுமையான object மாதிரிகளை கட்டாயப்படுத்துகிறது.
var user: { id: number; name: string } = {
    id: 101,
    name: "Sathish"
};
console.log("User Name:", user.name);
// Expected Output: User Name: Sathish
// எதிர்பார்க்கப்படும் வெளியீடு: User Name: Sathish

// Attempting to assign a string to user.id (which is defined as a number) causes an error.
// number ஆக வரையறுக்கப்பட்ட user.id-க்கு string மதிப்பை வழங்க முயன்றால் பிழை ஏற்படும்.
// user.id = "One Zero One";

// Accessing misspelled properties or undeclared properties causes compile-time errors.
// மாதிரியில் இல்லாத அல்லது எழுத்துப்பிழை கொண்ட பண்புகளை அணுக முயற்சித்தால் பிழை ஏற்படும்.
// console.log(user.emial);
