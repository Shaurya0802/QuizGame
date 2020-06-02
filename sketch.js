var backgroundImg;
var sound1,sound2;

var form,game,player,ques;

var database;

var gameState = 0;

var playerCount = 0;

var title;

var counter = 15;

var allQuestions,userAnswers;

var score = 0;

var Score;

var question;

var questionNum = 1;

function preload(){
  backgroundImg = loadImage("images/Quiz.jpg");
  sound1 = loadSound("sounds/Mouse Clicked.mp3");
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  title = createElement('h1');
  title.html(convertSeconds(counter));
  title.position(displayWidth/2 - 75,50);

  game = new Game;
  game.start();
}

function draw() {
  background(backgroundImg);

  if(gameState === 1){
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

  fill(100,0,255);
  strokeWeight(7);
  stroke(0);
  textSize(40);
  textStyle(BOLD);
  textFont("Comic Sans MS");
  text("Score : " + player.score,displayWidth/2 + 200,displayHeight/2 - 300);
}