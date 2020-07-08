/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
class barr {
  constructor(x, y) {
    this.x = x;
    this.nextx = this.x + width * 5 / 6;
    this.y = y;
    this.size = -82;
    this.fsize = this.size;
    this.hp = 1;
    this.level = 1;
    this.getcoin = [];
    this.nbarrcoin = 0;
    this.tower = tower[0];

  }
  draw() {
    // rect(this.x, this.y, 10, this.size);
    image(this.tower, this.x, this.y);
  }
  update(xspeed) {
    switch (this.level) {
      case 1:
        this.size = -82;
        break;
      case 2:
        this.size = -40;
        break;
      case 3:
        this.size = 18;
        break;
      case 4:
        this.size = 113;
        break;
      case 5:
        this.size = 113;
        break;
    }
    this.cx = this.x - (this.level - 1) * 15;
    // this.x = this.x;
    if (xmove > -width / 2 && keyIsDown(65)) {
      this.x += xspeed
    }
    if (xmove < land.length * 40 - width / 2 && keyIsDown(68)) {
      this.x -= xspeed
    }

  }
  upgradereq(camplevel) {

    if (this.level < camplevel && this.x > width/2-100 && this.x < width/2+100) {
      for (var i = 0; i < this.level; i++) {
        push();
        fill(this.getcoin[i] == 1 ? 50 : 200);
        stroke(rangecolor(this.cx, this.y - this.size));
        circle(this.cx, this.y - this.size, 20);
        pop();
        this.cx += 30

      }
    }
  }
  upgrade() {
    var getcoinN = 0;
    for (var i = 0; i < this.level; i++) {
      getcoinN += this.getcoin[i];
    }
    if (getcoinN == this.level) {
      this.level += 1;
      this.hp += 2;
      this.tower = tower[this.level - 1]
      // this.size+=50;
      this.getcoin.splice(0, this.level);
    }
  }
  Getcoin(camplevel) {
    this.cx = this.x - (this.level - 1) * 15;
    for (var j = 0; j < this.level; j++) {
      if (this.level < camplevel && this.x > width/2-100 && this.x < width/2+100 && money > 0 && this.getcoin[j] != 1 && range(this.cx, this.y - this.size)) {
        this.getcoin[j] = 1;
        console.log(this.getcoin[j] + j);
        money -= 1;
      }
      this.cx += 30;
    }
  }

  nextbarr() {
    this.nextx = this.x + width * 5 / 6;
    push();
    stroke(0, 150);
    fill(150, 150);
    image(tower[0], this.nextx, this.y);
    // rect(this.nextx, this.y, 10, this.fsize);
    pop();

    if (this.nextx > width/2-100 && this.nextx < width/2+100) {

      push();
      fill(this.nbarrcoin == 1 ? 50 : 200);
      stroke(rangecolor(this.nextx, this.y - this.fsize));
      circle(this.nextx, this.y - this.fsize, 20);
      pop();


    }
  }
  makenextbarr() {
    if (this.nextx > width/2-100 && this.nextx < width/2+100 && money > 0 && this.nbarrcoin != 1 && range(this.nextx, this.y - this.fsize)) {
      this.nbarrcoin = 1;
      money -= 1;
      barrier.push(new barr(this.nextx, height-245));
      sol.push(new soldier(width / 2 - xmove, height - size * 1.5, xspeed));
    }
  }




}