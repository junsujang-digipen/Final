/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
var bg = [],
  ocean,
  googlytext;
var landimage;
var water;
var rock,
  tree,
  housedata,
  houseimage,
  house = [],
  buildimage,
  towerdata,
  towerimage,
  tower = [];
var archerRun,
  archerRundata,
  archerdefense,
  archerdefensedata,
  archer = [],
  arrowdata,
  arrowimage,
  arrow = [];
var workerdata,
  workerright,
  workerleft,
  workermove = [];
var enemyrundata,
  enemyrunimage,
  enemyattackdata,
  enemyattackimage,
  Denemy = [];
var kingcomdata,
  kingRcomimg,
  kingLcomimg,
  kingcom = [],
  kingdeathdata,
  kingLdeath,
  kingRdeath,
  kingdeath = [];
var kingLwalkimage,
  kingRwalkimage,
  kingwalk = [],
  kingwalkdata;
  var FE,
      FE5;

var eejay = [],
eejayrunimage,
eejayattackimage,
eejayrundata,
eejayattackdata;

var san = [],
sandata,
sanimage;






var moneysound,
    buttononmouse,
    shootsound,
    punchsound,
    lazersound,
    firesound,

    ohohohoh;
var mainbgsound,
    playbgsound,
    gameoverbgsound,
    clearcreditsbgsound;

function preload() {
  for (var i = 0; i < 6; i++) {
    bg[i] = loadImage('bg/Hills Layer 0' + i + '-export.png');
  }
  landimage = loadImage('bg/Hills land.png');
  water = loadImage('bg/Water-export.png');
  ocean = loadImage('bg/Ocean.png');
  googlytext = loadImage('bg/main/Googlydesign-0002.png');
  rock = loadImage('object/rock.png');
  tree = loadImage('object/Imtree2.png');
  kingwalkdata = loadJSON('player/spr_KingWalk_strip_no_bkg_01.json');
  kingLwalkimage = loadImage('player/spr_KingWalk_left_strip_no_bkg.png');
  kingRwalkimage = loadImage('player/spr_KingWalk_right_strip_no_bkg.png');
  archerRundata = loadJSON('archer/spr_ArcherRun_strip_NoBkg_01.json');
  archerRun = loadImage('archer/spr_ArcherRun_strip_NoBkg_01-sheet.png');
  archerdefensedata = loadJSON('archer/spr_ArcherAttack_strip_NoBkg_01.json');
  archerdefense = loadImage('archer/spr_ArcherAttack_strip_NoBkg_01-sheet.png');
  workerdata = loadJSON('worker/Worker san-right_01.json');
  workerright = loadImage('worker/Worker san-right_01-sheet.png');
  workerleft = loadImage('worker/Worker san-left_01-sheet.png');
  arrowdata = loadJSON('archer/arrow/arrowlevel1.json');
  arrowimage = loadImage('archer/arrow/arrowlevel1-sheet.png');
  housedata = loadJSON('object/house/house-0001.json');
  buildimage = loadImage('object/house/build-000.png');
  houseimage = loadImage('object/house/house-0001-sheet.png');
  towerdata = loadJSON('object/barr/towerlevel-0001.json');
  towerimage = loadImage('object/barr/towerlevel-0001-sheet.png');
  enemyrundata = loadJSON('enemy/axe bandit run_01.json');
  enemyrunimage = loadImage('enemy/axe bandit run_01-sheet-export.png');
  enemyattackdata = loadJSON('enemy/Axe Bandit Attack_01.json');
  enemyattackimage = loadImage('enemy/Axe Bandit Attack_01-sheet.png');
  kingcomdata = loadJSON('player/command/spr_KingGroundAttack_right_strip_no_bkg_01.json');
  kingRcomimg = loadImage('player/command/spr_KingGroundAttack_right_strip_no_bkg_01-sheet.png');
  kingLcomimg = loadImage('player/command/spr_KingGroundAttack_left_strip_no_bkg_01-sheet.png');
  kingdeathdata = loadJSON('player/death/kingdeath-0001.json');
  kingLdeath = loadImage('player/death/kingdeath-left-0001.png');
  kingRdeath = loadImage('player/death/kingdeath-right-0001.png');
  FE = loadImage('object/effect/fire effect-0001.png');
  FE5 = loadImage('object/effect/level5fire effect-0001.png');


eejayrundata = loadJSON('enemy/eejay/fontrun01.json');
eejayattackdata = loadJSON('enemy/eejay/fontattack01.json');
eejayrunimage = loadImage('enemy/eejay/fontrun01-sheet.png');
eejayattackimage = loadImage('enemy/eejay/fontattack01-sheet.png');
sandata = loadJSON('enemy/san/Kangsan_idle_animation-export_01.json');
sanimage = loadImage('enemy/san/Kangsan_idle_animation-export_01-sheet.png');

  
  // soundFormats('wav');
  
  
  moneysound = loadSound('sound/getmoney.wav');
  buttononmouse = loadSound('sound/button/buttononmouse.wav');
  ohohohoh = loadSound('sound/thrusting.mp3');
  shootsound = loadSound('sound/shootsound.wav');
  punchsound = loadSound('sound/punchingsound.wav');
  lazersound = loadSound('sound/lazersound.wav');
  firesound = loadSound('sound/firesound.wav');
  
  
  mainbgsound = loadSound('sound/main/Tears of Nostalgiamp3.mp3');
  clearcreditsbgsound = loadSound('sound/clearandcredits/A Cops Death_mp3.mp3');
  playbgsound = loadSound('sound/play/Story of Maple_mp3.mp3');
    gameoverbgsound = loadSound('sound/gameover/Waves of Inspiration_mp3.mp3');
  
  
  
}