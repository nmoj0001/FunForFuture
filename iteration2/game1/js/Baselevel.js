var level1Bg;
var startScreenBg;
var waste;
var category;
var organic;
var garbage;
var recycling;
var counter = 10;
var num;
var min = 1;
var max = 18;
var score = 0;
var scoreText;
var scoreUpdateText;
var scoreImage;
var timedEvent;
var timerText;
var timerImage;
var level;
var playLevel = true;
var dialogueBox;
var replay;
var playNext;

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
        this.load.image('dialogueBox', 'assets/common/dialogue_box.png');
        this.load.image('playNext', 'assets/common/play_next.png');
        this.load.image('replay', 'assets/common/replay.png');
    },

    setUp: function() {
        this.matter.world.setBounds(0, 0, 1920, 1080);

        var organic = this.add.image(650, 580, 'organic').setOrigin(0);
        var garbage = this.add.image(900, 580, 'garbage').setOrigin(0);
        var recycling = this.add.image(1150, 580, 'recycling').setOrigin(0);
        organic.setScale(.7);
        garbage.setScale(.7);
        recycling.setScale(.7);

        dialogueBox = this.add.image(900, 520, 'dialogueBox').setVisible(false);
        replay = this.add.image(900, 520, 'replay').setVisible(false);
        playNext = this.add.image(900, 520, 'playNext').setVisible(false);

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
            gameObject.x = 1000;
            gameObject.y = 250;
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
        if (((category == 'recycling' && waste.x > 1150 && waste.x < 1450) ||
                (category == 'organic' && waste.x > 650 && waste.x < 900) ||
                (category == 'garbage' && waste.x > 900 && waste.x < 1150)) &&
            (waste.y > 700 && waste.y < 1100)) {
            waste.destroy();
            this.updateWaste(level);
            this.updateScore(+100);
        } else if ((waste.y > 700 && waste.y < 1100) &&
            ((category == 'recycling' && ((waste.x > 650 && waste.x < 900) || (waste.x > 900 && waste.x < 1150))) ||
                (category == 'organic' && ((waste.x > 1150 && waste.x < 1450) || (waste.x > 900 && waste.x < 1150))) ||
                (category == 'garbage' && ((waste.x > 1150 && waste.x < 1450) || (waste.x > 900 && waste.x < 1150))))) {
            waste.destroy();
            this.updateWaste(level);
            if (score > 0) {
                this.updateScore(-50);
            }
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

    updateScore: function(update) {
        score += update;
        scoreText.setText(score);
        counter--;

        scoreUpdateText = this.add.text(1000, 250, update, { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);
        var tween = this.tweens.add({
            targets: scoreUpdateText,
            y: 300,
            ease: 'Power1',
            duration: 1500,
            alpha: 0,
            onComplete: () => {
                scoreUpdateText.destroy();
            },
        });
    },

    replayLevel: function(level) {
        replay.setInteractive({ useHandCursor: true })
            .on('pointerup', function() {
                this.scene.start(level);
            }, this)
    },

    playNextLevel: function(level) {
        playNext.setInteractive({ useHandCursor: true })
            .on('pointerup', function() {
                this.scene.start(level);
            }, this)
    },

});