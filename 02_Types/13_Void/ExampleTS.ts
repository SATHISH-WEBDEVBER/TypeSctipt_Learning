// TypeScript uses "void" like a postbox: it tells the compiler that the function returns nothing.
// "void" என்பது தபால் பெட்டி போன்றது: function எதையும் திருப்பித் தராது என்பதை கம்பைலருக்குக் கூறுகிறது.
function logMessage(message: string): void {
    console.log("Log:", message);
    // Explicitly returning values here is blocked by the compiler.
    // இங்கு மதிப்புகளைத் திருப்பித் தருவது கம்பைலரால் தடுக்கப்படும்.
}

var result: void = logMessage("Action completed");
// Expected Output: Log: Action completed
// எதிர்பார்க்கப்படும் வெளியீடு: Log: Action completed

// Attempting to assign or use a void return value in calculations causes an error.
// Void திரும்பும் மதிப்பை கணக்கீடுகளிலோ அல்லது தர்க்கங்களிலோ பயன்படுத்த முயன்றால் பிழை ஏற்படும்.
// console.log(result);