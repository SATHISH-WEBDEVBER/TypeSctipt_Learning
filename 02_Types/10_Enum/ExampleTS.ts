// Enums act like a compass providing a closed set of choices.
// Enums என்பது வரையறுக்கப்பட்ட விருப்பங்களை வழங்கும் திசைகாட்டி போன்றது.
enum Direction {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
}

function move(direction: Direction) {
    console.log("Moving direction:", direction);
}

// Passing a valid enum value works as expected.
// சரியான enum மதிப்பை அனுப்பும்போது எதிர்பார்த்தபடி செயல்படுகிறது.
move(Direction.North);
// Expected Output: Moving direction: NORTH
// எதிர்பார்க்கப்படும் வெளியீடு: Moving direction: NORTH

// Passing invalid strings is blocked at compile time.
// தவறான உரை மதிப்புகளை அனுப்புவது கம்பைல் நேரத்திலேயே தடுக்கப்படும்.
// move("UP-SIDE-DOWN");