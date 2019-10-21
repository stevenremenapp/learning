function bigBrother() {
    function littleBrother() {
        return `It's me!`;
    }
    return littleBrother();
    function littleBrother() {
        return `Nooooo, it's meee!`;
    }
}

bigBrother();

// returns `Nooooo, it's meee!` because both declarations are hoisted above the returned function call for littleBrother and the second function replaces the first after it is hoisted.