// create new scene
let gameScene = new Phaser.Scene("Game");
// set the configuration of the game
let config = {
  type: Phaser.AUTO, // phaser will use webgl if available, if not it will use canvas
  width: 640,
  height: 480,
  scene: gameScene,
};
// create a new game, pass the configuration
let game = new Phaser.Game(config);
