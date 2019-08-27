var startScreenBg;
var gameLogo;

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
        startScreenBg = this.add.image(0, 0, 'level1_background').setOrigin(0);
        gameLogo = this.matter.add.sprite(game.scale.width / 2, game.scale.height / 2, 'game_logo', null, { isStatic: true });
        cursor = Phaser.Input.Keyboard.KeyCodes.ENTER;
    },

    update: function () {
        this.input.on('pointerdown', function (pointer) {
            this.matter.add.sprite(200, 600, 'game_logo', null, { isStatic: true });
        }, this);

        // if (Phaser.Input.Keyboard.JustDown(cursor)) {
        //     gameLogo =
        //         this.startGame();
        // }
    },

    startGame: function () {
        // gameLogo.destroy();
        // enterKey.destroy();
        // startScreenBg.destroy();
        // this.scene.start('Baselevel');
        gameLogo = this.matter.add.sprite(200, 600, 'game_logo', null, { isStatic: true });
    }

});