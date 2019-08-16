// final i is defined and equals 5 due to var keyword

function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(`final: ${i}`);
}

// final i is undefined and causes error due to let keyword

function loop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(`final: ${i}`);
}