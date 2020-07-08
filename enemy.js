/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
class enemies extends unitbase {
  constructor(x, y, xspeed, size) {
    super(x, y, xspeed);
    this.size = size;
    this.time = 0;
    this.p = null;
    // this.speed =0.1;
    this.Denemy = Denemy[0];
    this.timer = 0;
    this.ts = 1 / 8;
    this.atrange = 25
    this.xoff1 = 0;
    this.xoff2 = 0;
    this.yoff1 = 0;
    this.yoff2 = 0;
    this.atdelay = 1;
  }
  draw() {
    // circle(this.x, this.y, this.size);
    push();
    image(this.Denemy, this.x, this.y, this.size / 2, this.size);
    fill(255);
    circle(this.x - 10, this.y - this.size / 2, 10);
    circle(this.x - 2, this.y - this.size / 2, 10);
    fill(0);
    circle(this.x - 10 + map(noise(this.xoff1, this.yoff1), 0, 1, -3, 3), this.y - this.size / 2 - map(noise(this.xoff2, this.yoff1), 0, 1, -3, 3), 3);
    circle(this.x - 2 + map(noise(this.xoff1, this.yoff2), 0, 1, -3, 3), this.y - this.size / 2 + map(noise(this.xoff2, this.yoff1), 0, 1, -3, 3), 3);
    this.xoff1 += 0.02
    this.xoff2 += 0.015
    this.yoff1 += 0.005
    this.yoff2 += 0.01
    pop();
  }
  update() {
    this.level = floor(daycount / 3 + 1);
    if (this.hp < this.level) {
      // this.hp = this.level
      this.hp += 1;
    }

    if (this.x < width / 2 - xmove) {
      page = 'gameover'
    }
    for (var i = 0; i < barrier.length; i++) {
      if ((this.x - this.atrange < barrier[i].x && this.x > barrier[i].x)) {
        this.state = 'attack';
        this.p = i;
        this.timer = 0;
      }
      if (this.x - this.atrange > barrier[i].x) {
        this.state = 'going'
      }
    }

    if (xmove > -width / 2 && keyIsDown(65)) {
      this.x += this.xspeed;
    }
    if (xmove < land.length * 40 - width / 2 && keyIsDown(68)) {
      this.x -= this.xspeed;
    }
  }
  going(Denemy) {
    if (this.state == 'going') {
      this.Denemy = Denemy[floor(this.timer) % 8];
      this.timer += this.ts
      this.x -= this.speed;
    }
  }

  attack(Denemy) {
    if (this.state == 'attack') {
      this.Denemy = Denemy[8 + floor(this.timer) % 7];
      this.timer += this.ts
      this.time += this.atspeed / 60;
      if (barrier[this.p].hp <= 0) {
        this.p = null;
        this.state = 'going'

      }
      if (this.time > this.atdelay && this.state == 'attack') {
        this.time = 0;
        barrier[this.p].hp -= this.atpow;
      }
    }
    // console.log(this.hp);
  }
  beat(sol) {
    firesound.setVolume(effectvolume);
    for (var i = 0; i < sol.length; i++) {
      for (var j = 0; j < sol[i].arrow.length; j++) {
        if (heatbox(sol[i].arrow[j].position.x, sol[i].arrow[j].position.y, this.x, this.y, this.size / 2, this.size)) {

          if(sol[i].level>=3){
            for(var eff = 0;eff<100;eff++){
    Feffect.push(new particle(sol[i].arrow[j].position.x,sol[i].arrow[j].position.y,random(3),random(TWO_PI)));
    Feffect[eff].levelinput(sol[i].level);
  }setTimeout(function(){Feffect.splice(0,100)},500)
  
          }
          firesound.play();
          this.hp -= sol[i].atpow;
          this.x += 50;
          console.log(this.hp);
          sol[i].arrow.splice(j, 1);
        }
      }
    }
  }

}


class EEJAY extends enemies {
  constructor(x, y, xspeed, size) {
    super(x, y, xspeed, size);
    this.speed = 2;
    this.atrange = 200;
    this.hp = 3 + daycount;
    this.atpow = 2
  }
  draw() {
    punchsound.setVolume(effectvolume);
    if(this.state == 'going'){
      image(eejay[floor(this.timer)%6],this.x,this.y,this.size,this.size);
    }
    if(this.state == 'attack'){
      image(eejay[6+floor(this.time*10)%10],this.x-this.atrange/2,this.y,this.size*5,this.size);
      if(this.time*10>=4 && this.time*10<4+this.atspeed / 60*14){
        punchsound.play();
      }
    }
    // rect(this.x, this.y, this.size, this.size);
  }
}
class KANGSAN extends enemies {
  constructor(x, y, xspeed, size) {
    super(x, y, xspeed, size);
    this.speed = 1;
    this.atrange = this.size*3.5;
    this.hp = 1;
    this.atpow = 4
  }
  draw() {
    lazersound.setVolume(effectvolume);
    // rect(this.x, this.y, this.size, this.size);
    if(this.state == 'going'){
      image(san[floor(this.timer)%6],this.x,this.y,this.size*5,this.size);
    }
    if(this.state == 'attack'){
      image(san[6+floor(this.time*9)%9],this.x,this.y,this.size*5,this.size);
      if(this.time*9>=8 && this.time*9<8+this.atspeed / 60*14){
        lazersound.play();
      }
    }
  }
}