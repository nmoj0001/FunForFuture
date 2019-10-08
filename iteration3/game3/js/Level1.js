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
    platforms = this.physics.add.staticGroup();
    platforms.create(960, 850, 'ground');
    platforms.create(1600, 600, 'platform_long');
    platforms.create(200, 550, 'platform_medium');
    platforms.create(950, 450, 'platform_short');
    platforms.create(650, 300, 'platform_short');
    this.createPlayer();
  },

  levelUp: function () {
    this.scene.start('Level2');
  }
});
