var game = new Phaser.Game(400, 400, Phaser.CANVAS, 'phaser-example', {
    create: create
});

function create() {
    game.input.addPointer();
    game.input.onTap.add(onDownFn, this);
}

function onDownFn() {
    game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
    console.log([game.input.x, game.input.y]);
}
