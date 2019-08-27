var startScreenBg;
var gameLogo;

var StartScreen = new Phaser.Class({

    Extends: Baselevel,

    initialize:

        function StartScreen() {
            Phaser.Scene.call(this, { key: 'StartScreen' });
        },

    preload: function () {
        this.load.image('start_screen_bg', 'assets/common/start_screen_bg.png');
        this.load.image('game_logo', 'assets/common/game_logo.png');
    },

    create: function () {
        this.setUp();
        gameLogo = this.matter.add.sprite(game.scale.width / 2, game.scale.height / 2, 'game_logo', null, { isStatic: true });
    },

    update: function () {
        this.input.on('pointerdown', function (pointer) {
            this.startGame();
        }, this);
    },

    startGame: function () {
        // gameLogo.destroy();
        this.scene.start('Level1');
    }
});