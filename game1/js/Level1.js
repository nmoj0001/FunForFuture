var apple;
var bananapeel;
var cereal;
var chips;
var plasticbottle;
var tincan;
var organic;
var garbage;
var recycling;

var Level1 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
        function Level1() {
            Phaser.Scene.call(this, { key : 'Level1' });
        },

    preload: function() {
        this.loadAssets();
    },

    create: function (){
        this.setUp();
    },

    loadAssets: function() {
        this.load.image('rectangle', 'assets/rectangle.png');
        this.load.image('organic', 'assets/bins/organic.png');
        this.load.image('garbage', 'assets/bins/garbage.png');
        this.load.image('recycling', 'assets/bins/recycling.png');
        this.load.image('organic', 'assets/bins/organic.png');
        this.load.image('o_apple', 'assets/waste/apple.png');
        this.load.image('o_bananapeel', 'assets/waste/bananapeel.png');
        this.load.image('r_plasticbottle', 'assets/waste/plasticbottle.png');
        this.load.image('r_cereal', 'assets/waste/cereal.png');
        this.load.image('r_tincan', 'assets/waste/tincan.png');
        this.load.image('g_chips', 'assets/waste/chips.png');
        this.load.image('level1_background', 'assets/level1_background.jpg');
    },

    setUp: function (){
        this.matter.world.setBounds(0, 0, 1920, 1080);
        this.add.image(0, 0, 'level1_background').setOrigin(0);
        this.add.image(500, 600, 'organic').setOrigin(0);
        this.add.image(800, 600, 'garbage').setOrigin(0);
        this.add.image(1100, 600, 'recycling').setOrigin(0);

        apple = this.matter.add.image(900, 150, 'o_apple').setInteractive();
        apple.setCollisionCategory(constants.ORGANIC_COLLISION_CATEGORY);
        apple.setCollidesWith([
            constants.GARBAGE_BIN_COLLISION_CATEGORY,
            constants.ORGANIC_BIN_COLLISION_CATEGORY,
            constants.RECYCLING_BIN_COLLISION_CATEGORY,
            constants.DEFAULT_COLISSION_CATEGORY
        ]);

        organic = this.matter.add.image(530, 750, 'rectangle', null, { isStatic : true });
        organic.setCollisionCategory(constants.ORGANIC_BIN_COLLISION_CATEGORY);
        //organic.setVisible(false);

        garbage = this.matter.add.image(830, 750, 'rectangle', null, { isStatic : true });
        garbage.setCollisionCategory(constants.GARBAGE_BIN_COLLISION_CATEGORY);
        //garbage.setVisible(false);

        recycling = this.matter.add.image(1130, 750, 'rectangle', null, { isStatic : true });
        recycling.setCollisionCategory(constants.RECYCLING_BIN_COLLISION_CATEGORY);
        //recycling.setVisible(false);

        this.matter.world.on('collisionstart', function (event) {

            event.pairs[0].bodyA.gameObject.setTint(0xff0000);
            event.pairs[0].bodyB.gameObject.setTint(0x00ff00);
    
        });

        this.dragObject(apple);
    },

    dragObject: function (image){
        image.on('pointerover', function () {

           this.setTint(0xffc7f2);
        
        });
        
        image.on('pointerout', function () {
        
            this.clearTint();
        
        });

        this.input.setDraggable(image);

        this.input.on('dragstart', function (pointer, gameObject) {

            gameObject.setTint(0xffc7f2);

        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', function (pointer, gameObject) {

            gameObject.clearTint();
            gameObject.x = 850;
            gameObject.y = 150;

        });
    },
    update: function (){

    },
});