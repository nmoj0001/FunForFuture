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
    level = 1;
    tree2 = this.add.image(740, 780, 'tree2').setVisible(false);

    this.setUp();
    level3Bg = this.add.image(0, 650, 'level3_background').setOrigin(0);

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

  levelUp: function() {
    speechBubbleText.setText('You win!\nTotal Score\n    ' + score);
    speechBubbleText.x = 280;
    speechBubbleText.y = 100;
    answerText.disableInteractive();
    wrongText1.disableInteractive();
    wrongText2.disableInteractive();
    wrongText3.disableInteractive();
    replay = this.add.image(500, 400, 'replay');
    this.replayLevel('Level1');
  },

  replayLevel: function(level) {
    replay.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        this.scene.start(level);
        replay.disableInteractive();
      },
      this
    );
  }
});
