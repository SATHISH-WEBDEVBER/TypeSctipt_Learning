# Default Parameters

## Definition | வரையறை

A Default Parameter is a function parameter that is automatically initialized with a default value if no argument is passed (or if `undefined` is passed) when calling the function. In TypeScript, you declare them by assigning a value directly in the signature (e.g. `paramName: type = defaultValue`).

Default Parameter (இயல்புநிலை அளபுரு) என்பது ஒரு function-ஐ அழைக்கும்போது மதிப்பு எதுவும் கடத்தப்படாவிட்டால் (அல்லது `undefined` கடத்தப்பட்டால்) தானாகவே ஒரு தொடக்க மதிப்பை எடுத்துக்கொள்ளும் அமைப்பாகும்.

---

## Why It Matters | ஏன் இது முக்கியம்?

In dynamic environments, omission of arguments often leads to calculations using `undefined`, resulting in NaN bugs or errors. JavaScript ES6 introduced default parameters to handle this, but does not prevent a caller from passing mismatched datatypes (like passing a number instead of a string). TypeScript combines ES6 defaults with strict compile-time type validation, ensuring that both passed arguments and default values conform to the expected type contract.

தவறவிடப்படும் அளபுருக்கள் ரன்டைமில் `NaN` அல்லது பிற பிழைகளுக்கு வழிவகுக்கின்றன. JavaScript ES6 இயல்புநிலை அளபுருக்களை அறிமுகப்படுத்தினாலும், தவறான தரவு வகை கடத்தப்படுவதைத் தடுப்பதில்லை. TypeScript இயல்புநிலை மதிப்புகளுடன் வகை பாதுகாப்பையும் இணைத்து பிழைகளைத் தடுக்கிறது.
