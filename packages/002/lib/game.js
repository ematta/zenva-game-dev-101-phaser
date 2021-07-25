// create new scene
let gameScene = new Phaser.Scene("Game");

// load assets
gameScene.preload = function () {
  // load images
  this.load.image("background", "assets/background.png");
  this.load.image("player", "assets/player.png");
};

// called once after preload ends
gameScene.create = function () {
  // create background sprite
  let bg = this.add.sprite(0, 0, "background");
  // change the origin to top left corner
  bg.setOrigin(0, 0);
};

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // phaser will use webgl if available, if not it will use canvas
  width: 640,
  height: 360,
  scene: gameScene,
};
// create a new game, pass the configuration
let game = new Phaser.Game(config);
