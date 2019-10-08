var solid_1;
var solid_2;
var solid_3;
var solid_4;
var solid_5;

var Level1 = new Phaser.Class({
  Extends: Baselevel,

  initialize: function Level1() {
    Phaser.Scene.call(this, { key: 'Level1' });
  },

  preload: function () {
    this.loadAssets();
    this.load.image('solid_1', 'assets/Level1/solid_1.png');
    this.load.image('solid_2', 'assets/Level1/solid_2.png');
    this.load.image('solid_3', 'assets/Level1/solid_3.png');
    this.load.image('solid_4', 'assets/Level1/solid_4.png');
    this.load.image('solid_5', 'assets/Level1/solid_5.png');
    this.load.image('solid_6', 'assets/Level1/solid_6.png');
    this.load.image('solid_7', 'assets/Level1/solid_7.png');
    this.load.image('solid_8', 'assets/Level1/solid_8.png');
    this.load.image('solid_9', 'assets/Level1/solid_9.png');
    this.load.image('solid_10', 'assets/Level1/solid_10.png');
  },

  create: function () {
    level = 1;
    score = 0;

    this.setUp();
    this.createPlatforms();
    this.createPlayer();
    this.createWastes();
  },

  levelUp: function () {
    this.scene.start('Level2');
  },

  createPlatforms: function () {
    platforms = this.physics.add.staticGroup();
    platforms.create(960, 850, 'ground');
    platforms.create(1600, 600, 'platform_long');
    platforms.create(200, 550, 'platform_medium');
    platforms.create(950, 450, 'platform_short');
    platforms.create(650, 300, 'platform_short');
  },

  createWastes: function () {
    waste = this.physics.add.group({
      key: ['solid_1', 'solid_2', 'solid_3', 'solid_4', 'solid_5', 'solid_6', 'solid_7', 'solid_8', 'solid_9', 'solid_10'],
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    waste.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
  }
});
