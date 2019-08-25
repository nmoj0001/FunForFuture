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

        organic = this.matter.add.image(530, 750, 'rectangle', null, { isStatic : true }).setOrigin(0);
        organic.setCollisionCategory(constants.ORGANIC_BIN_COLLISION_CATEGORY);
        organic.setVisible(false);

        garbage = this.matter.add.image(830, 750, 'rectangle', null, { isStatic : true }).setOrigin(0);
        garbage.setCollisionCategory(constants.GARBAGE_BIN_COLLISION_CATEGORY);
        garbage.setVisible(false);

        recycling = this.matter.add.image(1130, 750, 'rectangle', null, { isStatic : true }).setOrigin(0);
        recycling.setCollisionCategory(constants.RECYCLING_BIN_COLLISION_CATEGORY);
        recycling.setVisible(false);

        apple = this.add.sprite(900, 150, 'o_apple').setOrigin(0).setInteractive();
        apple.setCollisionCategory(constants.ORGANIC_COLLISION_CATEGORY);
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