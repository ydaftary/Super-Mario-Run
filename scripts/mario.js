var startX = 100;
var startY = 375;

class Head{
  constructor(startX, startY, dir, cellS){
    this.headX = 375;
    this.headY = 250;
    this.direction = dir; //0 up, 90 right, 180 down, 270 left
    this.cellSize = cellS;

  }


  display()
  {

    var myImage = new Image(100, 200);
    myImage.src = './images/mario.png';
    var c = document.getElementById("defaultCanvas0");
    var ctx = c.getContext("2d");
    ctx.drawImage(myImage, this.headX, this.headY, 60, 60);

  }
//reduces HP when the player touches a fireball
 intersect(theFireball)
  {
//    console.log("FB: "+ theFireball.x);
//    console.log("Head: "+ this.headX);

let distance = dist(this.headX, this.headY, theFireball.x, theFireball.y);
    if (distance < 40)
      {
        return true;
      }
    return false;
  }

  move()
  {
    //go right
      if(this.direction==90)
      {


        if(this.headX < width-50)
          {
            this.headX += this.cellSize*1.3;
          }
      }
//go left
      else if (this.direction ==270)
      {  if(this.headX > 0)
          {
            this.headX -= this.cellSize*1.3;
          }

      }
//go down
      else if (this.direction ==180)
      {
        if(this.headY < height - 70)
          {
        this.headY += this.cellSize*1.3;
          }
      }
//go up
      else if (this.direction ==0)
      {
        if(this.headY>25)
          {

            this.headY -= this.cellSize*1.3;
          }

      }

  }



}
