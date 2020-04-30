var cellSize=25;
var mario;

//https://thecodingtrain.com/CodingChallenges/ https://opengameart.org/ 


// fireball vars
var shot;
var shot2;
var shot3;
var shot4;
var shot5;
var gold;

//score label and var
var score;
var scorelabel;

//lives label and var
var liveslabel;
var lives = 100;

//boolean for starting game after someone clicks on start screen
var start = false;

var myVar;

//hp bar value
var hlth= 200;

function playAgain()
{
  score = 0;
  lives = 100;
  setup();
  draw();
}

function setup()
{
  createCanvas(800,600);
  frameRate(9);

  mario = new Head(cellSize * 2, cellSize * 2, 270, cellSize);

//intializes the fireballs
  shot = new shooters(800,10, 100);
  shot1 = new shooters(800,100,200);
  shot2 = new shooters(800,200,300);
  shot3 = new shooters(800,300,400);
  shot4 = new shooters(800,400,500);
  shot5 = new shooters(800,500,550);
  gold = new shooters(800,10,550);
//  gold = new coin(800,10,100);


}

function draw()
{
  let col = color(255,255,255);

//this if statement is for the start screen--> the game doesn't run until the start screen is clicked
if (start == false)
{
  resizeCanvas(800,800);
  var startimg = new Image(100, 200);
  startimg.src = './images/start.png';
  var s = document.getElementById("defaultCanvas0");
  var stx = s.getContext("2d");
  stx.drawImage(startimg, 0, 0, 800, 700);

  if(mouseIsPressed)
  {
    start = true;
  }

}
//when start screen is clicked this runs
else {
  resizeCanvas(800,600);

  background(120);
  //creates background sky image
  var backgroundimg = new Image(100, 200);
  backgroundimg.src = './images/sky.jpg';
  var c = document.getElementById("defaultCanvas0");
  var ctx = c.getContext("2d");
  ctx.drawImage(backgroundimg, 0, 0, 800, 700);

//displays mario
  mario.display();
  mario.move();

//score increases while player is still alive
  score +=10;

  textSize(18);
  textStyle(BOLD);
  fill(col);
  scorelabel = text("Score: " +int(score), 0, 20);

//HP decreases when mario touches a fireball
 if (mario.intersect(shot) || mario.intersect(shot1) ||
 mario.intersect(shot2) || mario.intersect(shot3) || mario.intersect(shot4) || mario.intersect(shot5))
  {
    lives-=8;
    hlth-=16;
  }

//draws the fireballs
  drawFireballs();


//gold coin comes in once player has less than 14 health left
  if (lives > 0 && lives < 14)
  {
    gold.displaygold();
    gold.move();

    if(mario.intersect(gold))
    {
      lives =100;
      hlth=200;
      gold.restart();
      score = score +200;
    }
  }

  //changing HP bar
    liveslabel = text("HP: ", 520, 25);

if (lives>50)
{
    col = color(50,235,50);
    fill(col);
}
else if (lives<50 && lives>20)
{
  col = color(255, 204, 0);
  fill(col);

}
else{
  col = color(255, 0, 0);
  fill(col);
}

    rect(560, 10, hlth, 20);
    noStroke();


//game over overlay
   if(lives == 0 || lives < 0)
  {

    resizeCanvas(800,800);
    var gameover = new Image(100, 200);
    gameover.src = './images/gameover.png';
    var d = document.getElementById("defaultCanvas0");
    var dtx = d.getContext("2d");
    dtx.drawImage(gameover, 0,0, 800, 700);

    score -=10;

    textSize(30);
    textStyle(BOLD);
    col = color(255,255,255);
    fill(col);
    var end = text(score, 435, 110);


    if(mouseIsPressed==true)
    {
      resizeCanvas(800,600);
      start= false;
      lives =100;
      score=0;
      mario = new Head(cellSize * 2, cellSize * 2, 270, cellSize);
      hlth=200;
    }

}
  }
}

//this creates the fireballs for draw
function drawFireballs()
{

  shot.display();
  shot.move();

  shot1.display();
  shot1.move();

  shot2.display();
  shot2.move();

  shot3.display();
  shot3.move();

  shot4.display();
  shot4.move();

  shot5.display();
  shot5.move();

}

//makes the keys work
function keyPressed()
{
  if (key=='ArrowUp')
  {

    mario.direction =0;
  }

  else if (key=='ArrowLeft')
  {
    mario.direction =270;
  }
  else if (key=='ArrowDown')
  {
    mario.direction =180;
  }
  else if (key=='ArrowRight')
  {
    mario.direction =90;
  }
}
