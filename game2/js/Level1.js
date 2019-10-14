var fish1;
var fish2;
var fish3;
var fish4;
var fish5;

var Level1 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level1() {
    Phaser.Scene.call(this, { key: 'Level1' });
  },

  preload: function () {
    this.loadAssets();
    this.load.image('level1_background', 'assets/Level1/level1_background.png');
    this.load.image('fish1', 'assets/Level1/fish1.png');
    this.load.image('fish2', 'assets/Level1/fish2.png');
    this.load.image('fish3', 'assets/Level1/fish3.png');
    this.load.image('fish4', 'assets/Level1/fish4.png');
    this.load.image('fish5', 'assets/Level1/fish5.png');
  },

  create: function () {
    level = 1;
    totalScore = 0;
    score = 0;
    this.setUp();
    level1Bg = this.add.image(0, 650, 'level1_background').setOrigin(0);
    this.setOpening();
    speechBubbleText.setText('Level 1');
    instructions = this.add.image(1000, 450, 'instructions');
    resume = this.add.image(1000, 750, 'resume');
    this.resumeGame();

    fish2 = this.add.image(740, 780, 'fish2').setVisible(false);

    fish1 = this.add.image(100, 700, 'fish1');
    fish2 = this.add.image(740, 780, 'fish2').setVisible(false);
    fish3 = this.add.image(370, 820, 'fish3').setVisible(false);
    fish4 = this.add.image(680, 690, 'fish4').setVisible(false);
    fish5 = this.add.image(1800, 880, 'fish5').setVisible(false);

    var tween = this.tweens.add({
      targets: [fish1, fish2, fish3, fish4, fish5],
      x: 1700,
      duration: 3000,
      ease: 'Sine.easeInOut',
      flipX: true,
      yoyo: true,
      repeat: -1,
      delay: function (i, total, target) {
        return i * 1000;
      }
    });
  },

  updateQuestion: function () {
    if (counter < 5) {
      this.setUpQuestion();
      questionText.setText(questions.levels[0].level1[counter].question);
      answerText.setText(questions.levels[0].level1[counter].answer);
      wrongText1.setText(questions.levels[0].level1[counter].choice1);
      wrongText2.setText(questions.levels[0].level1[counter].choice2);
      wrongText3.setText(questions.levels[0].level1[counter].choice3);
      this.showFish(counter + 1);
      counter++;
    } else {
      this.levelUp();
    }
  },

  showFish: function (num) {
    switch (num) {
      case 2:
        fish2.setVisible(true);
        break;
      case 3:
        fish3.setVisible(true);
        break;
      case 4:
        fish4.setVisible(true);
        break;
      case 5:
        fish5.setVisible(true);
        break;
    }
  },

  setOpening: function () {
    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.8)
    play = this.add.image(1020, 680, 'play');
    levelText = this.add
      .text(820, 250, 'Level 1 - Kitchen', { font: '35px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    openingText = this.add
      .text(750, 350, '  Welcome to the School!\n  Help Nina clean up the\n School Pond\nAnd grow the fishes\n', { font: '35px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    this.startLevel();
  },

  levelUp: function () {
    this.setLevelUp('Level 1 Complete');
    this.replayLevel('Level1');
    this.playNextLevel('Level2');
  },

  loseLevel: function () {
    this.setLoseLevel();
    this.replayLevel('Level1');
  }
});
