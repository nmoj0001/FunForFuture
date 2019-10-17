var Level3 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level3() {
    Phaser.Scene.call(this, { key: 'Level3' });
  },

  preload: function() {
    this.loadAssets();
    this.load.image('level3_background', 'assets/Level3/level3_background.jpg');
    this.load.image('l3_1', 'assets/Level3/waste/1.png');
    this.load.image('l3_2', 'assets/Level3/waste/2.png');
    this.load.image('l3_3', 'assets/Level3/waste/3.png');
    this.load.image('l3_4', 'assets/Level3/waste/4.png');
    this.load.image('l3_5', 'assets/Level3/waste/5.png');
    this.load.image('l3_6', 'assets/Level3/waste/6.png');
    this.load.image('l3_7', 'assets/Level3/waste/7.png');
    this.load.image('l3_8', 'assets/Level3/waste/8.png');
    this.load.image('l3_9', 'assets/Level3/waste/9.png');
    this.load.image('l3_10', 'assets/Level3/waste/10.png');
    this.load.image('l3_11', 'assets/Level3/waste/11.png');
    this.load.image('l3_12', 'assets/Level3/waste/12.png');
    this.load.image('l3_13', 'assets/Level3/waste/13.png');
    this.load.image('l3_14', 'assets/Level3/waste/14.png');
    this.load.image('l3_15', 'assets/Level3/waste/15.png');
  },

  create: function() {
    level = 3;
    addTotal = true;
    level3Bg = this.add.image(0, 0, 'level3_background').setOrigin(0);
    this.setUp();
    this.setOpening();
    speechBubbleText.setText('Level 3');
  },

  setOpening: function () {
    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.8)
    play = this.add.image(1020, 680, 'play');
    levelText = this.add
      .text(820, 260, 'Level 3 - Bedroom', { font: '35px Arial Black', fill: '#fff' })
      .setStroke('#665705', 5)
      .setShadow(2, 2, '#333333', 2, true, true);
    openingText = this.add
      .text(750, 350, 'Welcome to the Bed Room!\n      Help Nina clean up\n   And sort waste properly!\n', { font: '35px Arial Black', fill: '#fff' })
      .setStroke('#665705', 5)
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

