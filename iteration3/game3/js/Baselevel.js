var background;
var recycle;
var player;
var platforms;
var cursors;
var player;
var waste;
var bin;
var score;
var scoreText;
var scoreUpdateText;
var scoreImage;
var totalScore;
var totalScoreText;
var totalScoreImage;
var totalScorePrompt;
var timedEvent;
var timerText;
var timerImage;
var level;
var playLevel;
var dialogueBox;
var replay;
var playNext;
var reload;
var loseLevelText;
var winLevelText;
var addTotal;
var achievement;
var achievementText;


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
    this.load.image('score', 'assets/common/score.png');
    this.load.image('timer', 'assets/common/timer.png');
    this.load.image('playNext', 'assets/common/play_next.png');
    this.load.image('replay', 'assets/common/replay.png');
    this.load.image('reload', 'assets/common/reload.png');
    this.load.image('totalScore', 'assets/common/total_score.png');
    this.load.image('dialogueBox', 'assets/common/dialogue_box.png');
    this.load.spritesheet('girl',
      'assets/common/girl.png',
      { frameWidth: 130, frameHeight: 240 }
    );
  },

  setUp: function () {
    background = this.add.image(0, 0, 'background').setOrigin(0);
    cursors = this.input.keyboard.createCursorKeys();

    addTotal = true;
    playLevel = true;
    score = 0;
    counter = 5;
    timedEvent = this.time.addEvent({ delay: 1000, repeat: 60 });
    this.showScore();
  },

  setUpCollision: function () {
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(waste, platforms);
    this.physics.add.collider(bin, platforms);
    this.physics.add.collider(recycle, platforms);
    this.physics.add.overlap(player, waste, this.collectWaste, null, this);
    this.physics.add.collider(player, bin, this.hitBin, null, this);
    this.physics.add.overlap(player, recycle, this.collectRecycleBonus, null, this);
  },

  createPlatforms: function () {
    platforms = this.physics.add.staticGroup();
    platforms.create(960, 850, 'ground');
    platforms.create(1600, 600, 'platform_long');
    platforms.create(200, 550, 'platform_medium');
    platforms.create(950, 450, 'platform_short');
    platforms.create(650, 300, 'platform_short');
  },

  createPlayer: function () {

    player = this.physics.add.sprite(850, 600, 'girl');

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

  createBin: function (num) {
    bin = this.physics.add.group({
      key: 'bin',
      repeat: num,
      setXY: { x: 200, y: 0, stepX: 500 }
    });

    bin.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));

    });
  },

  createRecycleBonus: function (num) {
    recycle = this.physics.add.group({
      key: 'recycle',
      repeat: num,
      setXY: { x: 300, y: 0, stepX: 600 }
    });

    recycle.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));

    });
  },

  showScore: function () {
    scoreImage = this.add.image(1650, 70, 'score');
    timerImage = this.add.image(1650, 180, 'timer');

    scoreText = this.add
      .text(1705, 50, score, { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#f5b002', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    timerText = this.add
      .text(1705, 160, 'Timer Text', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#f5b002', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
  },

  updateBonusTimer: function () {
    if (timedEvent.repeatCount == 0) {
      playLevel = false;
    }

    timerText.setText('00:' + timedEvent.repeatCount);
  },

  update: function () {
    if (playLevel == true) {

      if (waste.countActive(true) === 9) {
        this.levelUp();
      } else {
        this.updateBonusTimer();
      }
    }
    else {
      this.loseLevel();
    }

    if (cursors.left.isDown) {
      player.setVelocityX(-160);

      player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(160);

      player.anims.play('right', true);
    }
    else {
      player.setVelocityX(0);

      player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-400);
    }
  },

  updateScore: function (update) {
    score += update;
    scoreText.setText(score);

    scoreUpdateText = this.add
      .text(1000, 250, update, { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#f5b042', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    var tween = this.tweens.add({
      targets: scoreUpdateText,
      y: 300,
      ease: 'Power1',
      duration: 1500,
      alpha: 0,
      onComplete: () => {
        scoreUpdateText.destroy();
      }
    });
  },

  collectWaste: function (player, waste) {
    waste.disableBody(true, true);
    this.updateScore(100);
  },

  collectRecycleBonus: function (player, recycle) {
    recycle.disableBody(true, true);
    this.updateScore(50);
  },

  hitBin: function (player, bin) {
    bin.disableBody(true, true);
    this.updateScore(-50);
    player.anims.play('turn');
  },

  replayLevel: function (level) {
    replay.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        totalScore -= score;
        this.scene.start(level);
        replay.disableInteractive();
      },
      this
    );
  },

  playNextLevel: function (level) {
    playNext.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        this.scene.start(level);
        replay.disableInteractive();
        playNext.disableInteractive();
      },
      this
    );
  },

  reloadGame: function () {
    reload.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        this.scene.start('Level1');
      },
      this
    );
  },

  setLevelUp: function () {
    if (addTotal) {
      totalScore += score;
      addTotal = false;
    }

    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.7)
    replay = this.add.image(850, 620, 'replay');
    playNext = this.add.image(1150, 620, 'playNext');
    winLevelText = this.add
      .text(810, 230, 'Level Complete!', {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    totalScorePrompt = this.add
      .text(830, 300, 'Total Score: ' + totalScore, {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);


    if (totalScore <= 900) {
    //   totalScoreImage = this.add.image(990, 440, 'totalScore');
    //   achievement = 'Beginner';
    // }
    // if (totalScore > 900 && totalScore <= 1000) {
    //   totalScoreImage = this.add.image(970, 440, 'totalScore');
    //   totalScoreImage = this.add.image(1060, 440, 'totalScore');
    //   achievement = 'Medium';
    // } if (totalScore > 1000) {
      totalScoreImage = this.add.image(920, 440, 'totalScore');
      totalScoreImage = this.add.image(1015, 440, 'totalScore');
      totalScoreImage = this.add.image(1110, 440, 'totalScore');
      achievement = 'Expert';
    }

    achievementText = this.add
      .text(790, 500, 'Your Level: ' + achievement, { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
  },

  setLoseLevel: function () {
    dialogueBox = this.add.image(1000, 300, 'dialogueBox');
    replay = this.add.image(1000, 380, 'replay');
    loseLevelText = this.add
      .text(850, 150, 'You failed!', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
  }
});
