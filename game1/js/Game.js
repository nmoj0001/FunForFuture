var config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'phaser-example',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: auto,
        height: auto,
    },
    physics: {
        default: 'matter',
        matter: { debug : true }
    },
    scene: [ Level1 ]
};

var game = new Phaser.Game(config);