var config = {
    type: Phaser.Auto,
    width: 800,
    height: 600,
    backgroundColor: "#5A9495",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 200}
        }
    },
    scene: [Example1],
}

var ground;
var player;

var game = new Phaser.Game(config);