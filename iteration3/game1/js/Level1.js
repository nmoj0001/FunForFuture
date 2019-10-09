var Level1 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level1() {
    Phaser.Scene.call(this, { key: 'Level1' });
  },

  preload: function() {
    this.loadAssets();
    this.load.image('level1_background', 'assets/Level1/level1_background.jpg');
    this.load.image('l1_1', 'assets/Level1/waste/1.png');
    this.load.image('l1_2', 'assets/Level1/waste/2.png');
    this.load.image('l1_3', 'assets/Level1/waste/3.png');
    this.load.image('l1_4', 'assets/Level1/waste/4.png');
    this.load.image('l1_5', 'assets/Level1/waste/5.png');
    this.load.image('l1_6', 'assets/Level1/waste/6.png');
    this.load.image('l1_7', 'assets/Level1/waste/7.png');
    this.load.image('l1_8', 'assets/Level1/waste/8.png');
    this.load.image('l1_9', 'assets/Level1/waste/9.png');
    this.load.image('l1_10', 'assets/Level1/waste/10.png');
    this.load.image('l1_11', 'assets/Level1/waste/11.png');
    this.load.image('l1_12', 'assets/Level1/waste/12.png');
    this.load.image('l1_13', 'assets/Level1/waste/13.png');
    this.load.image('l1_14', 'assets/Level1/waste/14.png');
    this.load.image('l1_15', 'assets/Level1/waste/15.png');
  },

  create: function() {
    level = 1;
    totalScore = 0;
    level1Bg = this.add.image(0, 0, 'level1_background').setOrigin(0);
    this.setUp();
    this.setOpening();
    speechBubbleText.setText('Level1');
    instructions = this.add.image(1000, 450, 'instructions');
    resume = this.add.image(1000, 750, 'resume');
    this.resumeGame();
  },

  setOpening: function () {
    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.8)
    play = this.add.image(1020, 680, 'play');
    levelText = this.add
      .text(800, 250, 'Level 1 - Kitchen', { font: '35px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    openingText = this.add
      .text(780, 350, '  Welcome to the Kitchen!\n  Help Nina clean up the\n Kitchen after breakfast\nAnd sort waste properly!\n', { font: '35px Arial Black', fill: '#fff' })
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