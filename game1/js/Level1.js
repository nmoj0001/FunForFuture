var waste;
var category;
var organic;
var garbage;
var recycling;
var counter;

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
        this.load.image('level1_background', 'assets/Level1/level1_background.jpg');

        this.load.image('rectangle', 'assets/rectangle.png');
        this.load.image('organic', 'assets/bins/organic.png');
        this.load.image('garbage', 'assets/bins/garbage.png');
        this.load.image('recycling', 'assets/bins/recycling.png');
        this.load.image('organic', 'assets/bins/organic.png');

        this.load.image('L1_1', 'assets/Level1/waste/1.png');
        this.load.image('L1_2', 'assets/Level1/waste/2.png');
        this.load.image('L1_3', 'assets/Level1/waste/3.png');
        this.load.image('L1_4', 'assets/Level1/waste/4.png');
        this.load.image('L1_5', 'assets/Level1/waste/5.png');
        this.load.image('L1_6', 'assets/Level1/waste/6.png');
        this.load.image('L1_7', 'assets/Level1/waste/7.png');
        this.load.image('L1_8', 'assets/Level1/waste/8.png');
        this.load.image('L1_9', 'assets/Level1/waste/9.png');
        this.load.image('L1_10', 'assets/Level1/waste/10.png');
        this.load.image('L1_11', 'assets/Level1/waste/11.png');
        this.load.image('L1_12', 'assets/Level1/waste/12.png');
        this.load.image('L1_13', 'assets/Level1/waste/13.png');
        this.load.image('L1_14', 'assets/Level1/waste/14.png');
        this.load.image('L1_15', 'assets/Level1/waste/15.png');
        this.load.image('L1_16', 'assets/Level1/waste/16.png');
        this.load.image('L1_17', 'assets/Level1/waste/17.png');
        this.load.image('L1_18', 'assets/Level1/waste/18.png');
    },

    setUp: function (){
        counter = 5;
        this.matter.world.setBounds(0, 0, 1920, 1080);
        this.add.image(0, 0, 'level1_background').setOrigin(0);
        this.add.image(500, 600, 'organic').setOrigin(0);
        this.add.image(800, 600, 'garbage').setOrigin(0);
        this.add.image(1100, 600, 'recycling').setOrigin(0);
        
        this.updateWaste();
    },

    updateWaste: function(){
        waste = this.matter.add.image(900, 200, 'L1_1', null, { isStatic : true }).setInteractive();
        category = 'recycling';
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
        if(counter >0){
            this.dragObject(waste);
            this.sortWaste();
        }
    },

    sortWaste: function (){
        if(category == 'recycling' && waste.x > 1100 && waste.x < 1400 && waste.y > 800 && waste.y < 1100)
        {
            waste.destroy();
            this.updateWaste();
            counter--;
        }
    },
});