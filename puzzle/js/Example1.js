class Example1 extends Phaser.Scene {
    constructor() {
        super({ key: "Example1"});
    }
    preload() {
        this.load.image("background", 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611793099/EveningSky_wmwlur.jpg');
        this.load.image("ground", 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611869300/ground_djhx2a.png');
        this.load.spritesheet("ship", "https://res.cloudinary.com/dwpxepy1m/image/upload/v1612157361/sprPlayer_ockfo0.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.image('GRND', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611869300/ground_djhx2a.png');
        this.load.image('smBar', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611875724/newSmall_hn8arr.png');
        this.load.image('medBar', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611875724/newMedBar_ar1qct.png');
    }

    create () {
        
        this.add.image(300, 200, 'background');
        //Platform group
        ground = this.physics.add.staticGroup()

        //create the ground and call on various size platforms
        ground.create(400, 450, 'GRND').setScale(2).refreshBody();

        //Jumpable platforms
        ground.create(200, 100, 'medBar');
        ground.create(300, 250, 'smBar');

        this.anims.create({
            key: "ship",
            frames: this.anims.generateFrameNumbers('ship'),
            frameRate: 8,
            repeat: -1
        });
        // player.setBounce(0.2);
        // player.setCollideWorldBounds(true);
        
        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "ship"
            );
            console.log(this.player);
            
            // this.physics.add.collider(player, ground);


          this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
          this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
          this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
          this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    
    }
    update() {
        
    }
}