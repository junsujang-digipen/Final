/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
var spawn = 0;
var movingt = 0;
var movingtP;
var Feffect = [];
var king,
  kingstate = 'non',
  kingdir = 'left';

function playscene() {
  movingt += 0.7;
  if (time == 'daytime') {
    bgnum = floor(map(timer, 0, 30 + daycount, 0, 5));
  } else if (time == 'night') {
    bgnum = 5;
  }
  if (kingstate == 'kingcom') {
    if (kingdir == 'right') {
      king = kingcom[floor(movingt - movingtP) % 15];
      if (movingt - movingtP >= 16) {
        kingstate = 'non';
        king = kingwalk[8];
      }
    }
    if (kingdir == 'left') {
      king = kingcom[15 + floor(movingt - movingtP) % 15];
      if (movingt - movingtP >= 16) {
        kingstate = 'non';
        king = kingwalk[0];
      }
    }
  }
  image(bg[bgnum], width / 2 + 80 - map(xmove, 0, land.length * 40, 0, 180), height / 2, width+200, height);

  for (var w = 0; w * 100 <= land.length * 40 + width * 4; w++) {
    image(water, 100 * w - width * 2 - xmove, height - 15, 100, 100);
  }

  basecamp(camplevel);
  buildup(camplevel);
  
  
  if (barrier.length >= 1) {
    barrier[barrier.length - 1].nextbarr();
  }

  for (var k = 0; k < barrier.length; k++) {

    sol[k].draw();
    barrier[k].draw();

    barrier[k].update(xspeed);
    barrier[k].upgradereq(camplevel);
    barrier[k].upgrade();

    sol[k].update(sol[k]);
    sol[k].rewp(barrier[k]);
    sol[k].going();
    sol[k].defense();

    if (barrier[k].hp <= 0) {
      if (k > 0) {
        barrier[k - 1].nbarrcoin = 0;
      }
      barrier.splice(k, 1);
      sol.splice(k, 1);
      for (var n = 0; n < enemy.length; n++) {
        enemy[n].state = 'going';
      }
    }
  }
  for (var i = 0; i < enemy.length; i++) {
    enemy[i].draw();
    enemy[i].update();
    enemy[i].going(Denemy);
    enemy[i].attack(Denemy);
    enemy[i].beat(sol);
    
    if (enemy[i].hp <= 0) {
      enemy.splice(i, 1);
      money += floor(random(1.1));
    }
  }
  for(var eff=0;eff<Feffect.length;eff++){
    if(Feffect[eff].level = 5){
image(FE5,Feffect[eff].position.x,Feffect[eff].position.y,10,10);
    }else{
      image(FE,Feffect[eff].position.x,Feffect[eff].position.y,10,10);
    }
      
      Feffect[eff].update();
      Feffect[eff].effectxmove();
    } 
  
  
  
  Mworker();
  
  if (time == 'daytime') {
    timer += 1 / 60;
  }
  if (timer > 30 + daycount) {
    time = 'night';
    timer = 0;
    ohohohoh.setVolume(effectvolume);
    ohohohoh.loop();
  }

  if (time == 'night') {
    
    if (spawn == 0) {
      spawn = 1;
      for (var t = 0; t < daycount * 5; t++) {
        enemy.push(new enemies(barrier[barrier.length - 1].x + width + t * random(30, 100), height-65, xspeed, 50));
      }
      if(daycount%3 == 0){
        enemy.push(new KANGSAN(barrier[barrier.length - 1].x + width + 1 * random(30, 100), height-100, xspeed, 100));
      }
      if(daycount%4 == 0){
        enemy.push(new EEJAY(barrier[barrier.length - 1].x + width + 1 * random(30, 100), height-65, xspeed, 50));
      }
    }

    if (enemy.length == 0) {
      time = 'daytime';
      daycount++;
      timer = 0;
      spawn = 0;
      ohohohoh.stop();
    }


  }
  for (var l = 1; l * width / 2 <= land.length * 40 - width / 2; l++) {
    image(landimage, width / 2 * l - xmove, height-300, width, 600);
  }

  text('Time: ' + time, 50, 20);
  text('Day: ' + daycount, width / 2, 20);
  text('Money: ' + money, width - 100, 20);
  image(king, width / 2, height - size * 1.7, size / 2 * 1.5, size * 1.5);
  move();
  if (barrier.length > 11) {
    page = 'clear'
  }
}

function MCplay() {
  for (var i = 0; i < land.length; i++) {
    if ((i * size + size / 2 - xmove) < width / 2 + 100 && (i * size + size / 2 - xmove) > width / 2 - 100) {
      if (range(size / 2 + i * size - xmove, height - size * 2)) {
        if (land[i][2] != 'commandtree' && land[i][1] == 'tree' && worker.length < camplevel) {
          land[i][2] = 'commandtree'
          worker.push(new unit(width / 2 - xmove, height - size * 1.5, 'going', i * size + size / 2 - xmove, land[i]));
          ipoint.push(i);
          kingstate = 'kingcom';
          movingtP = movingt;
        }
      }
      if (range(size / 2 + i * size - xmove, height - size - size * 4 / 9)) {
        if (land[i][2] != 'commandrock' && land[i][1] == 'rock' && worker.length < camplevel) {
          land[i][2] = 'commandrock'
          worker.push(new unit(width / 2 - xmove, height - size * 1.5, 'going', i * size + size / 2 - xmove, land[i]));
          ipoint.push(i);
          kingstate = 'kingcom'
          movingtP = movingt;
        }
      }
    }
  }
  var cx = width / 2 - xmove - (camplevel - 1) * size * 4 / 10;
  for (var j = 0; j < camplevel; j++) {
    if (camplevel < 5 && xmove > -100 && xmove < 100 && money > 0 && getcoin[j] != 1 && range(cx, height - size * 2.5)) {
      getcoin[j] = 1;
      console.log(getcoin[j] + j);
      money -= 1;
    }
    cx += size * 4 / 5
  }

  for (var k = 0; k < barrier.length; k++) {
    barrier[k].Getcoin(camplevel);
  }
  if (barrier.length >= 1) {
    barrier[barrier.length - 1].makenextbarr();
  }
}