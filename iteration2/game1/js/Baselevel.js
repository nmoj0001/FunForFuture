var level1Bg;
var startScreenBg;
var waste;
var category;
var organic;
var garbage;
var recycling;
var counter;
var num;
var min = 1;
var max = 15;
var score;
var scoreText;
var scoreUpdateText;
var scoreImage;
var totalScore = 0;
var totalScoreText;
var totalScoreImage;
var totalScorePrompt;
var timedEvent;
var timerText;
var timerImage;
var level;
var playLevel = true;
var dialogueBox;
var replay;
var playNext;
var reload;
var loseLevelText;
var winLevelText;
var girl;
var speechBubble;
var speechBubbleText;

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
        this.load.image('organic', 'assets/common/organic.png');
        this.load.image('garbage', 'assets/common/garbage.png');
        this.load.image('recycling', 'assets/common/recycling.png');
        this.load.image('organic', 'assets/common/organic.png');
        this.load.image('score', 'assets/common/score.png');
        this.load.image('timer', 'assets/common/timer.png');
        this.load.image('dialogueBox', 'assets/common/dialogue_box.png');
        this.load.image('playNext', 'assets/common/play_next.png');
        this.load.image('replay', 'assets/common/replay.png');
        this.load.image('reload', 'assets/common/replay.png');
        this.load.image('totalScore', 'assets/common/total_score.png');
        this.load.image('girl', 'assets/common/girl_happy.png');
        this.load.image('speechBubble', 'assets/common/speech_bubble.png');
    },

    setUp: function () {
        this.matter.world.setBounds(0, 0, 1920, 1080);

        organic = this.add.image(650, 540, 'organic').setOrigin(0);
        garbage = this.add.image(900, 540, 'garbage').setOrigin(0);
        recycling = this.add.image(1150, 540, 'recycling').setOrigin(0);

        girl = this.add.image(50, 420, 'girl').setOrigin(0);
        speechBubble = this.add.image(150, 100, 'speechBubble').setOrigin(0);
    
        score = 0;
        counter = 12;
        timedEvent = this.time.addEvent({ delay: 1000, repeat: 60 });

        this.updateWaste(level);
        this.showScore();
    },

    updateWaste: function (level) {
        num = Math.floor(Math.random() * (+max - +min)) + +min;

        if (num >= 1 && num <= 5)
            category = 'organic';
        else if (num >= 6 && num <= 10)
            category = 'recycling';
        else if (num >= 11 && num <= 15)
            category = 'garbage';

        waste = this.matter.add.image(1000, 250, 'l' + level + '_' + num, null, { isStatic: true }).setInteractive();
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
            gameObject.x = 1000;
            gameObject.y = 250;
        });
    },

    update: function () {
        if (playLevel == true) {
            if (counter > 0) {
                this.dragObject(waste);
                this.sortWaste();
                this.updateBonusTimer();
            } else {
                speechBubbleText.setText('Good Job!');
                this.levelUp();
            }
        } else {
            speechBubbleText.setText('Better Luck\nNext Time!');
            this.loseLevel();
        }

    },

    sortWaste: function () {
        if (((category == 'recycling' && waste.x > 1150 && waste.x < 1450) ||
            (category == 'organic' && waste.x > 650 && waste.x < 900) ||
            (category == 'garbage' && waste.x > 900 && waste.x < 1150)) &&
            (waste.y > 700 && waste.y < 1100)) {
            waste.destroy();
            speechBubbleText.setText('Good Job\nidentifying\n' + category);
            counter--;
            this.updateWaste(level);
            this.updateScore(+100);
        } else if ((waste.y > 700 && waste.y < 1100) &&
            ((category == 'recycling' && ((waste.x > 650 && waste.x < 900) || (waste.x > 900 && waste.x < 1150))) ||
                (category == 'organic' && ((waste.x > 1150 && waste.x < 1450) || (waste.x > 900 && waste.x < 1150))) ||
                (category == 'garbage' && ((waste.x > 1150 && waste.x < 1450) || (waste.x > 900 && waste.x < 1150))))) {
            waste.destroy();
            speechBubbleText.setText('Opps!\nThis is\n' + category);
            counter--;
            this.updateWaste(level);
            if (score > 0) {
                this.updateScore(-50);
            }
        }
    },

    showScore: function () {
        scoreImage = this.add.image(1650, 70, 'score');
        timerImage = this.add.image(1650, 180, 'timer');

        scoreText = this.add.text(1705, 50, score, { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);
        timerText = this.add.text(1705, 160, 'Timer Text', { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);
    },

    updateBonusTimer: function () {
        if (timedEvent.repeatCount == 0) {
            playLevel = false;
        }

        timerText.setText('00:' + timedEvent.repeatCount);
    },

    updateScore: function (update) {
        score += update;
        scoreText.setText(score);

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

    replayLevel: function (level) {
        replay.setInteractive({ useHandCursor: true })
            .on('pointerup', function () {
                this.scene.start(level);
                replay.disableInteractive();
            }, this)
    },

    playNextLevel: function (level) {
        playNext.setInteractive({ useHandCursor: true })
            .on('pointerup', function () {
                totalScore += score;
                this.scene.start(level);
                replay.disableInteractive();
                playNext.disableInteractive();
            }, this)
    },

    // endGame: function () {
    //     endGame.setInteractive({ useHandCursor: true })
    //         .on('pointerup', function () {
    //             totalScore += score;
    //             winLevelText.setText('YOU WIN!!!');
    //             totalScorePrompt.setText('Total Score:');
    //             totalScoreText.setText(totalScore);
    //             replay.setVisible(false);
    //             endGame.setVisible(false);
    //             reload = this.add.image(1000, 380, 'replay');
    //             this.reloadGame();
    //         }, this)
    // },

    reloadGame: function () {
        reload.setInteractive({ useHandCursor: true })
            .on('pointerup', function () {
                this.scene.start('Level1');
            }, this)
    },

    setLevelUp: function () {
        waste.setVisible(false);

        dialogueBox = this.add.image(1000, 300, 'dialogueBox');
        replay = this.add.image(850, 440, 'replay');
        playNext = this.add.image(1150, 440, 'playNext');
        winLevelText = this.add.text(800, 150, 'Level Complete!', { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);

        totalScorePrompt = this.add.text(880, 220, 'Level Score:', { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);
        totalScoreImage = this.add.image(970, 330, 'totalScore');
        totalScoreText = this.add.text(1020, 300, score, { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);
    },

    setLoseLevel: function () {
        waste.setVisible(false);
        dialogueBox = this.add.image(1000, 300, 'dialogueBox');
        replay = this.add.image(1000, 380, 'replay');
        loseLevelText = this.add.text(850, 150, 'You failed!', { font: "40px Arial Black", fill: "#fff" }).setStroke('#ffdd00', 16).setShadow(2, 2, "#333333", 2, true, true);
    },
});