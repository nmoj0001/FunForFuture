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

    initialize: function Baselevel() {
        Phaser.Scene.call(this, { key: 'Baselevel' });
    },

    preload: function() {
        this.loadAssets();
    },

    create: function() {
        this.setUp();
    },


    loadAssets: function() {
        this.load.image('organic', 'assets/common/organic.png');
        this.load.image('garbage', 'assets/common/garbage.png');
        this.load.image('recycling', 'assets/common/recycling.png');
        this.load.image('organic', 'assets/common/organic.png');
        this.load.image('score', 'assets/common/score.png');
        this.load.image('timer', 'assets/common/timer.png');
    },

    setUp: function() {
        this.matter.world.setBounds(0, 0, 1920, 1080);

        var organic = this.add.image(650, 580, 'organic').setOrigin(0);
        var garbage = this.add.image(900, 580, 'garbage').setOrigin(0);
        var recycling = this.add.image(1150, 580, 'recycling').setOrigin(0);

        organic.setScale(.7);
        garbage.setScale(.7);
        recycling.setScale(.7);

        timedEvent = this.time.addEvent({ delay: 1000, repeat: 60 });

        this.updateWaste(level);
        this.showScore();
    },

    updateWaste: function(level) {
        num = Math.floor(Math.random() * (+max - +min)) + +min;

        if (num >= 1 && num <= 5)
            category = 'organic';
        else if (num >= 6 && num <= 14)
            category = 'recycling';
        else if (num >= 15 && num <= 18)
            category = 'garbage';

        waste = this.matter.add.image(1000, 250, 'l' + level + '_' + num, null, { isStatic: true }).setInteractive();
    },

    dragObject: function(object) {
        object.on('pointerover', function() {
            this.setTint(0xffc7f2);
        });

        object.on('pointerout', function() {
            this.clearTint();
        });

        this.input.setDraggable(object);

        this.input.on('dragstart', function(pointer, gameObject) {
            gameObject.setTint(0xffc7f2);
        });

        this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', function(pointer, gameObject) {
            gameObject.clearTint();
            gameObject.x = 850;
            gameObject.y = 150;
        });
    },

    update: function() {
        if (playLevel == true) {
            if (counter > 0) {
                this.dragObject(waste);
                this.sortWaste();
                this.updateBonusTimer();
            } else {
                this.endLevel();
            }
        } else {
            this.loseLevel();
        }

    },

    sortWaste: function() {
        if ((category == 'recycling' && waste.x > 1100 && waste.x < 1400 && waste.y > 800 && waste.y < 1100) ||
            (category == 'organic' && waste.x > 500 && waste.x < 800 && waste.y > 800 && waste.y < 1100) ||
            (category == 'garbage' && waste.x > 800 && waste.x < 1100 && waste.y > 800 && waste.y < 1100)) {
            waste.destroy();
            this.updateWaste(level);
            score += 100;
            scoreText.setText(score);
            counter--;
        }
    },

    showScore: function() {
        scoreImage = this.add.image(1650, 70, 'score');
        timerImage = this.add.image(1650, 180, 'timer');

        scoreText = this.add.text(1705, 50, score, { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);
        timerText = this.add.text(1705, 160, 'Timer Text', { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);
    },

    updateBonusTimer: function() {
        if (timedEvent.repeatCount == 0) {
            playLevel = false;
        }

        timerText.setText('00:' + timedEvent.repeatCount);
    },

    endLevel: function() {
        waste.setVisible(false);
    },

    loseLevel: function() {
        waste.setVisible(false);
        var loseText = this.add.text(850, 400, score, { fontSize: '48px', fill: 0xfffdfc, fontFamily: 'Courier New', });
        loseText.setText("You lose!");
    }
});