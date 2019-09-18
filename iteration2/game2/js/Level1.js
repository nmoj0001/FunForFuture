var Level1 = new Phaser.Class({

    Extends: Baselevel,

    initialize: function Level1() {
        Phaser.Scene.call(this, { key: 'Level1' });
    },

    preload: function() {
        this.loadAssets();
        this.load.image('level1_background', 'assets/Level1/level1_background.jpg');
    },

    create: function() {
        level = 1;
        level1Bg = this.add.image(0, 0, 'level1_background').setOrigin(0);
        this.setUp();
    },
});