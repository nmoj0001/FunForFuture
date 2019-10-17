var Level2 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level2() {
    Phaser.Scene.call(this, { key: 'Level2' });
  },

  preload: function() {
    this.loadAssets();
    // this.load.image('fish1', 'assets/Level1/fish1.png');
    // this.load.image('fish2', 'assets/Level1/fish2.png');
    // this.load.image('fish3', 'assets/Level1/fish3.png');
    // this.load.image('fish4', 'assets/Level1/fish4.png');
    // this.load.image('fish5', 'assets/Level1/fish5.png');
  },

  create: function() {
    level = 1;
    score = 0;

    this.setUp();
    platform_1 = this.add.image(750, 1650, 'platform_long').setOrigin(0);
    platform_2 = this.add.image(0, 200, 'platform_medium').setOrigin(0);
    platform_3 = this.add.image(600, 650, 'platform_short').setOrigin(0);
    platform_4 = this.add.image(1000, 450, 'platform_short').setOrigin(0);
  },

  levelUp: function() {
    this.scene.start('Level3');
  }
});
var e_waste_1;
var e_waste_2;
var e_waste_3;
var e_waste_4;
var e_waste_5;

var Level2 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level2() {
    Phaser.Scene.call(this, { key: 'Level2' });
  },

  preload: function () {
    this.loadAssets();
    this.load.image('e_waste_1', 'assets/Level2/e_waste_1.png');
    this.load.image('e_waste_2', 'assets/Level2/e_waste_2.png');
    this.load.image('e_waste_3', 'assets/Level2/e_waste_3.png');
    this.load.image('e_waste_4', 'assets/Level2/e_waste_4.png');
    this.load.image('e_waste_5', 'assets/Level2/e_waste_5.png');
    this.load.image('e_waste_6', 'assets/Level2/e_waste_6.png');
    this.load.image('e_waste_7', 'assets/Level2/e_waste_7.png');
    this.load.image('e_waste_8', 'assets/Level2/e_waste_8.png');
    this.load.image('e_waste_9', 'assets/Level2/e_waste_9.png');
    this.load.image('e_waste_10', 'assets/Level2/e_waste_10.png');
    this.load.image('e_waste_11', 'assets/Level2/e_waste_11.png');
    this.load.image('e_waste_12', 'assets/Level2/e_waste_12.png');
  },

  create: function () {
    level = 2;
    score = 0;

    this.setUp();
    this.createPlatforms();
    this.createPlayer();
    this.setOpening();
  },

  createWaste: function () {
    waste = this.physics.add.group({
      key: ['e_waste_1', 'e_waste_2', 'e_waste_3', 'e_waste_4', 'e_waste_5', 'e_waste_6', 'e_waste_7', 'e_waste_8', 'e_waste_9', 'e_waste_10', 'e_waste_11', 'e_waste_12'],
      setXY: { x: 50, y: 0, stepX: 160 }
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
    .text(800, 180, 'Level 2   -   E-Waste', { font: '35px Arial Black', fill: '#fff' })
    .setStroke('#665705', 5)
    .setShadow(2, 2, '#333333', 2, true, true);
    openingText = this.add
      .text(680, 230, '     Electronic waste materials\n   cannot be disposed by putting\n               in kerbside bins.\n        These must be taken to\n nearest e-wate collection.\n   Collect these e-waste items  \n  to keep the playground clean!\n', { font: '35px Arial Black', fill: '#fff' })
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
