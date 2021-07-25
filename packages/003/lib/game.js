// create new scene
let gameScene = new Phaser.Scene("Game");

// load assets
gameScene.preload = function () {
  // load images
  this.load.image("background", "assets/background.png");
  this.load.image("player", "assets/player.png");
  this.load.image("enemy", "assets/dragon.png");
};

// called once after preload ends
gameScene.create = function () {
  // create background sprite
  let bg = this.add.sprite(0, 0, "background");
  // change the origin to top left corner
  bg.setOrigin(0, 0);

  // create player

  let player = this.add.sprite(50, 180, "player");
  player.setScale(0.5, 0.5);

  // create enemy
  let enemy1 = this.add.sprite(250, 180, "enemy");
  enemy1.setScale(2, 2);

  // create enemy second
  let enemy2 = this.add.sprite(450, 180, "enemy");

  // flip
  enemy1.flipX = true;
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
