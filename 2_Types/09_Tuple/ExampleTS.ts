// A Tuple locks the array length and defines the exact type for each index location.
// Tuple என்பது array-ன் நீளத்தைப் பூட்டி, ஒவ்வொரு இடத்திலும் உள்ள type-ஐத் துல்லியமாக வரையறுக்கிறது.
var point: [number, number] = [12.97, 80.27];
console.log("Point:", point);
// Expected Output: Point: [ 12.97, 80.27 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Point: [ 12.97, 80.27 ]

// Attempting to assign a string to a numeric index causes an error.
// எண் அமைப்பைக் கொண்ட இடத்தில் string-ஐ ஒதுக்க முயன்றால் பிழை ஏற்படும்.
// point[0] = "twelve";

// Attempting to violate the fixed layout of properties is blocked.
// வரையறுக்கப்பட்ட கட்டமைப்பை மீறும் செயல்பாடுகள் கம்பைல் நேரத்தில் தடுக்கப்படும்.
// point = [12.97, 80.27, "Chennai"];