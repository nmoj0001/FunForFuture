var level1Bg;
var startScreenBg;
var waste;
var category;
var organic;
var garbage;
var recycling;
var counter = 5;
var num;
var min = 1;
var max = 18;
var score = 0;
var scoreText;
var scoreImage;
var timedEvent;
var timerText;
var timerImage;
var level;
var playLevel = true;

var Baselevel = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
        function Baselevel() {
            Phaser.Scene.call(this, { key: 'Baselevel' });
        },

    preload: function () {
        this.loadAssets();
    },

    create: function () {
        this.setUp();
    },


    loadAssets: function () {
        this.load.image('organic', 'assets/common/organic.png');
        this.load.image('garbage', 'assets/common/garbage.png');
        this.load.image('recycling', 'assets/common/recycling.png');
        this.load.image('organic', 'assets/common/organic.png');
        this.load.image('score', 'assets/common/score.png');
        this.load.image('timer', 'assets/common/timer.png');
    },

    setUp: function () {
        this.matter.world.setBounds(0, 0, 1920, 1080);

        this.add.image(500, 600, 'organic').setOrigin(0);
        this.add.image(800, 600, 'garbage').setOrigin(0);
        this.add.image(1100, 600, 'recycling').setOrigin(0);

        timedEvent = this.time.addEvent({ delay: 1000, repeat: 60 });

        this.updateWaste(level);
        this.showScore();
    },

    updateWaste: function (level) {
        num = Math.floor(Math.random() * (+max - +min)) + +min;

        if (num >= 1 && num <= 5)
            category = 'organic';
        else if (num >= 6 && num <= 14)
            category = 'recycling';
        else if (num >= 15 && num <= 18)
            category = 'garbage';

        waste = this.matter.add.image(900, 250, 'l' + level + '_' + num, null, { isStatic: true }).setInteractive();
    },

    dragObject: function (object) {
        object.on('pointerover', function () {
            this.setTint(0xffc7f2);
        });

        object.on('pointerout', function () {
            this.clearTint();
        });

        this.input.setDraggable(object);

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xffc7f2);
        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
            gameObject.x = 850;
            gameObject.y = 150;
        });
    },

    update: function () {
        if (playLevel == true) {
            if (counter > 0) {
                this.dragObject(waste);
                this.sortWaste();
                this.updateBonusTimer();
            }
            else {
                this.endLevel();
            }
        }
        else {
            this.loseLevel();
        }

    },

    sortWaste: function () {
        if ((category == 'recycling' && waste.x > 1100 && waste.x < 1400 && waste.y > 800 && waste.y < 1100)
            || (category == 'organic' && waste.x > 500 && waste.x < 800 && waste.y > 800 && waste.y < 1100)
            || (category == 'garbage' && waste.x > 800 && waste.x < 1100 && waste.y > 800 && waste.y < 1100)) {
            waste.destroy();
            this.updateWaste(level);
            score += 100;
            scoreText.setText(score);
            counter--;
        }
    },

    showScore: function () {
        scoreImage = this.add.image(1550, 70, 'score');
        scoreText = this.add.text(1605, 50, score, { fontSize: '48px', fill: 0xfffdfc, fontFamily: 'Courier New', });

        timerImage = this.add.image(1550, 180, 'timer');
        timerText = this.add.text(1605, 160, score, { fontSize: '48px', fill: 0xfffdfc, fontFamily: 'Courier New', })
    },

    updateBonusTimer: function () {
        if (timedEvent.repeatCount == 0) {
            playLevel = false;
        }

        timerText.setText(timedEvent.repeatCount);
    },

    endLevel: function () {
        waste.setVisible(false);
    },

    loseLevel: function () {
        var loseText = this.add.text(850, 400, { fontSize: '200px', fill: 0xfffdfc, fontFamily: 'Courier New', });
        loseText.setText("You lose!");
    }
});