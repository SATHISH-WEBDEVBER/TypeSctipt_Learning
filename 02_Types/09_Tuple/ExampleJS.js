// JavaScript does not support tuples, treating them as regular flexible arrays.
// JavaScript-ல் tuples கிடையாது, அவை சாதாரண மற்றும் மாறக்கூடிய arrays போலவே செயல்படுகின்றன.
var point = [12.97, 80.27];
console.log("Point:", point);
// Expected Output: Point: [ 12.97, 80.27 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Point: [ 12.97, 80.27 ]

// JavaScript allows pushing extra elements, violating length requirements.
// JavaScript கூடுதல் உறுப்புகளைச் சேர்க்க அனுமதிக்கிறது, இதனால் நீளக் கட்டுப்பாடு மீறப்படுகிறது.
point.push("Chennai");
console.log("Updated Point:", point);
// Expected Output: Updated Point: [ 12.97, 80.27, 'Chennai' ]
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Point: [ 12.97, 80.27, 'Chennai' ]

// JavaScript allows swapping types at positions freely.
// JavaScript ஒவ்வொரு இடத்திலும் உள்ள types-ஐ எளிதாக மாற்ற அனுமதிக்கிறது.
point[0] = "twelve";
console.log("Corrupted Point:", point);
// Expected Output: Corrupted Point: [ 'twelve', 80.27, 'Chennai' ]
// எதிர்பார்க்கப்படும் வெளியீடு: Corrupted Point: [ 'twelve', 80.27, 'Chennai' ]