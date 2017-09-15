var game = new Phaser.Game(600, 600, Phaser.CANVAS, "", {
    create: create,
    update: update
  });

var flag = 0;

function create() {
    circle = game.add.graphics(0, 0);
    circle.beginFill(0xffffff);
    circle.drawCircle(0, 0, game.camera.height);
    circle_sprite = game.add.sprite(game.camera.width/2, game.camera.height/2, circle.generateTexture());
    circle.destroy();
    circle_sprite.anchor.setTo(0.5, 0.5);
    circle_sprite.scale.setTo(0.2, 0.4);
}

function update() {
    circle_sprite.tint = Phaser.Color.getRandomColor(50, 255, 255);
}
