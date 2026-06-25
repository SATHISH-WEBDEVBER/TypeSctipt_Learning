// An array acts like a train compartment where JavaScript allows passengers of any type.
// ஒரு array என்பது JavaScript எந்தவொரு வகை பயணிகளையும் அனுமதிக்கும் ரயில் பெட்டி போன்றது.
var prices = [100, 200, 300];
console.log("Prices:", prices);
// Expected Output: Prices: [ 100, 200, 300 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Prices: [ 100, 200, 300 ]

// JavaScript allows pushing a string value into a number array.
// JavaScript ஒரு number array-ல் string மதிப்பைச் சேர்க்க அனுமதிக்கிறது.
prices.push("Free");
console.log("Updated Prices:", prices);
// Expected Output: Updated Prices: [ 100, 200, 300, 'Free' ]
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Prices: [ 100, 200, 300, 'Free' ]

// Performing calculation loops on mixed arrays leads to logical calculation failures (like NaN).
// கலவையான arrays-ல் கணக்கீட்டு வளையங்களை (loops) இயக்கும் போது கணக்கீட்டுப் பிழைகள் (NaN) ஏற்படுகின்றன.
var total = 0;
prices.forEach(function (price) {
    total += price;
});
console.log("Total Price:", total);
// Expected Output: Total Price: 600Free
// எதிர்பார்க்கப்படும் வெளியீடு: Total Price: 600Free
