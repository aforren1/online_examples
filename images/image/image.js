var game = new Phaser.Game(400, 400, Phaser.CANVAS, 'phaser-example', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('cat', 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg');
}

function create() {
    s = game.add.image(game.camera.width/2, game.camera.height/2, 'cat'); // add image to center
    s.anchor.setTo(0.5, 0.5);
    s.rotation = 0.22;
    s.scale.setTo(0.1, 0.1);
}

function update() {
    s.rotation += 0.1;
}
