var Baselevel = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function Baselevel() {
        Phaser.Scene.call(this, { key: 'Baselevel' });
    },

    preload: function () {
        this.loadAssets();
    },

    create: function () {
        this.setUp();
    },


    loadAssets: function () {
    },

    setUp: function () {
        this.matter.world.setBounds(0, 0, 1920, 1080);
    },

    update: function () {
    },
});