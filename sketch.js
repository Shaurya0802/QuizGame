var backgroundImg;
var sound1,sound2;

var form,game,player,ques;

var database;

var gameState = 0;

var playerCount;

var title;

var counter = 0;

var allQuestions;

function preload(){
  backgroundImg = loadImage("images/Quiz.jpg");
  sound1 = loadSound("sounds/fail-buzzer-01.mp3");
  sound2 = loadSound("sounds/Piano_March.mp3");
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
  title.position(displayWidth/2 - 50,50);

  setInterval(timer,1000);

  game = new Game;
  game.getState();
  game.start();
}

function timer(){
  counter++;
  title.html(convertSeconds(counter));
}

function draw() {
  background(backgroundImg); 

   form.play();
}

function mousePressed(){
  sound2.play();
}