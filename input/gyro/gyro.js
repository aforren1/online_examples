var game = new Phaser.Game(400, 400, Phaser.CANVAS, 'phaser-example', {
    create: create,
    render: render
});

window.addEventListener("deviceorientation", handleOrientation, true);

last_vals = Array()

function handleOrientation(o) {
    last_vals[0] = o.gamma;
    last_vals[1] = o.beta;
    console.log([o.gamma, o.beta]);
}

function create() {
}

function render() {
    game.debug.text('Gamma: ' + last_vals[0], 20, 50);
    game.debug.text('Beta: ' + last_vals[1], 20, 80);
}
