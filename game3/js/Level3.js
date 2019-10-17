var Level3 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level3() {
    Phaser.Scene.call(this, { key: 'Level3' });
  },

  preload: function () {
    this.loadAssets();
    // this.load.image('fish1', 'assets/Level1/fish1.png');
    // this.load.image('fish2', 'assets/Level1/fish2.png');
    // this.load.image('fish3', 'assets/Level1/fish3.png');
    // this.load.image('fish4', 'assets/Level1/fish4.png');
    // this.load.image('fish5', 'assets/Level1/fish5.png');
  },

  create: function () {
    level = 1;
    score = 0;

    this.setUp();
    platform_1 = this.add.image(750, 1650, 'platform_long').setOrigin(0);
    platform_2 = this.add.image(0, 200, 'platform_medium').setOrigin(0);
    platform_3 = this.add.image(600, 650, 'platform_short').setOrigin(0);
    platform_4 = this.add.image(1000, 450, 'platform_short').setOrigin(0);
  },

  levelUp: function () {
    this.scene.start('Level1');
  }
});
var toxic_1;
var toxic_2;
var toxic_3;
var toxic_4;
var toxic_5;

var Level3 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level3() {
    Phaser.Scene.call(this, { key: 'Level3' });
  },

  preload: function () {
    this.loadAssets();
    this.load.image('toxic_1', 'assets/Level3/toxic_1.png');
    this.load.image('toxic_2', 'assets/Level3/toxic_2.png');
    this.load.image('toxic_3', 'assets/Level3/toxic_3.png');
    this.load.image('toxic_4', 'assets/Level3/toxic_4.png');
    this.load.image('toxic_5', 'assets/Level3/toxic_5.png');
    this.load.image('toxic_6', 'assets/Level3/toxic_6.png');
    this.load.image('toxic_7', 'assets/Level3/toxic_7.png');
    this.load.image('toxic_8', 'assets/Level3/toxic_8.png');
    this.load.image('toxic_9', 'assets/Level3/toxic_9.png');
    this.load.image('toxic_10', 'assets/Level3/toxic_10.png');
    this.load.image('toxic_11', 'assets/Level3/toxic_11.png');
    this.load.image('toxic_12', 'assets/Level3/toxic_12.png');
    this.load.image('toxic_13', 'assets/Level3/toxic_13.png');
    this.load.image('toxic_14', 'assets/Level3/toxic_14.png');
    this.load.image('toxic_15', 'assets/Level3/toxic_15.png');
  },

  create: function () {
    level = 3;
    score = 0;

    this.setUp();
    this.createPlatforms();
    this.createPlayer();
    this.setOpening();
  },

  createWaste: function () {
    waste = this.physics.add.group({
      key: ['toxic_1', 'toxic_2', 'toxic_3', 'toxic_4', 'toxic_5', 'toxic_6', 'toxic_7', 'toxic_8', 'toxic_9', 'toxic_10', 'toxic_11', 'toxic_12', 'toxic_13', 'toxic_14', 'toxic_15'],
      setXY: { x: 50, y: 0, stepX: 120 }
    });

    waste.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));

    });
  },

  setOpening: function () {
    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.8)
    play = this.add.image(1020, 680, 'play');
    levelText = this.add
      .text(800, 180, 'Level 3 - Toxic Waste', { font: '35px Arial Black', fill: '#fff' })
      .setStroke('#665705', 5)
      .setShadow(2, 2, '#333333', 2, true, true);
    openingText = this.add
      .text(680, 230, '     Hazardous waste materials\n   cannot be disposed by putting\n               in kerbside bins.\n        These must be taken to\n nearest toxic-waste collection.\n   Collect these hazardous items  \n  to keep the playground clean!\n', { font: '35px Arial Black', fill: '#fff' })
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
