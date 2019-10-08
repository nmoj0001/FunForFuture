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
    this.load.image('recycle', 'assets/common/recycle_badge.png');
    this.load.image('bin', 'assets/common/bin.png');
    this.load.image('platform_long', 'assets/common/platform_long.png');
    this.load.image('platform_medium', 'assets/common/platform_medium.png');
    this.load.image('platform_short', 'assets/common/platform_short.png');
    this.load.spritesheet('girl',
      'assets/common/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    );
  },

  setUp: function () {
    this.matter.world.setBounds(0, 0, 1920, 1080);
    // counter = 0;

    background = this.add.image(0, 0, 'background').setOrigin(0);
    recycle = this.add.image(0, 0, 'recycle').setOrigin(0);
    this.createPlayer();

    // scoreImage = this.add.image(1750, 70, 'score');
    // scoreText = this.add
    //   .text(1805, 50, score, { font: '40px Arial Black', fill: '#fff' })
    //   .setStroke('#ffdd00', 16)
    //   .setShadow(2, 2, '#333333', 2, true, true);

    // this.updateScore();
  },

  createPlayer: function () {
    var player = this.physics.add.sprite(1000, 800, 'girl');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

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