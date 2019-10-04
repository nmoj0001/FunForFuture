var config = {
  type: Phaser.AUTO,
  scale: {
    parent: 'phaser-example',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 920
  },
  physics: {
    default: 'matter',
    matter: { debug: false }
  },
  scene: [Level1, Level2, Level3]
};

var game = new Phaser.Game(config);
