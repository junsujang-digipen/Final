/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
class Vec2{
  
  constructor(x,y){
    this.x = 0 || x;
    this.y = 0 || y;
  }
  create(x,y){
    var obj = Object.create(this);
    obj.x = x;
    obj.y = y;
    return obj;
  }
  
  getAngle(){
    return atan2(this.y,this.x);
  }
  
  getLength(){
    return sqrt(this.x*this.x + this.y*this.y);
  }
  
  setAngle(angle_in_radians){
    var length = this.getLength();
    this.x = cos(angle_in_radians) * length;
    this.y = sin(angle_in_radians) * length;
  }
  
  setLength(length){
    var angle = this.getAngle();
    this.x = cos(angle) * length;
    this.y = sin(angle) * length;
  }
  
  add(v2){
    return this.create(this.x + v2.x,this.y + v2.y);
  }
  
  addTo(v2){
    this.x +=v2.x;
    this.y +=v2.y;
  }
  
  subtract(v2){
    return this.create(this.x - v2.x,this.y - v2.y);
  }
  
  subtractFrom(v2){
    this.x -=v2.x;
    this.y -=v2.y;
  }
  
  multiply(scalar){
    return this.create(this.x * scalar,this.y * scalar);
  }
  
  multiplyBy(scalar){
    this.x *=scalar;
    this.y *=scalar;
  }
  
  divide(scalar){
    return this.create(this.x / scalar,this.y / scalar);
  }
  
  divideBy(scalar){
    this.x /=scalar;
    this.y /=scalar;
  }
  
}