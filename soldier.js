/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
class soldier extends unitbase {
  constructor(x, y, xspeed) {
    super(x, y, xspeed);
    this.atrange = 1;
    this.arrow = [];
    this.time = 0;
    this.archer = archer[0];
    this.timer = 0;
    this.at = 0;
  }
  draw() {
    
    image(this.archer, this.x, this.y, size, size);
  }
  rewp(wp) {
    this.wp = wp;
    this.level = this.wp.level;
    this.atrange = this.level;
    this.atpow = this.level;
  }
  update(t) {
    if(this.level ==4){
      this.speed = 2
    }
    if(this.level ==5){
      this.speed = 3
    }
this.timer += 1 / 4;
    if (xmove>-width/2 && keyIsDown(65)) {
      t.x += this.xspeed;
    }
    if (xmove < land.length*40 - width/2 && keyIsDown(68)) {
      t.x -= this.xspeed;
    }
  }
  going() {
    if (this.state == 'going') {
      this.archer = archer[floor(this.timer) % 8];
      if (this.x < this.wp.x) {
        this.x += this.speed;
      } else if (this.x >= this.wp.x) {
        this.state = 'defense';
      }
    }
  }
  defense() {
    if (this.state == 'defense') {
      this.archer = archer[8];
      this.y = this.wp.y - this.wp.size-size/2;
      var ey;
      var ex;
      for (var i = enemy.length-1; i >=0; i--) {
        if (enemy[i].x < this.x + width * this.atrange && enemy[i].x > this.x - width * this.atrange) {
          ex = enemy[i].x;
          ey = enemy[i].y;
         this.at = 1;
        }
      }if(time == 'daytime'){
          this.at = 0;
        }
      shootsound.setVolume(effectvolume);
      if(this.at == 1){
        this.time += this.atspeed/60;
        this.archer = archer[8 + floor(this.time*14)%14];
          if(this.time*14 < 10+ this.atspeed/60*14 && this.time*14 > 10){
            this.arrow.push(new particle(this.x, this.y, 10 + this.level/3, atan2(ey - this.y, ex - this.x)));
            // this.arrow.push(new particle(this.x, this.y, 10, atan2(enemy[i].y - this.y, enemy[i].x - this.x)));
            shootsound.play();
             }
          if (this.time > 1) {
            this.time = 0;
          }
      }
      for (var j = 0; j < this.arrow.length; j++) {
        this.update(this.arrow[j].position);
        push();
        translate(this.arrow[j].position.x, this.arrow[j].position.y);
        rotate(this.arrow[j].velo.getAngle());
        
        image(arrow[this.level-1],0,0);
        // strokeWeight(this.atpow * 2);
        // point(this.arrow[j].position.x, this.arrow[j].position.y);
        pop();
        this.arrow[j].update();
        if (this.arrow[j].position.y > height - size) {
          this.arrow.splice(j, 1);
        }
      }

    }
  }

}