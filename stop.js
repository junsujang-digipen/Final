/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
function stop() {
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

  background(255, 50);

  push();
  fill(255, 150);
  strokeWeight(10);
  rect(width / 2, height / 2, width / 6 * 5, height / 6 * 5);
  pop();
  push();
  textAlign(CENTER, CENTER);
  textSize(40);
  text('stop', width / 2, height / 5);

  strokeWeight(5);
  textSize(20);
  text('background music', width / 5, height / 3);
  line(width / 10 + width / 4, height / 3, width / 10 + width / 4 * 3, height / 3);
  circle(bgsoundcircle, height / 3, 20);
  text('effect sound', width / 5, height / 3 * 2);
  line(width / 10 + width / 4, height / 3 * 2, width / 10 + width / 4 * 3, height / 3 * 2);
  circle(effectsoundcircle, height / 3 * 2, 20);
  pop();

  if (mouseIsPressed) {
    if (effectsoundcircleclick == false && mouseX <= width / 10 + width / 4 * 3 && mouseX >= width / 10 + width / 4 && mouseY < height / 3 + 10 && mouseY > height / 3 - 10) {
      bgsoundcircleclick = true;
    }
    if (bgsoundcircleclick) {
      bgsoundcircle = map(mouseX, width / 10 + width / 4, width / 10 + width / 4 * 3, width / 10 + width / 4, width / 10 + width / 4 * 3, true);
    }

    if (bgsoundcircleclick == false && mouseX <= width / 10 + width / 4 * 3 && mouseX >= width / 10 + width / 4 && mouseY < height / 3 * 2 + 10 && mouseY > height / 3 * 2 - 10) {
      effectsoundcircleclick = true;
    }
    if (effectsoundcircleclick) {
      effectsoundcircle = map(mouseX, width / 10 + width / 4, width / 10 + width / 4 * 3, width / 10 + width / 4, width / 10 + width / 4 * 3, true);
    }
  }

  bgvolume = map(bgsoundcircle, width / 10 + width / 4, width / 10 + width / 4 * 3, 0, 1);
  effectvolume = map(effectsoundcircle, width / 10 + width / 4, width / 10 + width / 4 * 3, 0, 1);

  rect(width / 10 + width / 4 * 3, height / 6, 50, 50);
  line(width / 10 + width / 4 * 3 - 15, height / 6 - 15, width / 10 + width / 4 * 3 + 15, height / 6 + 15);
  line(width / 10 + width / 4 * 3 - 15, height / 6 + 15, width / 10 + width / 4 * 3 + 15, height / 6 - 15);

}

function backpage(pagename) {
  if (mouseX < width / 10 + width / 4 * 3 + 25 && mouseX > width / 10 + width / 4 * 3 - 25 && mouseY < height / 6 + 25 && mouseY > height / 6 - 25) {
    page = pagename;
  }

}