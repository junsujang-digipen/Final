/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
 var mainbgmove = 1,
  bgspeed = 1;
var buttononmousenum = 1,
    buttononmouseTF = false;
var ts = [20, 20, 20],
  tc = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  textp = ['PLAY', 'OPTION', 'CREDITS'];

function mainmenu() {
  
  ts = [20, 20, 20];
  tc = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  textp = ['PLAY', 'OPTION', 'CREDITS'];
  
  image(ocean, width / 2 + mainbgmove, height / 2, width, height);
  image(ocean, width / 2 * 3 + mainbgmove, height / 2, width, height);
  mainbgmove -= bgspeed;
  if (mainbgmove <= -width) {
    mainbgmove = 0;
  }
  
  if (mouseX < width / 2 + 25 && mouseX > width / 2 - 25 && mouseY < height / 2 + 10 && mouseY > height / 2 - 10) {
    ts[0] = 25;
    tc[0][0] = 100;
    tc[0][1] = 200;
    tc[0][2] = 150;
    pointmouse(width / 2, height / 2, 30, tc[0][0], tc[0][1], tc[0][2])
    buttononmousenum =1
    push();
    textAlign(CENTER,CENTER);
    textSize(10);
    text('A, D to move',width/2+100,height/2-10);
    text('Circle click to command',width/2+100,height/2+10);
    pop();
  }
  else if (mouseX < width / 2 + 35 && mouseX > width / 2 - 35 && mouseY < height / 2 + 50 + 10 && mouseY > height / 2 + 50 - 10) {
    ts[1] = 25;
    tc[1][0] = 250;
    tc[1][1] = 250;
    tc[1][2] = 250;
    pointmouse(width / 2, height / 2 + 50, 50, tc[1][0], tc[1][1], tc[1][2])
    buttononmousenum =1
    push();
    textAlign(CENTER,CENTER);
    textSize(10);
    text('Set volume',width/2+150,height/2+50-10);
    text('Background music, Effect sound',width/2+150,height/2+50+10);
    pop();
  }
  else if (mouseX < width / 2 + 35 && mouseX > width / 2 - 35 && mouseY < height / 2 + 100 + 10 && mouseY > height / 2 + 100 - 10) {
    ts[2] = 25;
    tc[2][0] = 255;
    tc[2][1] = 255;
    tc[2][2] = 50;
    pointmouse(width / 2, height / 2 + 100, 50, tc[2][0], tc[2][1], tc[2][2])
    buttononmousenum =1
    push();
    textAlign(CENTER,CENTER);
    textSize(10);
    text('Credits and thanks',width/2+150,height/2+100);
    pop();
  }else{
      buttononmousenum = 0;
    buttononmouseTF = false;
  }
  if(buttononmousenum == 1 && buttononmouseTF == false){
    buttononmouse.setVolume(effectvolume);
    buttononmouse.play();
    buttononmouseTF = true;
  }
  
  image(googlytext, width / 2, height/5, width/2, width/2);
  push();
  textAlign(CENTER, CENTER);
  // rect(width / 2, height / 2,50,20);
  // rect(width / 2, height / 2+50,70,20);
  // rect(width / 2, height / 2+100,70,20);
  for (var i = 0; i < 3; i++) {
    textSize(ts[i]);
    stroke(tc[i][0], tc[i][1], tc[i][2]);
    fill(tc[i][0], tc[i][1], tc[i][2]);
    text(textp[i], width / 2, height / 2 + 50 * i);
  }
  pop();
}

function pointmouse(x, y, dis, c1, c2, c3) {
  push();
  stroke(c1, c2, c3);
  fill(c1, c2, c3);
  translate(x, y);
  beginShape();
  vertex(-dis, 0);
  vertex(-(dis+5), -5);
  vertex(-(dis+5),5);
  endShape(CLOSE);
  beginShape();
  vertex(dis, 0);
  vertex((dis+5), -5);
  vertex((dis+5), 5);
  endShape(CLOSE);
  pop();
}

function mainmouse() {
  if (mouseX < width / 2 + 25 && mouseX > width / 2 - 25 && mouseY < height / 2 + 10 && mouseY > height / 2 - 10) {
    page = 'play'
  }
  if (mouseX < width / 2 + 35 && mouseX > width / 2 - 35 && mouseY < height / 2 + 50 + 10 && mouseY > height / 2 + 50 - 10) {
    page = 'option'
  }
  if (mouseX < width / 2 + 35 && mouseX > width / 2 - 35 && mouseY < height / 2 + 100 + 10 && mouseY > height / 2 + 100 - 10) {
    page = 'credits'
    textmove = 0
  }
}