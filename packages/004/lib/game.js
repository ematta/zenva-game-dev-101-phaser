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
  this.bg = this.add.sprite(0, 0, "background");
  // change the origin to top left corner
  this.bg.setOrigin(0, 0);

  // create player

  this.player = this.add.sprite(50, 180, "player");
  this.player.setScale(0.5, 0.5);
  console.log(this.player);

  // create enemy
  this.enemy1 = this.add.sprite(250, 180, "enemy");
  this.enemy1.setScale(3);
  // enemy1.setAngle(-45);
  // enemy1.rotation = Math.PI / 4;
  // enemy1.setRotation(-Math.PI / 4);
  // enemy1.setOrigin(0, 0);
  // enemy1.setRotation(Math.PI / 4);
};

// called up to 60 times per second

gameScene.update = function () {
  // this.enemy1.x += 0.1;
  // this.enemy1.angle += 1;

  // MAKE THE PLAYER GROW!!!
  if (this.player.scaleX < 2) {
    this.player.setScale(this.player.scale + 0.01, this.player.scale + 0.01);
  }
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
