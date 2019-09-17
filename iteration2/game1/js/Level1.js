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
        dialogueBox.setVisible(true);
        replay.setVisible(true);
        playNext.setVisible(true);

        winLevelText = this.add.text(900, 150, 'You Win!', { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);

        replay.setInteractive({ useHandCursor: true })
            .on('pointerup', function() {
                this.scene.start('Level1');
                waste.setVisible(true);
            }, this)
    },

    loseLevel: function() {
        waste.setVisible(false);
        dialogueBox.setVisible(true);
        replay.setVisible(true);

        loseLevelText = this.add.text(900, 150, 'You Lost!', { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);

        this.replayLevel('Level1');
    },

});