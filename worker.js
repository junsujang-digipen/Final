/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
class unit {
  constructor(x, y, state,target, targetstate) {
    this.x = x;
    this.y = y;
    this.sp = x;
    this.state = state;
    this.size = 20;
    this.speed = 2;
    this.target = target;
    this.targetstate = targetstate;
    this.worker = workermove[0];
    this.time = 0;
  }
  draw() {
    this.time+=1/4;
    // this.worker = workermove[floor(this.time)%8];
    // rect(this.x, this.y, this.size, this.size);
    image(this.worker,this.x, this.y, this.size*2, this.size*2);
  }
  update(t,sp,psp) {
    this.target = t;
    this.sp = sp;
    if (this.state == 'going') {
      this.worker = workermove[floor(this.time)%8];
      if (this.x <= this.target) {
        this.x += this.speed;
        if (this.x >= this.target) {
          this.state = 'working';
        }
      }else if (this.x >= this.target) {
        this.worker = workermove[8+floor(this.time)%8];
        this.x -= this.speed;
        if (this.x <= this.target) {
          this.state = 'working';
        }
      }
    }
    if (this.state == 'working') {
      this.targetstate[1] = 'non';
      
      this.state = 'goback';
    }
    if(this.state == 'goback'){
      if (this.x > this.sp) {
        this.worker = workermove[8+floor(this.time)%8];
        this.x -= this.speed;
        if (this.x <= this.sp) {
          this.state = 'end';
          this.targetstate[2] = 'non';
        }
      } else if (this.x < this.sp) {
        this.worker = workermove[floor(this.time)%8];
        this.x += this.speed;
        if (this.x >= this.sp) {
          this.state = 'end';
          this.targetstate[2] = 'non';
        }
      }
    }
    if(xmove>-width/2 && keyIsDown(65)){
      this.x += psp;
    }
    if(xmove < land.length*40 - width/2 && keyIsDown(68)){
      this.x -= psp;
    }
  }
}