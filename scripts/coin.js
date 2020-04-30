
class coin {

  constructor(startX, startY1, startY2) {

    this.x = startX;
    this.y = random(startY1, startY2);
    this.y1 = startY1;
    this.y2 = startY2;
    this.speed = 30;



  }


  move() //sideways motion
  {
    this.x -= this.speed;



  }

//thing that draws it
  display() {
  var myImage = new Image(100, 200);
  myImage.src = './images/coin.png';
  var c = document.getElementById("defaultCanvas0");
  var ctx = c.getContext("2d");
  ctx.drawImage(myImage, this.x, this.y, 30, 30);
  }

  restart()
  {

  }
}
