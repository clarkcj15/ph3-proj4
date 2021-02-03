// import Phaser from 'phaser';
var config = {
    type: Phaser.Auto,
    width: 800,
    height: 600,
    backgroundColor: "#D2B9F5",
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
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
var food;
var scoreText;
var score = 0;
var gameOver = false;

var game = new Phaser.Game(config);

// class Example1 extends Phaser.Scene {
//     constructor() {
//         super({ key: "Example1"});
//     }
    function preload() {
        this.load.image("background", 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611793099/MorningSky_krfeyp.jpg');
        this.load.image("ground", 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611869300/ground_djhx2a.png');
        this.load.spritesheet("block", "https://res.cloudinary.com/dwpxepy1m/image/upload/v1612316479/ICS_Quebec_tvakfx.svg",{
            frameWidth: 25,
            frameHeight: 25,
        });
        this.load.image('GRND', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1611869300/ground_djhx2a.png');
        this.load.image('smBar', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1612328629/small_b1he4c.png');
        this.load.image('medBar', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1612329534/med_h8ynjd.png');
        this.load.image('lgBar', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1612329401/lorge_xtzlgj.png');
        this.load.image('food', 'https://res.cloudinary.com/dwpxepy1m/image/upload/v1612330981/food_k1oqz8.png');
    }

    function create() {
        
        this.add.image(300, 200, 'background');
        //Platform group
        ground = this.physics.add.staticGroup()
        
        //create the ground and call on various size platforms
        ground.create(400, 460, 'GRND').setScale(2).refreshBody();
        
        //Jumpable platforms
        // ground.create(450, 470, 'smBar');
        // ground.create(100, 530, 'smBar');
        // ground.create(380, 220, 'smBar');
        // ground.create(260, 170, 'smBar');

        ground.create(299, 510, 'smBar');
        ground.create(700, 510, 'smBar');
        ground.create(700, 340, 'medBar');
        ground.create(780, 90, 'medBar');
        ground.create(30, 430, 'medBar');
        ground.create(480, 190, 'medBar');
        ground.create(420, 400, 'medBar');
        ground.create(10, 200, 'medBar');
        ground.create(320, 90, 'lgBar');
        ground.create(110, 310, 'lgBar');
        
        player = this.physics.add.sprite(90, 580, 'block');
        
        
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        food = this.physics.add.group(
            {
            key: 'food',
            repeat: 9,
            setXY: { x: 12, y: 2, stepX: 80 }
        });


        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //Allows two objects to interact with physics
        this.physics.add.collider(player, ground);
        this.physics.add.collider(food, ground);
        
        //Let's player collection rather than be stopped by
        this.physics.add.overlap(player, food, collectFood, null, this);

        // this.physics.world.bounds.width = ground.width;
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
        player.body.setVelocityX(-90);
        // player.anims.play('left', true);
     }
     else if (cursors.right.isDown)
     {
         player.body.setVelocityX(90);
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
    }

    function collectFood (player, food)
    {
        food.destroy(true, true);

        //  Add and update the score
        score += 10;
        scoreText.setText('Score: ' + score);

        if (food.countActive(true) === 0)
        {
            //  A new batch of food to collect
            food.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });
        }
    }