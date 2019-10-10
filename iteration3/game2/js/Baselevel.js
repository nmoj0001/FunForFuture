var score;
var scoreText;
var background;
var girl;
var speechBubble;
var speechBubbleText;
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

  preload: function() {
    this.loadAssets();
  },

  create: function() {
    this.setUp();
  },

  loadAssets: function() {
    this.load.image('background', 'assets/common/background.png');
    this.load.image('girl', 'assets/common/girl_happy.png');
    this.load.image('speechBubble', 'assets/common/speech_bubble.png');
    this.load.image('score', 'assets/common/score.png');
    this.load.image('choice1', 'assets/common/choice1.png');
    this.load.image('choice2', 'assets/common/choice2.png');
    this.load.image('choice3', 'assets/common/choice3.png');
    this.load.image('choice4', 'assets/common/choice4.png');
    this.load.json('questions', 'json/questions.json');
    this.load.image('replay', 'assets/common/replay.png');
  },

  setUp: function() {
    this.matter.world.setBounds(0, 0, 1920, 1080);
    counter = 0;

    background = this.add.image(0, 0, 'background').setOrigin(0);
    girl = this.add.image(20, 150, 'girl').setOrigin(0);

    speechBubble = this.add.image(200, 20, 'speechBubble').setOrigin(0);
    speechBubble.setScale(0.8);
    speechBubbleText = this.add
      .text(280, 100, 'Welcome', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    questionText = this.add
      .text(700, 20, 'Question', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    choice1 = this.add.image(700, 120, 'choice1').setOrigin(0);
    choice2 = this.add.image(700, 250, 'choice2').setOrigin(0);
    choice3 = this.add.image(700, 390, 'choice3').setOrigin(0);
    choice4 = this.add.image(700, 510, 'choice4').setOrigin(0);

    answerText = this.add
      .text(850, y1, 'Answer', { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    wrongText1 = this.add
      .text(850, y2, 'Wrong Choice 2', {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    wrongText2 = this.add
      .text(850, y3, 'Wrong Choice 3', {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);
    wrongText3 = this.add
      .text(850, y4, 'Wrong Choice 4', {
        font: '40px Arial Black',
        fill: '#fff'
      })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    scoreImage = this.add.image(1750, 70, 'score');
    scoreText = this.add
      .text(1805, 50, score, { font: '40px Arial Black', fill: '#fff' })
      .setStroke('#ffdd00', 16)
      .setShadow(2, 2, '#333333', 2, true, true);

    this.updateScore();

    questions = this.cache.json.get('questions');
    this.updateQuestion();
  },

  update: function() {},

  updateScore: function() {
    answerText.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
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
      function() {
        this.wrongAnswer();
      },
      this
    );

    wrongText2.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        this.wrongAnswer();
      },
      this
    );

    wrongText3.setInteractive({ useHandCursor: true }).on(
      'pointerup',
      function() {
        this.wrongAnswer();
      },
      this
    );
  },

  wrongAnswer: function() {
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

  setUpQuestion: function() {
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
  }
});
