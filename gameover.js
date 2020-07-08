/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
var deadscene = 0;

function gameover() {

  image(bg[bgnum], width / 2 + 80 - map(xmove, 0, land.length * 40, 0, 180), height / 2, width+200, height);
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
  var DT = deadscene/10
if (DT < 19) {
    if(kingdir == 'left'){
      king = kingdeath[floor(DT)];
    }if(kingdir == 'right'){
      king = kingdeath[19+floor(DT)];
    }
    
  }
  
  
  for (var l = 1; l * width / 2 <= land.length * 40 - width / 2; l++) {
    image(landimage, width / 2 * l - xmove,  height-300, width, 600);
  }

  background(0, deadscene)
  if (deadscene <= 255) {
    deadscene += 1
  }

  image(king, width / 2, height - size * 1.7, size/2*1.5, size*1.5);

  push();
  textAlign(CENTER);
  textSize(20);
  stroke(deadscene);
  fill(deadscene);
  text('Game Over', width / 2, height / 2);
  pop();
}