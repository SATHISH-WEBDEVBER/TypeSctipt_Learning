enum Direction {
    up,
    down,
    left,
    right
}

function move(direction) {
    console.log(`Moving ${Direction[direction].toLowerCase()}`);
}

move(Direction.up);