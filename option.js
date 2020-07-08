/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
var bgsoundcircle,
  bgsoundcircleclick = false;
var effectsoundcircle,
  effectsoundcircleclick = false;

function option() {
  image(ocean, width / 2 + mainbgmove, height / 2, width, height);
  image(ocean, width / 2 * 3 + mainbgmove, height / 2, width, height);
  push();
  fill(255, 150);
  strokeWeight(10);
  rect(width / 2, height / 2, width / 6 * 5, height / 6 * 5);
  pop();
  push();
  textAlign(CENTER, CENTER);
  textSize(40);
  text('option', width / 2, height / 6);

  strokeWeight(5);
  textSize(20);
  text('background music', width / 5, height / 3);
  line(width / 10 + width / 4, height / 3, width / 10 + width / 4 * 3, height / 3);
  circle(bgsoundcircle, height / 3, 20);
  text('effect sound', width / 5, height / 3 * 2);
  line(width / 10 + width / 4, height / 3 * 2, width / 10 + width / 4 * 3, height / 3 * 2);
  circle(effectsoundcircle, height / 3 * 2, 20);
  rect(width / 10 + width / 4 * 3,height / 6,50,50);
  line(width / 10 + width / 4 * 3-15,height / 6-15,width / 10 + width / 4 * 3+15,height / 6+15);
  line(width / 10 + width / 4 * 3-15,height / 6+15,width / 10 + width / 4 * 3+15,height / 6-15);
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
}

function MRoption() {
  if (bgsoundcircleclick == true && effectsoundcircleclick == false) {
    bgsoundcircleclick = false;
  }
  if (bgsoundcircleclick == false && effectsoundcircleclick == true) {
    effectsoundcircleclick = false;
  }
}