var sessiontext;
var levelText;
var startLevel;
var level1Bg;
var startScreenBg;
var waste;
var category;
var organic;
var garbage;
var recycling;
var counter;
var num;
var min = 1;
var max = 15;
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
var girl;
var speechBubble;
var speechBubbleText;
var addTotal;

var Baselevel = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Baselevel() {
    Phaser.Scene.call(this, { key: 'Baselevel' });
  },

  preload: function() {
    this.loadAssets();
  },

  create: function() {
    this.setUp();
  },

  loadAssets: function() {
    this.load.image('organic', 'assets/common/organic.png');
    this.load.image('garbage', 'assets/common/garbage.png');
    this.load.image('recycling', 'assets/common/recycling.png');
    this.load.image('girl', 'assets/common/girl_happy.png');
    this.load.image('speechBubble', 'assets/common/speech_bubble.png');
    this.load.image('home', 'assets/common/icon_home.png');
    this.load.image('info', 'assets/common/icon_info.png');
    this.load.image('instructions', 'assets/common/instructions.png');
    this.load.image('score', 'assets/common/score.png');
    this.load.image('timer', 'assets/common/timer.png');
    this.load.image('playNext', 'assets/common/play_next.png');
    this.load.image('play', 'assets/common/play.png');
    this.load.image('resume', 'assets/common/resume.png');
    this.load.image('replay', 'assets/common/replay.png');
    this.load.image('reload', 'assets/common/reload.png');
    this.load.image('submit', 'assets/common/submit_score.png');
    this.load.image('totalScore', 'assets/common/total_score.png');
    this.load.image('dialogueBox', 'assets/common/dialogue_box.png');
  },

  setUp: function() {
    startLevel = false;
    this.matter.world.setBounds(0, 0, 1920, 1080);

    organic = this.add.image(650, 540, 'organic').setOrigin(0);
    garbage = this.add.image(900, 540, 'garbage').setOrigin(0);
    recycling = this.add.image(1150, 540, 'recycling').setOrigin(0);

    girl = this.add.image(50, 420, 'girl').setOrigin(0);
    speechBubble = this.add.image(150, 100, 'speechBubble').setOrigin(0);
    speechBubbleText = this.add.text(320, 220, 'Welcome', {
      fontSize: '32px',
      fill: '#000'
    });

    home = this.add.image(15, 15, 'home').setOrigin(0);
    info = this.add.image(115, 15, 'info').setOrigin(0);
    this.goHome();
    this.showInfo();

    addTotal = true;
    playLevel = true;
    score = 0;
    counter = 12;

    this.updateWaste(level);
  },

  updateWaste: function(level) {
    num = Math.floor(Math.random() * (+max - +min)) + +min;

    if (num >= 1 && num <= 5) category = 'organic';
    else if (num >= 6 && num <= 10) category = 'recycling';
    else if (num >= 11 && num <= 15) category = 'garbage';

    waste = this.matter.add
      .image(1000, 250, 'l' + level + '_' + num, null, { isStatic: true })
      .setInteractive();
  },

  dragObject: function(object) {
    object.on('pointerover', function() {
      this.setTint(0xffc7f2);
    });

    object.on('pointerout', function() {
      this.clearTint();
    });

    this.input.setDraggable(object);

    this.input.on('dragstart', function(pointer, gameObject) {
      gameObject.setTint(0xffc7f2);
    });

    this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on('dragend', function(pointer, gameObject) {
      gameObject.clearTint();
      gameObject.x = 1000;
      gameObject.y = 250;
    });
  },

  update: function() {
    if (playLevel == true) {
      if (startLevel == true) {
        if (counter > 0) {
          this.dragObject(waste);
          this.sortWaste();
          this.updateBonusTimer();
        } else {
          speechBubbleText.setText('Congratulation!');
          speechBubbleText.setX(280);
          speechBubbleText.setY(220);
          this.levelUp();
        }
      }
    } else {
      speechBubbleText.setText('Better Luck\nNext Time!');
      this.loseLevel();
    }
  },

  sortWaste: function() {
    if (
      ((category == 'recycling' && waste.x > 1150 && waste.x < 1450) ||
        (category == 'organic' && waste.x > 650 && waste.x < 900) ||
        (category == 'garbage' && waste.x > 900 && waste.x < 1150)) &&
      (waste.y > 700 && waste.y < 1100)
    ) {
      waste.destroy();
      speechBubbleText.setText('Good Job identifying\n    ' + category);
      speechBubbleText.setX(220);
      speechBubbleText.setY(210);
      counter--;
      this.updateWaste(level);
      this.updateScore(+100);
    } else if (
      waste.y > 700 &&
      waste.y < 1100 &&
      ((category == 'recycling' &&
        ((waste.x > 650 && waste.x < 900) ||
          (waste.x > 900 && waste.x < 1150))) ||
        (category == 'organic' &&
          ((waste.x > 1150 && waste.x < 1450) ||
            (waste.x > 900 && waste.x < 1150))) ||
        (category == 'garbage' &&
          ((waste.x > 1150 && waste.x < 1450) ||
            (waste.x > 900 && waste.x < 1150))))
    ) {
      waste.destroy();
      speechBubbleText.setText('     Oops!\nThis is ' + category);
      speechBubbleText.setX(230);
      speechBubbleText.setY(200);
      counter--;
      this.updateWaste(level);
      if (score > 0) {
        this.updateScore(-50);
      }
    }
  },

  showScore: function() {
    scoreImage = this.add.image(1650, 70, 'score');
    timerImage = this.add.image(1650, 180, 'timer');

    scoreText = this.add
      .text(1705, 40, score, { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    timerText = this.add
      .text(1705, 160, '00:00', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
  },

  updateBonusTimer: function() {
    if (timedEvent.repeatCount == 0) {
      playLevel = false;
    }

    timerText.setText('00:' + timedEvent.repeatCount);
  },

  updateScore: function(update) {
    score += update;
    scoreText.setText(score);

    scoreUpdateText = this.add
      .text(1000, 250, update, { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
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

  startLevel: function(level) {
    play.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        dialogueBox.setVisible(false);
        play.setVisible(false);
        openingText.setVisible(false);
        levelText.setVisible(false);
        startLevel = true;
        timedEvent = this.time.addEvent({ delay: 1000, repeat: 60 });
        this.showScore();
      },
      this
    );
  },

  replayLevel: function(level) {
    replay.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        totalScore -= score;
        this.scene.start(level);
        replay.disableInteractive();
      },
      this
    );
  },

  playNextLevel: function(level) {
    playNext.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        this.scene.start(level);
        replay.disableInteractive();
        playNext.disableInteractive();
      },
      this
    );
  },

  reloadGame: function() {
    reload.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        this.scene.start('Level1');
      },
      this
    );
  },

  setLevelUp: function(winText) {
    info.disableInteractive();

    if (addTotal) {
      totalScore += score;
      addTotal = false;
    }

    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.7);
    replay = this.add.image(850, 620, 'replay');
    playNext = this.add.image(1150, 620, 'playNext');
    winLevelText = this.add
      .text(810, 230, winText, {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    totalScorePrompt = this.add
      .text(830, 300, 'Total Score: ' + totalScore, {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    if (score <= 700) {
      totalScoreImage = this.add.image(1020, 440, 'totalScore');
      achievement = 'Beginner';
    }
    if (score > 700 && score <= 1100) {
      totalScoreImage = this.add.image(970, 440, 'totalScore');
      totalScoreImage = this.add.image(1060, 440, 'totalScore');
      achievement = 'Medium';
    }
    if (score > 1100) {
      totalScoreImage = this.add.image(920, 440, 'totalScore');
      totalScoreImage = this.add.image(1015, 440, 'totalScore');
      totalScoreImage = this.add.image(1110, 440, 'totalScore');
      achievement = 'Expert';
    }

    achievementText = this.add
      .text(790, 500, 'Your Level: ' + achievement, {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
  },

  setLoseLevel: function() {
    info.disableInteractive();
    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.7);
    replay = this.add.image(1000, 500, 'replay');
    loseLevelText = this.add
      .text(900, 350, 'You failed!', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
  },

  goHome: function() {
    home.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        window.open('/iteration3/index.html', '_self');
      },
      this
    );
  },

  showInfo: function() {
    info.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        instructions = this.add.image(1000, 450, 'instructions');
        resume = this.add.image(1000, 750, 'resume');
        this.resumeGame();
      },
      this
    );
  },

  resumeGame: function() {
    resume.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        instructions.setVisible(false);
        resume.setVisible(false);
      },
      this
    );
  },

  submitScore: function() {
    submit.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        var sessionVales = '?1' + '&' + username + '&' + totalScore;
        window.open('/iteration3/submitscore.html' + sessionVales, '_self');
      },
      this
    );
  }
});
