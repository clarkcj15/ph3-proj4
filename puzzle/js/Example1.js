var config = {
    type: Phaser.Auto,
    width: 800,
    height: 600,
    backgroundColor: "#D2B9F5",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};


var ground;
var player;
var cursors;

var game = new Phaser.Game(config);

// class Example1 extends Phaser.Scene {
//     constructor() {
//         super({ key: "Example1"});
//     }
    function preload() {
        this.load.image("background", 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611793099/EveningSky_wmwlur.jpg');
        this.load.image("ground", 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611869300/ground_djhx2a.png');
        this.load.spritesheet("ship", "https://res.cloudinary.com/dwpxepy1m/image/upload/v1612233815/undertale-sprite-pixel-art-super-nintendo-entertainment-system-undertale-sprites-character-png-820_694_mjqsuv.png",{
            frameWidth: 20,
            frameHeight: 20
        });
        this.load.image('GRND', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611869300/ground_djhx2a.png');
        this.load.image('smBar', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611875724/newSmall_hn8arr.png');
        this.load.image('medBar', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611875724/newMedBar_ar1qct.png');
    }

    function create() {
        
        this.add.image(300, 200, 'background');
        //Platform group
        ground = this.physics.add.staticGroup()
        
        //create the ground and call on various size platforms
        ground.create(400, 460, 'GRND').setScale(2).refreshBody();
        
        //Jumpable platforms
        ground.create(300, 250, 'medBar');
        ground.create(300, 250, 'smBar');
        
        player = this.physics.add.sprite(90, 580, 'ship');
        
        // this.anims.create({
        //     key: "ship",
        //     frames: this.anims.generateFrameNumbers('ship'),
        //     frameRate: 8,
        //     repeat: -1
        // });
        
        // this.player = new Player(
        //     this,
        //     this.game.config.width * 0.5,
        //     this.game.config.height * 0.5,
        //     "ship"
        // );
            // console.log(this.player);
        
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, ground);
        
        this.physics.world.bounds.width = ground.width;
        // this.physics.world.bounds.height = ground.height;
        
            
        // this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        // this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        // this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        // this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            
    }
    function update() {

        cursors = this.input.keyboard.createCursorKeys();

        player.body.velocity.x = 0;

        if (cursors.left.isDown)
    {
        player.body.setVelocityX(-50);
        // player.anims.play('left', true);
     }
     else if (cursors.right.isDown)
     {
         player.body.setVelocityX(50);
        //  player.anims.play('right', true);
     }

    //  if (cursors.up.isDown)
    // {
    //     player.body.setVelocityY(-50);
    // }
    if (cursors.up.isDown && player.body.onFloor())
        {
            player.body.velocity.y = -220;
        }
    
        
        // this.player.update();
        // if (this.keyW.isDown) {
        //     this.player.moveUp();
        // }
        // else if (this.keyS.isDown) {
        //     this.player.moveDown();
        // }
        // if (this.keyA.isDown) {
        //     this.player.moveLeft();
        // }
        // else if (this.keyD.isDown) {
        //     this.player.moveRight();
        // }
    }
// }