var backgroundImg;
var sound1,sound2;

var form,game,player,ques;

var database;

var gameState = 0;

var playerCount;

var title;

var counter = 0;

var allQuestions,userAnswers;

var score = 0;

var Score;

var question;

function preload(){
  backgroundImg = loadImage("images/Quiz.jpg");
  sound1 = loadSound("sounds/fail-buzzer-01.mp3");
  sound2 = loadSound("sounds/Piano_March.mp3");
  sound3 = loadSound("sounds/Mouse Clicked.mp3");
}

function convertSeconds(s){
  var min = floor(s/60);
  var sec = s % 60;
  return nf(min,2) + ":" + nf(sec,2);
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  title = createElement('h1');
  title.html(convertSeconds(counter));
  title.position(displayWidth/2 - 75,50);

  setInterval(timer,1000);

  game = new Game;
  game.getState();
  game.start();
}

function timer(){
  counter++;
  title.html(convertSeconds(counter));
  title.style("font-family","Comic Sans MS");
}

function draw() {
  background(backgroundImg); 

  form.play();

  fill(100,0,255);
  strokeWeight(7);
  stroke(0);
  textSize(40);
  textStyle(BOLD);
  textFont("Comic Sans MS");
  text("Score : " + score,displayWidth/2 + 200,displayHeight/2 - 300);
}