class Background
{

  constructor() {

    }

display()
{
    var myImage = new Image(100, 200);
    myImage.src = './images/sky.jpg';
    var c = document.getElementById("defaultCanvas0");
    var ctx = c.getContext("2d");
    ctx.drawImage(myImage, this.headX, this.headY, 500, 500);
}

}
