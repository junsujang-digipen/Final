/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
function rangecolor(x, y) {
  var col;
  if (range(x, y)) {
    col = 155;
  } else {
    col = 0;
  }
  return col
}

function range(x, y) {
  let dx = mouseX - (x);
  let dy = mouseY - (y);
  let mouse = dx * dx + dy * dy;
  return mouse <= 10 * 10;
}

function circlerangeheatbox(hx,hy,x, y,size) {
  let dx = hx - (x);
  let dy = hy - (y);
  let heatposition = dx * dx + dy * dy;
  return heatposition <= size * size;
}
function heatbox(hx,hy,x, y,xsize,ysize) {
  return hx <= x+xsize/2 && hx >= x-xsize/2 && hy <= y+ysize/2 && hy >= y-ysize/2;
}

function make2Darray(v, h) {
  var arr = new Array(v);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(h);
  }
  return arr
}

function move() {
  if (xmove>-width/2 && keyIsDown(65)) {
    king = kingwalk[floor(movingt)%8];
    xmove += -xspeed;
    kingdir = 'left';
  }
  if (xmove < land.length*40 - width/2 && keyIsDown(68)) {
    king = kingwalk[8+floor(movingt)%8];
    xmove += xspeed;
    kingdir = 'right';
  }
}

function basecamp(num) {

  if (buildingstate == 'non') {
    switch (camplevel) {
      case 1:
        // rect(width / 2 - xmove, height - size * 2.5, size * 4, size * 3);
        image(house[0],width / 2 - xmove-30, height - size * 6);
        buildingrange(width / 2 - xmove, height - size * 2.5, size * 4, size * 3, num)
        break;
      case 2:
        // rect(width / 2 - xmove, height - size * 3, size * 4, size * 4);
        image(house[1],width / 2 - xmove-30, height - size * 6);
        buildingrange(width / 2 - xmove, height - size * 2.5, size * 4, size * 3, num)
        break;
      case 3:
        // rect(width / 2 - xmove, height - size * 3.5, size * 4, size * 5);
        image(house[2],width / 2 - xmove-30, height - size * 6);
        buildingrange(width / 2 - xmove, height - size * 2.5, size * 4, size * 3, num)
        break;
      case 4:
        // rect(width / 2 - xmove, height - size * 4, size * 4, size * 6);
        image(house[3],width / 2 - xmove-30, height - size * 6);
        buildingrange(width / 2 - xmove, height - size * 2.5, size * 4, size * 3, num)
        break;
      case 5:
        // rect(width / 2 - xmove, height - size * 4.5, size * 4, size * 7);
        image(house[4],width / 2 - xmove-30, height - size * 6);
        buildingrange(width / 2 - xmove, height - size * 2.5, size * 4, size * 3, num)
        break;

    }

  } else if (buildingstate == 'building') {
    // rect(width / 2 - xmove, height - size * 1.75, size * 4, size * 1.5);
    // rect(width / 2 - xmove, height - size * 3.25, size * 4, size * 1.5);
    image(buildimage,width / 2 - xmove-30, height - size * 6);
    getcoin.splice(0, num);
    if (plustime == 0) {
      camplevel += 1;
      plustime = 1;
    }

    setTimeout(function() {
      buildingstate = 'non'
      plustime = 0;
    }, 1000);
  }
}

var plustime = 0;
var getcoin = [];

function buildingrange(x, y, xsize, ysize, num) {
  if (camplevel<5 && xmove>-100 && xmove<100) {
    var cx = x - (num - 1) * xsize / 10;

    for (var i = 0; i < num; i++) {
      push();
      fill(getcoin[i] == 1 ? 50 : 200);
      stroke(rangecolor(cx, y));
      circle(cx, y, 20);
      pop();
      cx += xsize / 5

    }
  }
}

function buildup(level) {
  var getcoinN = 0;
  for (var i = 0; i < level; i++) {
    getcoinN += getcoin[i];
  }
  if (getcoinN == level) {
    buildingstate = 'building';
  }
}

function Mworker(){
  workerstnum = 0;
  for (var i = 0; i < land.length; i++) {
    
    
    

    if (land[i][1] == 'tree') {
      // rect(i * size + size / 2 - xmove, height - size * 2, size * 8 / 9, size * 2);
      image(tree,i * size + size / 2 - xmove, height - size * 3,size*3,size*4);
      if ((i * size + size / 2 - xmove) < width / 2 + 100 && (i * size + size / 2 - xmove) > width / 2 - 100) {
        push()
        stroke(rangecolor(size / 2 + i * size - xmove, height - size * 2));
        circle(i * size + size / 2 - xmove, height - size * 2, size / 2, size / 2);
        pop();
      }
    }
    if (land[i][1] == 'rock') {
      // rect(i * size + size / 2 - xmove, height - size - size * 4 / 9, size * 8 / 9, size * 8 / 9);
      image(rock,i * size + size / 2 - xmove, height - size - size * 4 / 9,size,size);
      if ((i * size + size / 2 - xmove) < width / 2 + 100 && (i * size + size / 2 - xmove) > width / 2 - 100) {
        push();
        stroke(rangecolor(size / 2 + i * size - xmove, height - size - size * 4 / 9));
        circle(i * size + size / 2 - xmove, height - size - size * 4 / 9, size / 2, size / 2);
        pop();
      }
    }
    if (workerstnum == 0 && (land[i][2] == 'commandtree' || land[i][2] == 'commandrock')) {
      for (var j = 0; j < worker.length; j++) {
        worker[j].draw();
        worker[j].update(ipoint[j] * size + size / 2 - xmove, width / 2 - xmove, 10);

        if (worker[j].state == 'end') {
          moneysound.setVolume(effectvolume);
          moneysound.play();
          worker.splice(j, 1);
          ipoint.splice(j, 1);
          money += 1;
        }
      }
      workerstnum = 1;
    }
  }
}
function sprites(spritename,imagename,sprite){
  let name = spritename;
  for(var i = 0;i<name.length;i++){
    let pos = name[i].frame;
    let img = imagename.get(pos.x,pos.y,pos.w,pos.h);
    sprite.push(img);
  }
}
function scenesound(bgsound,scmusic){
  if (bgsound != scmusic) {
        bgsound.stop();
        soundplaynum = 0;
      }
      bgsound = scmusic
}