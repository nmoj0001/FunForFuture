var startScreenBg;
var gameLogo;
var enterKey;

var StartScreen = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function StartScreen() {
            Phaser.Scene.call(this, { key: 'StartScreen' });
        },

    preload: function () {
        this.load.image('start_screen_bg', 'assets/common/start_screen_bg.png');
        this.load.image('game_logo', 'assets/common/game_logo.png');
    },

    create: function () {
        enterKey = game.input.keyboard.addKey(Phaser.Input.Keyboard.ENTER);
        startScreenBg = this.add.image(0, 0, 'level1_background').setOrigin(0);
        gameLogo = this.matter.add.sprite(game.scale.width / 2, game.scale.height / 2, 'game_logo', null, { isStatic: true });
    },

    update: function () {
        if (enterKey.isDown) {
            startGame();
        }
    },

    startGame: function () {
        gameLogo.destroy();
        enterKey.destroy();
        startScreenBg.destroy();
        // this.scene.start('Baselevel');
    }

});