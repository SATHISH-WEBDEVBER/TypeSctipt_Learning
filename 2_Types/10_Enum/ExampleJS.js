// In JavaScript, enums do not exist, so we use plain objects.
// JavaScript-ல் enums இல்லை, எனவே நாம் சாதாரண objects-ஐப் பயன்படுத்துகிறோம்.
var Direction = {
    NORTH: "NORTH",
    SOUTH: "SOUTH",
    EAST: "EAST",
    WEST: "WEST"
};

function move(direction) {
    console.log("Moving direction:", direction);
}

// Passing a valid direction works.
// சரியான திசையை அனுப்பும்போது செயல்படுகிறது.
move(Direction.NORTH);
// Expected Output: Moving direction: NORTH
// எதிர்பார்க்கப்படும் வெளியீடு: Moving direction: NORTH

// JavaScript allows passing arbitrary strings, causing silent logic bugs.
// JavaScript எதேச்சையான உரை மதிப்புகளையும் அனுமதிப்பதால் மறைமுகமான தர்க்கப் பிழைகள் ஏற்படுகின்றன.
move("UP-SIDE-DOWN");
// Expected Output: Moving direction: UP-SIDE-DOWN
// எதிர்பார்க்கப்படும் வெளியீடு: Moving direction: UP-SIDE-DOWN