// JavaScript treats arrays dynamically, allowing different datatypes in the same list.
// JavaScript, ஒரே பட்டியலில் வெவ்வேறு வகையான மதிப்புகளைச் சேமிக்க அனுமதிக்கிறது.
var shoppingCart = [100, 200, 300];
console.log("Cart Items:", shoppingCart);
// Expected Output: Cart Items: [ 100, 200, 300 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Cart Items: [ 100, 200, 300 ]

// We can push a string to a numeric array.
// நாம் எண் பட்டியலில் உரை மதிப்பைச் சேர்க்கலாம்.
shoppingCart.push("Free Item");
console.log("Updated Cart:", shoppingCart);
// Expected Output: Updated Cart: [ 100, 200, 300, 'Free Item' ]
// எதிர்பார்க்கப்படும் வெளியீடு: Updated Cart: [ 100, 200, 300, 'Free Item' ]

// Using array methods like map on mixed arrays can cause unexpected string conversions.
// கலவையான arrays-ல் map போன்ற முறைகளைப் பயன்படுத்தும்போது எதிர்பாராத முடிவுகள் ஏற்படும்.
var discountedCart = shoppingCart.map(function (price) {
    return price * 0.9;
});
console.log("Discounted Cart:", discountedCart);
// Expected Output: Discounted Cart: [ 90, 180, 270, NaN ]
// எதிர்பார்க்கப்படும் வெளியீடு: Discounted Cart: [ 90, 180, 270, NaN ]
