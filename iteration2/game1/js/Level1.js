var Level1 = new Phaser.Class({

    Extends: Baselevel,

    initialize: function Level1() {
        Phaser.Scene.call(this, { key: 'Level1' });
    },

    preload: function() {
        this.loadAssets();
        this.load.image('level1_background', 'assets/Level1/level1_background.jpg');
        this.load.image('l1_1', 'assets/Level1/waste/1.png');
        this.load.image('l1_2', 'assets/Level1/waste/2.png');
        this.load.image('l1_3', 'assets/Level1/waste/3.png');
        this.load.image('l1_4', 'assets/Level1/waste/4.png');
        this.load.image('l1_5', 'assets/Level1/waste/5.png');
        this.load.image('l1_6', 'assets/Level1/waste/6.png');
        this.load.image('l1_7', 'assets/Level1/waste/7.png');
        this.load.image('l1_8', 'assets/Level1/waste/8.png');
        this.load.image('l1_9', 'assets/Level1/waste/9.png');
        this.load.image('l1_10', 'assets/Level1/waste/10.png');
        this.load.image('l1_11', 'assets/Level1/waste/11.png');
        this.load.image('l1_12', 'assets/Level1/waste/12.png');
        this.load.image('l1_13', 'assets/Level1/waste/13.png');
        this.load.image('l1_14', 'assets/Level1/waste/14.png');
        this.load.image('l1_15', 'assets/Level1/waste/15.png');
        this.load.image('l1_16', 'assets/Level1/waste/16.png');
        this.load.image('l1_17', 'assets/Level1/waste/17.png');
        this.load.image('l1_18', 'assets/Level1/waste/18.png');
    },

    create: function() {
        level = 1;
        level1Bg = this.add.image(0, 0, 'level1_background').setOrigin(0);
        this.setUp();
    },

    endLevel: function() {
        waste.setVisible(false);
        var endtext = this.add.text(800, 400, score, { fontSize: '48px', fill: 0xfffdfc, fontFamily: 'Courier New', });
        endtext.setText("Level complete");
    }
});