
var score = 0;
class shooters {

  constructor(startX, startY1, startY2) {

    this.x = startX;
    this.y = random(startY1, startY2);
    this.y1 = startY1;
    this.y2 = startY2;
    this.speed = random(40, 60);



  }


  move() //sideways motion
  {
    this.x -= this.speed;

    if (this.x<0)
    {
      this.x=800;
      this.y= random(this.y1,this.y2);
      this.speed = random(40, 60);

    }

  }

//thing that draws it
  display() {
  var myImage = new Image(100, 200);
  myImage.src = './images/fireball.png';
  var c = document.getElementById("defaultCanvas0");
  var ctx = c.getContext("2d");
  ctx.drawImage(myImage, this.x, this.y, 30, 30);
  }

  displaygold() {
    var goldcoin = new Image(100, 200);
    goldcoin.src = './images/coin.png';
    var g = document.getElementById("defaultCanvas0");
    var gtx = g.getContext("2d");
    gtx.drawImage(goldcoin, this.x, this.y, 30, 30);
  }

  restart()
  {

  }
}
