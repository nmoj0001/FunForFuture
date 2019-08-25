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

        var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});
        organic = new Phaser.Geom.Rectangle(520, 750, 200, 300);
        graphics.strokeRectShape(organic);

        garbage = new Phaser.Geom.Rectangle(820, 750, 200, 300);
        graphics.strokeRectShape(garbage);

        recycling = new Phaser.Geom.Rectangle(1120, 750, 200, 300);
        graphics.strokeRectShape(recycling);

        // apple = this.add.image(550, 800, 'o_apple').setOrigin(0);
        // bananapeel = this.add.image(700, 800, 'o_bananapeel').setOrigin(0);
        // tincan = this.add.image(250, 900, 'r_tincan').setOrigin(0);
        // plasticbottle = this.add.image(350, 800, 'r_plasticbottle').setOrigin(0); 
        // chips = this.add.image(500, 950, 'g_chips').setOrigin(0);
        
        apple = this.add.sprite(900, 150, 'o_apple').setOrigin(0).setInteractive();
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