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

    update: function (){

    },

    loadAssets: function() {
        this.load.image('organic', 'assets/bins/organic.png');
        this.load.image('garbage', 'assets/bins/garbage.png');
        this.load.image('recycling', 'assets/bins/recycling.png');
        this.load.image('organic', 'assets/bins/organic.png');
        this.load.image('o_apple', 'assets/waste/apple.png');
        this.load.image('g_diaper', 'assets/waste/diaper.png');
        this.load.image('r_plasticbottle', 'assets/waste/plasticbottle.png');
        this.load.image('r_plasticspoon', 'assets/waste/plasticspoon.png');
        this.load.image('r_tincan', 'assets/waste/tincan.png');
        this.load.image('r_tincan', 'assets/waste/tincan.png');
        this.load.image('level1_background', 'assets/level1_background.jpg');
    },

    setUp: function (){
        // this.matter.world.setBounds(0, 0, 1920, 1080);
        this.add.image(0, 0, 'level1_background').setOrigin(0);

    }

});