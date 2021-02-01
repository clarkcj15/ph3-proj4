class Instance extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, key, type) {
        super(scene, x, y, key);

        this.scene = scene;
        this.scene.add.existing(this);
      
        this.scene.physics.world.enableBody(this, 0);
    }
}

    class Player extends Instance {
        constructor(scene, x, y, key) {
            super(scene, x, y, "Player");
            this.setData("speed", 300);
        }
        moveUp() {
            this.body.velocity.y = -this.getData("speed");
          }
          moveDown() {
            this.body.velocity.y = this.getData("speed");
          }
          moveLeft() {
            this.body.velocity.x = -this.getData("speed");
          }
          moveRight() {
            this.body.velocity.x = this.getData("speed");
          }
    }