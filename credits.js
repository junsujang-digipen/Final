/*
Name : Junsu Jang
Project Name : Final Project
Course Number : CS099
Term & Year : Spring/2020
*/
var creditstext = {
  developer:['Developer','Junsu Jang'],

  image:['Image','Background Image: Made by edermunizz',
  'Player character: Made by OcO','Archer image: Made by OcO','Worker image: Made by OcO',
  'Water image: license is https://craftpix.net/file-licenses/','Main scene background: Made by KnoblePersona',
  'House image: Made by ansimuz','Enemy image: Made by Warren Clark','Tower image: Made by ansimuz, Blarumyrran',
  'Enemy wizard: Made by Warren Clark','Enemy boxer: Made by Penusbmic',
  'Tree, Rock image: Made by Junsu Jang'],

  sound:['Sound','Main scene music: Made by AlexDer','Play scene music: Made by Sunchasing94',
  'Game over scene music: Made by Sunchasing94','Clear and Credits scene music: Made by Sunchasing94',
  'Enemy shouts: Made by Hyunjin Kim','Other sound effects: Made by Junsu Jang'],
  specialth:['Special Thanks', '장성원','김현진']
};
var textmove = 0;
function credits(){
  textmove += 1;
  image(bg[1],width/2,height/2,width,height);
  background(0,200);
  push();
  translate(0,-textmove);
  textAlign(CENTER, CENTER);
  stroke(255);
  fill(255);
  textSize(50);
  text('credits',width/2,height + 50);
  textoutput(creditstext.developer,height + 150,30,20);
  textoutput(creditstext.image,height + 200 + creditstext.developer.length*50,30,20);
  textoutput(creditstext.sound,height + 250 + (creditstext.developer.length+ creditstext.image.length)*50,30,20);
  textoutput(creditstext.specialth,height + 300 + (creditstext.developer.length+ creditstext.image.length+creditstext.sound.length)*50,50,30);
  pop();
  line(width / 10 + width / 4 * 3-20,height / 6-20,width / 10 + width / 4 * 3+20,height / 6+20);
  line(width / 10 + width / 4 * 3-20,height / 6+20,width / 10 + width / 4 * 3+20,height / 6-20);
  
}
function textoutput(arrayname,position,textsize1,textsize2){
  for(var i = 0;i<arrayname.length;i++){
    if(i==0){
      textSize(textsize1);
    }else{
      textSize(textsize2);
    }
    text(arrayname[i],width/2,position+i*50);
  }
}