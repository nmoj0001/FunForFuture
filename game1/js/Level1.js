var Level1 = new Phaser.Class({

    Extends: Baselevel,

    initialize:
        function Baselevel() {
            Phaser.Scene.call(this, { key: 'Level1' });
        },

    create: function () {
        level = 1;
        this.setUp();
        level1Bg = this.add.image(0, 0, 'level1_background').setOrigin(0);
    }
});