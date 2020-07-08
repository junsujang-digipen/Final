/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
class particle{
  constructor(x,y,l,a){
    this.position = new Vec2(x,y);
    this.velo = new Vec2(0,0);
    this.velo.setLength(l);
    this.velo.setAngle(a);
  }
  update(){
    this.position.addTo(this.velo);
  }
  levelinput(level){
  	this.level = level
  }
  effectxmove(){
  	if (xmove > -width / 2 && keyIsDown(65)) {
      this.position.x += xspeed
    }
    if (xmove < land.length * 40 - width / 2 && keyIsDown(68)) {
      this.position.x -= xspeed
    }
  }
}