// TypeScript locks the compartment so only numeric tickets are allowed.
// எண் டிக்கெட்டுகளை மட்டுமே அனுமதிக்கும் வகையில் TypeScript ரயில் பெட்டியைப் பூட்டுகிறது.
var prices: number[] = [100, 200, 300];
console.log("Prices:", prices);
// Expected Output: Prices: [ 100, 200, 300 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Prices: [ 100, 200, 300 ]

// Attempting to push a string value into a number array causes an error.
// number array-ல் string மதிப்பைச் சேர்க்க முயற்சித்தால் பிழை ஏற்படும்.
// prices.push("Free");

// TypeScript guarantees that all array items are uniform, allowing safe calculations.
// அனைத்து array உறுப்புகளும் ஒரே வகையாக இருப்பதை உறுதி செய்வதன் மூலம் பாதுகாப்பான கணக்கீட்டை TypeScript வழங்குகிறது.
var total: number = 0;
prices.forEach(function (price) {
    total += price;
});
console.log("Total Price:", total);
// Expected Output: Total Price: 600
// எதிர்பார்க்கப்படும் வெளியீடு: Total Price: 600
