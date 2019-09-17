var Level3 = new Phaser.Class({

    Extends: Baselevel,

    initialize: function Level3() {
        Phaser.Scene.call(this, { key: 'Level3' });
    },

    preload: function() {
        this.loadAssets();
        this.load.image('level3_background', 'assets/Level3/level3_background.jpg');
        this.load.image('l3_1', 'assets/Level3/waste/1.png');
        this.load.image('l3_2', 'assets/Level3/waste/2.png');
        this.load.image('l3_3', 'assets/Level3/waste/3.png');
        this.load.image('l3_4', 'assets/Level3/waste/4.png');
        this.load.image('l3_5', 'assets/Level3/waste/5.png');
        this.load.image('l3_6', 'assets/Level3/waste/6.png');
        this.load.image('l3_7', 'assets/Level3/waste/7.png');
        this.load.image('l3_8', 'assets/Level3/waste/8.png');
        this.load.image('l3_9', 'assets/Level3/waste/9.png');
        this.load.image('l3_10', 'assets/Level3/waste/10.png');
        this.load.image('l3_11', 'assets/Level3/waste/11.png');
        this.load.image('l3_12', 'assets/Level3/waste/12.png');
        this.load.image('l3_13', 'assets/Level3/waste/13.png');
        this.load.image('l3_14', 'assets/Level3/waste/14.png');
        this.load.image('l3_15', 'assets/Level3/waste/15.png');
    },

    create: function() {
        level = 3;
        level3Bg = this.add.image(0, 0, 'level3_background').setOrigin(0);
        this.setUp();
    },

    levelUp: function() {
        this.setLevelUp();
        this.replayLevel('Level3');
        //this.playNextLevel('Level3');
    },

    loseLevel: function() {
        this.setLoseLevel();
        this.replayLevel('Level3');
    },

});