var Level2 = new Phaser.Class({

    Extends: Baselevel,

    initialize: function Level2() {
        Phaser.Scene.call(this, { key: 'Level2' });
    },

    preload: function() {
        this.loadAssets();
        this.load.image('level2_background', 'assets/Level2/level2_background.jpg');
        this.load.image('l2_1', 'assets/Level1/waste/1.png');
        this.load.image('l2_2', 'assets/Level1/waste/2.png');
        this.load.image('l2_3', 'assets/Level1/waste/3.png');
        this.load.image('l2_4', 'assets/Level1/waste/4.png');
        this.load.image('l2_5', 'assets/Level1/waste/5.png');
        this.load.image('l2_6', 'assets/Level1/waste/6.png');
        this.load.image('l2_7', 'assets/Level1/waste/7.png');
        this.load.image('l2_8', 'assets/Level1/waste/8.png');
        this.load.image('l2_9', 'assets/Level1/waste/9.png');
        this.load.image('l2_10', 'assets/Level1/waste/10.png');
        this.load.image('l2_11', 'assets/Level1/waste/11.png');
        this.load.image('l2_12', 'assets/Level1/waste/12.png');
        this.load.image('l2_13', 'assets/Level1/waste/13.png');
        this.load.image('l2_14', 'assets/Level1/waste/14.png');
        this.load.image('l2_15', 'assets/Level1/waste/15.png');
        this.load.image('l2_16', 'assets/Level1/waste/16.png');
        this.load.image('l2_17', 'assets/Level1/waste/17.png');
        this.load.image('l2_18', 'assets/Level2/waste/18.png');
    },

    create: function() {
        level = 2;
        level2Bg = this.add.image(0, 0, 'level2_background').setOrigin(0);
        this.setUp();
    },

    endLevel: function() {}
});