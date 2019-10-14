var background;
var sessiontext;
var levelText;
var startLevel;
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
var questionText;
var choice1;
var choice2;
var choice3;
var choice4;
var wrongText1;
var wrongText2;
var wrongText3;
var answerText;
var yPositions;
var y1;
var y2;
var y3;
var y4;
var questions;
var counter;

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
    this.load.image('score', 'assets/common/score.png');
    this.load.image('choice1', 'assets/common/choice1.png');
    this.load.image('choice2', 'assets/common/choice2.png');
    this.load.image('choice3', 'assets/common/choice3.png');
    this.load.image('choice4', 'assets/common/choice4.png');
    this.load.json('questions', 'json/questions.json');
    this.load.image('replay', 'assets/common/replay.png');
  },

  setUp: function () {
    startLevel = false;
    this.matter.world.setBounds(0, 0, 1920, 1080);
    counter = 0;

    background = this.add.image(0, 0, 'background').setOrigin(0);
    girl = this.add.image(20, 150, 'girl').setOrigin(0);
    speechBubble = this.add.image(200, 20, 'speechBubble').setOrigin(0);
    speechBubble.setScale(0.8);
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
  },

  update: function () {
    if (playLevel == true) {
      if (startLevel == true) {
        if (counter > 0) {
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

  setUpQuestionAnswer: function () {
    questionText = this.add
      .text(650, 20, 'Question', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    choice1 = this.add.image(650, 120, 'choice1').setOrigin(0);
    choice2 = this.add.image(650, 250, 'choice2').setOrigin(0);
    choice3 = this.add.image(650, 390, 'choice3').setOrigin(0);
    choice4 = this.add.image(650, 510, 'choice4').setOrigin(0);

    answerText = this.add
      .text(800, y1, 'Answer', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    wrongText1 = this.add
      .text(800, y2, 'Wrong Choice 2', {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    wrongText2 = this.add
      .text(800, y3, 'Wrong Choice 3', {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    wrongText3 = this.add
      .text(800, y4, 'Wrong Choice 4', {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    questions = this.cache.json.get('questions');
    this.updateQuestion();
    this.updateScore();
  },

  updateScore: function () {
    answerText.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        speechBubbleText.setText('Good Job!');
        speechBubbleText.x = 280;
        score += 100;
        scoreText.setText(score);
        scoreUpdateText = this.add
          .text(1800, 120, '+100', { font: '40px Arial Black', fill: '#fff' })
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
        this.updateQuestion();
      },
      this
    );

    wrongText1.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        this.wrongAnswer();
      },
      this
    );

    wrongText2.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        this.wrongAnswer();
      },
      this
    );

    wrongText3.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        this.wrongAnswer();
      },
      this
    );
  },

  wrongAnswer: function () {
    speechBubbleText.setText('Wrong!');
    speechBubbleText.x = 310;
    if (score > 0) {
      score -= 10;
      scoreText.setText(score);
      scoreUpdateText = this.add
        .text(1800, 120, '-50', { font: '40px Arial Black', fill: '#fff' })
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
    }
  },

  setUpQuestion: function () {
    yPositions = Array(145, 275, 415, 535);
    y1 = yPositions[Math.floor(Math.random() * yPositions.length)];
    yPositions = yPositions.filter(item => item !== y1);
    y2 = yPositions[Math.floor(Math.random() * yPositions.length)];
    yPositions = yPositions.filter(item => item !== y2);
    y3 = yPositions[Math.floor(Math.random() * yPositions.length)];
    yPositions = yPositions.filter(item => item !== y3);
    y4 = yPositions[Math.floor(Math.random() * yPositions.length)];

    answerText.y = y1;
    wrongText1.y = y2;
    wrongText2.y = y3;
    wrongText3.y = y4;
  },

  showScore: function () {
    scoreImage = this.add.image(1700, 70, 'score');
    timerImage = this.add.image(1700, 180, 'timer');

    scoreText = this.add
      .text(1755, 40, score, { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    timerText = this.add
      .text(1755, 160, '00:00', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
  },

  updateBonusTimer: function () {
    if (timedEvent.repeatCount == 0) {
      playLevel = false;
    }

    timerText.setText('00:' + timedEvent.repeatCount);
  },

  updateScore: function (update) {
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

  startLevel: function (level) {
    play.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        dialogueBox.setVisible(false);
        play.setVisible(false);
        openingText.setVisible(false);
        levelText.setVisible(false);
        startLevel = true;
        timedEvent = this.time.addEvent({ delay: 1000, repeat: 10 });
        this.showScore();
        this.setUpQuestionAnswer();
      },
      this
    );
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

  setLevelUp: function (winText) {
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

  setLoseLevel: function () {
    info.disableInteractive();
    dialogueBox = this.add.image(1000, 450, 'dialogueBox');
    dialogueBox.setScale(0.7);
    replay = this.add.image(1000, 500, 'replay');
    loseLevelText = this.add
      .text(900, 350, 'You failed!', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffc812', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
  },

  goHome: function () {
    home.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        window.open('/index.html', '_self');
      },
      this
    );
  },

  showInfo: function () {
    info.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        instructions = this.add.image(1000, 450, 'instructions');
        resume = this.add.image(1000, 750, 'resume');
        this.resumeGame();
      },
      this
    );
  },

  resumeGame: function () {
    resume.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        instructions.setVisible(false);
        resume.setVisible(false);
      },
      this
    );
  },

  submitScore: function () {
    submit.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function () {
        window.open('/score.php?score=' + totalScore + "&game=2", '_self');
      },
      this
    );
  }
});
