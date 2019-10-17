var Level2 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level2() {
    Phaser.Scene.call(this, { key: 'Level2' });
  },

  preload: function() {
    this.loadAssets();
    this.load.image('level2_background', 'assets/Level2/level2_background.jpg');
    this.load.image('l2_1', 'assets/Level2/waste/1.png');
    this.load.image('l2_2', 'assets/Level2/waste/2.png');
    this.load.image('l2_3', 'assets/Level2/waste/3.png');
    this.load.image('l2_4', 'assets/Level2/waste/4.png');
    this.load.image('l2_5', 'assets/Level2/waste/5.png');
    this.load.image('l2_6', 'assets/Level2/waste/6.png');
    this.load.image('l2_7', 'assets/Level2/waste/7.png');
    this.load.image('l2_8', 'assets/Level2/waste/8.png');
    this.load.image('l2_9', 'assets/Level2/waste/9.png');
    this.load.image('l2_10', 'assets/Level2/waste/10.png');
    this.load.image('l2_11', 'assets/Level2/waste/11.png');
    this.load.image('l2_12', 'assets/Level2/waste/12.png');
    this.load.image('l2_13', 'assets/Level2/waste/13.png');
    this.load.image('l2_14', 'assets/Level2/waste/14.png');
    this.load.image('l2_15', 'assets/Level2/waste/15.png');
  },

  create: function() {
    level = 2;
    addTotal = true;
    level2Bg = this.add.image(0, 0, 'level2_background').setOrigin(0);
    this.setUp();
    this.setOpening();
    speechBubbleText.setText('Level 2');
  },

  setOpening: function () {
    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.8)
    play = this.add.image(1020, 680, 'play');
    levelText = this.add
    .text(820, 250, 'Level 2 - Living Room', { font: '35px Arial Black', fill: '#fff' })
    .setStroke('#665705', 5)
    .setShadow(2, 2, '#333333', 2, true, true);
    openingText = this.add
      .text(750, 350, 'Welcome to the Living Room!\n      Help Nina clean up\n   And sort waste properly!\n', { font: '35px Arial Black', fill: '#fff' })
      .setStroke('#665705', 5)
      .setShadow(2, 2, '#333333', 2, true, true);
    this.startLevel();
  },

  levelUp: function () {
    this.setLevelUp('Level 2 Complete');
    this.replayLevel('Level2');
    this.playNextLevel('Level3');
  },

  loseLevel: function () {
    this.setLoseLevel();
    this.replayLevel('Level2');
  }
});