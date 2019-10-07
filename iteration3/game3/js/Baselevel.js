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
        'assets/common/girl.png',
        { frameWidth: 32, frameHeight: 48 }
    );
  },

  setUp: function () {
    this.matter.world.setBounds(0, 0, 1920, 1080);
    // counter = 0;

    background = this.add.image(0, 0, 'background').setOrigin(0);
    recycle = this.add.image(0, 0, 'recycle').setOrigin(0);

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