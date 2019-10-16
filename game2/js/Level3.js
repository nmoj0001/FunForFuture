var tree1;
var tree2;
var tree3;
var tree4;
var tree5;

var Level3 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level3() {
    Phaser.Scene.call(this, { key: 'Level3' });
  },

  preload: function() {
    this.loadAssets();
    this.load.image('level3_background', 'assets/Level3/level3_background.png');
    this.load.image('tree1', 'assets/Level3/tree1.png');
    this.load.image('tree2', 'assets/Level3/tree2.png');
  },

  create: function() {
    level = 3;
    this.setUp();
    tree2 = this.add.image(740, 780, 'tree2').setVisible(false);
    level3Bg = this.add.image(0, 650, 'level3_background').setOrigin(0);
    this.setOpening();

    tree2 = this.add.image(740, 800, 'tree2').setVisible(false);
    tree3 = this.add.image(370, 800, 'tree2').setVisible(false);
    tree4 = this.add.image(1650, 800, 'tree2').setVisible(false);
    tree5 = this.add.image(1250, 800, 'tree2').setVisible(false);
  },

  updateQuestion: function() {
    if (counter < 5) {
      this.setUpQuestion();
      questionText.setText(questions.levels[2].level3[counter].question);
      answerText.setText(questions.levels[2].level3[counter].answer);
      wrongText1.setText(questions.levels[2].level3[counter].choice1);
      wrongText2.setText(questions.levels[2].level3[counter].choice2);
      wrongText3.setText(questions.levels[2].level3[counter].choice3);
      this.showtree(counter + 1);
      counter++;
    } else {
      this.levelUp();
    }
  },

  showtree: function(num) {
    switch (num) {
      case 2:
        tree2.setVisible(true);
        break;
      case 3:
        tree3.setVisible(true);
        break;
      case 4:
        tree4.setVisible(true);
        break;
      case 5:
        tree5.setVisible(true);
        break;
    }
  },

  setOpening: function () {
    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.8)
    play = this.add.image(1020, 680, 'play');
    levelText = this.add
    .text(810, 250, 'Level 3 - School Garden', { font: '35px Arial Black', fill: '#fff' })
    .setStroke('#ffc812', 16)
    .setShadow(2, 2, '#333333', 2, true, true);
    openingText = this.add
      .text(750, 350, 'Welcome to the School Garden!\nHelp Nina Answer Questions\n     And Grow Trees!\n', { font: '35px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    this.startLevel();
  },

  levelUp: function () {
    this.setLevelUp('Game Complete!');
    replay.setVisible(false);
    playNext.setVisible(false);
    if (username != '') {
      submit = this.add.image(1150, 620, 'submit');
      reload = this.add.image(850, 620, 'reload');
      this.submitScore();
    } else {
      reload = this.add.image(1000, 620, 'reload');
    }
    this.reloadGame();
  },

  loseLevel: function () {
    this.setLoseLevel();
    this.replayLevel('Level3');
  }
});

