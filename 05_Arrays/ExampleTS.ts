// TypeScript supports two array syntaxes: bracket syntax (type[]) and generic syntax (Array<type>).
// TypeScript இரு வகையான array முறைகளை ஆதரிக்கிறது: அடைப்புக்குறி முறை (type[]) மற்றும் ஜெனரிக் முறை (Array<type>).
var shoppingCart: number[] = [100, 200, 300];
var invoiceIds: Array<string> = ["INV-01", "INV-02"];

console.log("Cart:", shoppingCart);
// Expected Output: Cart: [ 100, 200, 300 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Cart: [ 100, 200, 300 ]

// Pushing a string value into a number array is blocked by the compiler.
// number array-ல் string மதிப்பைச் சேர்க்க முயற்சிப்பது கம்பைலரால் தடுக்கப்படும்.
// shoppingCart.push("Free Item");

// TypeScript guarantees that mapping over a number array yields safe calculation results.
// number array-ல் map செயல்பாடுகளைச் செய்வது பாதுகாப்பான கணக்கீட்டைத் தரும் என TypeScript உறுதியளிக்கிறது.
var discountedCart: number[] = shoppingCart.map(function (price: number) {
    return price * 0.9;
});
console.log("Discounted Cart:", discountedCart);
// Expected Output: Discounted Cart: [ 90, 180, 270 ]
// எதிர்பார்க்கப்படும் வெளியீடு: Discounted Cart: [ 90, 180, 270 ]
