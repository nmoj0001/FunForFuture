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
        counter = 5;
        this.matter.world.setBounds(0, 0, 1920, 1080);
        this.add.image(0, 0, 'level1_background').setOrigin(0);
        this.add.image(500, 600, 'organic').setOrigin(0);
        this.add.image(800, 600, 'garbage').setOrigin(0);
        this.add.image(1100, 600, 'recycling').setOrigin(0);
        
        updateWaste();
    },

    updateWaste: function(){
        waste = this.matter.add.image(900, 200, 'o_apple', null, { isStatic : true }).setInteractive();
        category = 'organiic';
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