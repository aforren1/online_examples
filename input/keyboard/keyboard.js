var game = new Phaser.Game(400, 400, Phaser.CANVAS, 'phaser-example', {
    create: create
});
  
  // (open console to actually see something interesting)
  var key_array = Array();
  var starttime = Date.now();
  function create() {
    keys = game.input.keyboard.addKeys({'h': Phaser.Keyboard.H, 'u': Phaser.Keyboard.U});
    keys.h.onDown.add(onDownFn, this);
    keys.u.onDown.add(onDownFn, this);
  }
  
  function onDownFn(key) {
    console.log(key.timeDown - starttime);
    console.log(key.event.key);
    key_array.push([key.timeDown - starttime, key.event.key]);
    console.log(key_array.length)
  }
