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

var questionNum = -8;

var no = 1;

var slider;

var timer;
var timeLeft = 15;
var counter = 0;

function preload(){
  backgroundImg = loadImage("images/Quiz.jpg");
  sound1 = loadSound("sounds/Mouse Clicked.mp3");
  sound2 = loadSound("sounds/Surprise-music-sound-effect.mp3");
  sound3 = loadSound("sounds/Wrong-answer-sound-effect.mp3");
  sound4 = loadSound("sounds/happy sound.mp3");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();

  game = new Game;
  game.start();

  slider = createSlider(0,1,0.5,0.1);
  slider.position(50,80);;

  sound4.play();

  var timer = createElement('h1');
  timer.html(timeLeft - counter);
  timer.position(windowWidth/2 - 40,70);
  timer.style("font-family","Comic Sans MS");
  timer.style("color","#0000ff");

  function timeIt(){
    if(gameState === 1){
      counter++;
      timer.html(timeLeft - counter);
    }
  }

  setInterval(timeIt,1000);
}

function draw() {
  background(backgroundImg);

  if(gameState === 1){
    game.play();
    fill(100,0,255);
    strokeWeight(7);
    stroke(0);
    textSize(40);
    textStyle(BOLD);
    textFont("Comic Sans MS");
    text("Score : " + player.score,windowWidth/2 + 250,windowHeight/2 - 200);
  }

  if(gameState === 2){
    game.end();
  }

  fill("#ffdb58");
  strokeWeight(7);
  stroke(255,0,0);
  textSize(50);
  textStyle(BOLD);
  textFont("Comic Sans MS");
  text("Incredibly Sensible Quiz",windowWidth/2 - 300,50);

  fill("#ffdb58");
  strokeWeight(3);
  stroke(255,0,0);
  textSize(20);
  textStyle(BOLD);
  textFont("Comic Sans MS");
  text("Control the song's \n sound 🎶🎶",50,50);

  sound1.setVolume(slider.value());
  sound2.setVolume(slider.value());
  sound3.setVolume(slider.value());
  sound4.setVolume(slider.value());
}