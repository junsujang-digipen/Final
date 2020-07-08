/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
var zoff = 0;
var colorarray;
var whitetoblack = 0;

function gameclear() {
  image(bg[bgnum], width / 2 + 80 - map(xmove, 0, land.length * 40, 0, 180), height / 2, width + 200, height);
  for (var w = 0; w * 100 <= land.length * 40 + width * 4; w++) {
    image(water, 100 * w - width * 2 - xmove, height - 15, 100, 100);
  }

  basecamp(camplevel);

  for (var k = 0; k < barrier.length; k++) {

    barrier[k].draw();
    sol[k].draw();
  }
  for (var i = 0; i < enemy.length; i++) {
    enemy[i].draw();
  }

  for (var j = 0; j < land.length; j++) {
    if (land[j][1] == 'tree') {
      image(tree, j * size + size / 2 - xmove, height - size * 3, size * 3, size * 4);
    }
    if (land[j][1] == 'rock') {
      image(rock, j * size + size / 2 - xmove, height - size - size * 4 / 9, size, size);
    }
  }

  for (var wor = 0; wor < worker.length; wor++) {
    worker[wor].draw();
  }

  image(king, width / 2, height - size * 1.7, size / 2 * 1.5, size * 1.5);
  for (var l = 1; l * width / 2 <= land.length * 40 - width / 2; l++) {
    image(landimage, width / 2 * l - xmove, height - 300, width, 600);
  }


  var hmm = 30 + whitetoblack / 2;
  push();
  rectMode(CORNER);
  noStroke();
  translate(100-noisesize*5, 100-noisesize*5);
  var xoff = 0,
    yoff = 0;
  for (var hor = 0; hor < colorarray.length; hor += 1) {
    xoff = 0;
    for (var ver = 0; ver < colorarray[hor].length; ver += 1) {
      colorarray[hor][ver] = map(noise(xoff, yoff, zoff), 0, 1, 0, 255) + whitetoblack/2;
      fill(colorarray[hor][ver], hmm);
      rect(noisesize * hor, noisesize * ver, noisesize, noisesize);
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  zoff += 0.1;
  if (hmm < 250) {
    whitetoblack += 1;
    noisesize += 1/4;
  }else{
    textmove+=1
  }
  pop();






  push();
  translate(0,-textmove);
  textAlign(CENTER,CENTER);
  stroke(255 - whitetoblack);
  fill(255 - whitetoblack);
  textSize(70);
  text('Game clear!', width / 2, height / 2);
  textSize(50);
  text('Thank you for playing', width / 2, height / 2 + 50);
  textSize(50);
  text('credits',width/2,height + 50);
  textoutput(creditstext.developer,height + 150,30,20);
  textoutput(creditstext.image,height + 200 + creditstext.developer.length*50,30,20);
  textoutput(creditstext.sound,height + 250 + (creditstext.developer.length+ creditstext.image.length)*50,30,20);
  textoutput(creditstext.specialth,height + 300 + (creditstext.developer.length+ creditstext.image.length+creditstext.sound.length)*50,50,30);
  pop();
}