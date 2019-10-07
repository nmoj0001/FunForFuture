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
    // this.load.image('background', 'assets/common/background.jpg');
    // this.load.image('girl', 'assets/common/girl_happy.png');
    // this.load.image('speechBubble', 'assets/common/speech_bubble.png');
    // this.load.image('score', 'assets/common/score.png');
    // this.load.image('choice1', 'assets/common/choice1.png');
    // this.load.image('choice2', 'assets/common/choice2.png');
    // this.load.image('choice3', 'assets/common/choice3.png');
    // this.load.image('choice4', 'assets/common/choice4.png');
    // this.load.json('questions', 'json/questions.json');
    // this.load.image('replay', 'assets/common/replay.png');
  },

  setUp: function () {
    // this.matter.world.setBounds(0, 0, 1920, 1080);
    // counter = 0;

    // background = this.add.image(0, 0, 'background').setOrigin(0);

    // scoreImage = this.add.image(1750, 70, 'score');
    // scoreText = this.add
    //   .text(1805, 50, score, { font: '40px Arial Black', fill: '#fff' })
    //   .setStroke('#ffdd00', 16)
    //   .setShadow(2, 2, '#333333', 2, true, true);

    // this.updateScore();
  },

  update: function () { },

  updateScore: function () {
  }
});