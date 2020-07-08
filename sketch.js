/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
var effectvolume = 0.5;
var land,
  size = 40,
  xmove = 0,
  xspeed = 10,
  xoff = 0;
var worker = [],
  ipoint = [];
var workerstnum = 0,
  money = 0;
var buildingstate = 'non',
  camplevel = 1;
var barrier = [];
var sol = [],
  enemy = [];
var time = 'daytime',
  timer = 0,
  daycount = 1;
var page = 'mainmenu';
var noisesize = 20;


function setup() {
  createCanvas(1080, 720);
  bgsoundcircle = width/2;
  effectsoundcircle = width/2;
  bgsound = mainbgsound;
  colorarray = make2Darray(width/noisesize ,height/noisesize );
  // let walkname = kingwalkdata[0].left;
  // for(var leftW = 0;leftW<walkname.length;leftW++){
  //   let pos = walkname[leftW].frame;
  //   let img = kingLwalkimage.get(pos.x,pos.y,pos.w,pos.h);
  //   kingwalk.push(img);
  // }
  sprites(kingwalkdata.frames, kingLwalkimage, kingwalk);
  sprites(kingwalkdata.frames, kingRwalkimage, kingwalk);
  sprites(archerRundata.frames, archerRun, archer);
  sprites(archerdefensedata.frames, archerdefense, archer);
  sprites(workerdata.frames, workerright, workermove);
  sprites(workerdata.frames, workerleft, workermove);
  sprites(arrowdata.frames, arrowimage, arrow);
  sprites(housedata.frames, houseimage, house);
  sprites(enemyrundata.frames, enemyrunimage, Denemy);
  sprites(enemyattackdata.frames, enemyattackimage, Denemy);
  sprites(kingcomdata.frames, kingRcomimg, kingcom);
  sprites(kingcomdata.frames, kingLcomimg, kingcom);
  sprites(kingdeathdata.frames, kingLdeath, kingdeath);
  sprites(kingdeathdata.frames, kingRdeath, kingdeath);
  sprites(towerdata.frames, towerimage, tower);
  sprites(eejayrundata.frames, eejayrunimage, eejay);
  sprites(eejayattackdata.frames, eejayattackimage, eejay);
  sprites(sandata.frames, sanimage, san);
  // let walkname = kingwalkdata[0].right;
  // for(var rightW = 0;rightW<walkname.length;rightW++){
  //   let pos = walkname[rightW].frame;
  //   let img = kingRwalkimage.get(pos.x,pos.y,pos.w,pos.h);
  //   kingwalk.push(img);
  // }
  king = kingwalk[0];

  
  rectMode(CENTER);
  imageMode(CENTER);

  barrier.push(new barr(width - 50, height - 245));
  sol.push(new soldier(width / 2 - xmove, height - size * 1.5, xspeed));

  land = make2Darray(600, 3);
  for (var i = 0; i < land.length; i++) {
    land[i][0] = floor(random(6));
    land[i][1] = 'non';
    land[i][2] = 'nonstate';
    xoff += 0.05;
    if (land[i][0] == 2) {
      land[i][1] = 'tree';
    }
    if (land[i][0] == 4) {
      land[i][1] = 'rock';
    }
  }
  console.log(kingwalk);
  console.log(archer);
  console.log(worker);
  //eejay
  // enemy.push(new EEJAY(barrier[barrier.length - 1].x + width + 1 * random(30, 100), height-65, xspeed, 50));
  //san
  // enemy.push(new KANGSAN(barrier[barrier.length - 1].x + width + 1 * random(30, 100), height-100, xspeed, 100));
}

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
var bgnum = 0;
var soundplaynum = 0,
  bgsound,
  bgvolume = 0.5;


function draw() {
  background(220);
  switch (page) {
    case 'mainmenu':
      scenesound(bgsound,mainbgsound)
      bgsound = mainbgsound
      mainmenu();
      break;
    case 'option':
      option();
      break;
    case 'credits':
      scenesound(bgsound,clearcreditsbgsound)
      bgsound = clearcreditsbgsound
      credits();
      break;
    case 'play':
      
      scenesound(bgsound,playbgsound)
      bgsound = playbgsound
      playscene();
      break;
    case 'gameover':
      scenesound(bgsound,gameoverbgsound);
      bgsound = gameoverbgsound
      ohohohoh.stop();
      gameover();
      break;
    case 'clear':
      scenesound(bgsound,clearcreditsbgsound)
      bgsound = clearcreditsbgsound
      gameclear();
      break;
    case 'stop':
      stop();
      break;
  }
  bgsound.setVolume(bgvolume);
  if (soundplaynum == 0) {
    // bgsound.stop();
    soundplaynum = 1;
    bgsound.loop();
  }
}


function mouseClicked() {
  switch (page) {
    case 'mainmenu':
      mainmouse();
      break;
    case 'option':
      backpage('mainmenu');
      break;
    case 'credits':
      backpage('mainmenu');
      break;
    case 'play':
      MCplay();
      break;
    case 'gameover':
      backpage('mainmenu');
      break;
    case 'clear':
      backpage('mainmenu');
      break;
    case 'stop':
      backpage('play');
      break;
  }
}

function keyReleased() {
  switch (page) {
    case 'mainmenu':
      break;
    case 'option':
      break;
    case 'credits':
      break;
    case 'play':
      if (keyCode == LEFT_ARROW) {
        king = kingwalk[7];
      }
      if (keyCode == RIGHT_ARROW) {
        king = kingwalk[8];
      }
      if (keyCode == '27') {
        page = 'stop'
      }
      break;
    case 'gameover':
      break;
    case 'clear':
      break;
    case 'stop':
      break;
  }
}

function mouseReleased() {
  switch (page) {
    case 'mainmenu':
      break;
    case 'option':
      MRoption()
      break;
    case 'credits':
      break;
    case 'play':
      break;
    case 'gameover':
      break;
    case 'clear':
      break;
    case 'stop':
      MRoption()
      break;
  }
}