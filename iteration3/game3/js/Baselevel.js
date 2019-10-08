var background;
var recycle;
var player;
var platforms;

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
    this.load.image('background', 'assets/common/background.png');
    this.load.image('ground', 'assets/common/ground.png');
    this.load.image('recycle', 'assets/common/recycle_badge.png');
    this.load.image('bin', 'assets/common/bin.png');
    this.load.image('platform_long', 'assets/common/platform_long.png');
    this.load.image('platform_medium', 'assets/common/platform_medium.png');
    this.load.image('platform_short', 'assets/common/platform_short.png');
    this.load.spritesheet('girl',
      'assets/common/girl.png',
      { frameWidth: 135, frameHeight: 250 }
    );
  },

  setUp: function () {
    background = this.add.image(0, 0, 'background').setOrigin(0);
    recycle = this.add.image(0, 0, 'recycle').setOrigin(0);
  },

  createPlayer: function () {
    var player = this.physics.add.sprite(850, 60, 'girl');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('girl', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'girl', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('girl', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  },

  update: function () { },

  updateScore: function () {
  }
});