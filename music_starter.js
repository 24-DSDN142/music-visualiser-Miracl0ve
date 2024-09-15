let img;
let firstRun = true
let circleRotate = 1;
//let imageRotate = 1;
let angle = 0;
let r = 200;

let strength;
let angleOffset;
let vocal_history = [];
let drum_history = [];


 //translate(310, 250);
function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
  }
}

function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
  }
}

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    img = loadImage('moon-png-44673.png') //https://www.clipartmax.com/download/m2i8H7m2G6G6Z5A0_saturn-transparent/
    firstRun = false
}

  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  //strokeWeight (9);
  //stroke(drum, 80, 80);

  //fill(125, 109, 140)
//lineEnd(LineStart, 300, lineEnd, 300);


//for (let i = 1; i <= drumMap; i++){
  //let lineStep = i + 10
  //lineEnd(lineStart, lineStep, lineEnd, lineStep);
//}




let circleSize = map(bass, 0, 80, 40, 200);
stroke(127, 126, 191)
fill(127, 126, 191)



//let ellipseSize = map(drum, 10, 50, 30, 70)

//fill(65, 14, 120);
//ellipse(300, 250, ellipseSize, ellipseSize);
//fill(125, 109, 140)
//ellipse(300, 250, 20, ellipseSize);


//push()
//if (counter > 335 && counter < 1020) {
 // translate(100, 100)
  //scale(0.2)
  //image (img, 0, 0);
//}
//pop()


push()

translate(305, 155);

if(counter > 340 && counter < 8000){
  rotate(circleRotate)
  circleRotate += 0.01;
}

translate(45, 45);

if(counter > 340 && counter < 8000){
  stroke (255, 255, 255)
  strokeWeight(1);
  fill(0, 0, 0)


   //translate(350, 200)
 
  //fill(7, 10, 31)
  ellipse (0, 0, 50, 800)
  //stroke (65, 11, 122);
  ellipse (0, 0, 100, 700)
  stroke(255)
  ellipse (0, 0, 150, 600)
  //stroke (65, 11, 122);
    ellipse(0, 0, 200, 500);
    //fill(120, 87, 156);
    stroke(255);
    ellipse(0, 0, 250, 250);
    //fill(0);
fill(127, 126, 191)
    stroke (65, 11, 122);
    ellipse(0, 0, circleSize, circleSize);
    stroke(255)
    fill(168, 167, 232)
    ellipse (0, 0, 30, 30)
  }



push()
angleMode (RADIANS)
add_to_history(vocal_history, vocal);

  strokeWeight(4);
  stroke(185, 161, 237);

  angleOffset = 0;
  strength = 1;
  for(let i = 20; i <= 40; i++){
  historyVal = vocal_history[vocal_history.length - i]
  r = map(historyVal, 30, 10, 10, 40)
  let angle = map(i, 10, 20, 10, PI * 6)
  let x = strength * r * cos(angle + angleOffset);
  let y = strength * r * sin(angle + angleOffset);
  point(x, y);
}
  angle += 0.05; //random(-0.1, 0.1);
  r -= random(1, 1);
pop()

push()
angleMode (RADIANS)
add_to_history(drum_history, drum);
  translate(200, 200);
  strokeWeight(7);
  stroke(185, 161, 237);
  
angleOffset = PI;
strength = 3.5;
for(let i = 10; i <= 50; i++) {
  historyVal = drum_history[drum_history.length - i]
r = map(historyVal, 30, 50, 10, 60)
  let angle = map(i, 10, 20, 20, PI * 2)
  let x = strength * r * cos(angle + angleOffset);
  let y = strength * r * sin(angle + angleOffset);
  point(x, y);
}
  angle += 0.05; //random(-0.1, 0.1);
  r -= random(1, 1);
pop()

pop()
}
//for (let i = 1; i <= 10; i ++){
//ellipse()
//}

  //if(counter > 0 && counter < 500){
   // ellipse (300, 240, 200, 100);
  //}
  //else if (counter > 600 && counter < 1000){
   // ellipse (300, 240, 200, 100);
 // }

  //let ellipseSize = map(counter, 10, 50, 30, 70)
  //fill(4, 12, 74)
  //ellipse (300, 240, ellipseSize, 100);


  //let ellipseSize = map(counter, 10, 50, 30, 70)


//fill (38, 4, 79)
  //ellipse (640, 360, counter ** 2 / 100, counter ** 2 / 100)
  //fill(31, 17, 51)
// ellipse (640, 360, counter ** 1 , counter ** 1)
 //fill(66, 5, 8)
 //ellipse (640, 360, counter *1, counter *1)
//fill (42, 1, 97)
//ellipse (640, 360, counter * 3 / 30, counter * 3 / 30)
//  fill(24, 17, 33)
//  ellipse (640, 360, circleSize4, circleSize4)

//stroke (255, 255, 255)
//fill(0, 0, 0)
// push()
// translate(640,360)
//rotate(circleRotate)
//circleRotate += 2;
 //ellipse(0, 0, 100, 20);
//pop()



//push()
//stroke(255);
//strokeWeight(2)
//let starRays = map(bass, 10, 85, 75);
//line(30, 20, 100, 105);
//pop()




//fill(177, 165, 194)
 //beginShape();
 //vertex(609, 501);
 //bezierVertex(map(bass, 20, 100, 50, 250), 700, 690, 310, 879, 363);
//endShape();



//ellipse()
//stroke(171, 231, 235)
//fill(89, 78, 120)
//beginShape();
//vertex(674, 717);
//bezierVertex(1333, 645, 632, 80, 1280, -15);
//endShape();
//}

// function introEllipse(channel, col, minMap, maxMap) {
// }





//stroke (255, 255, 255)
//fill(0, 0, 0)
// push()
 //translate(640, 400)
 //rotate(vocal)
//ellipse(0, 0, 150, 40);
//pop()




 //let bar_spacing = height / 10;
   //let bar_height = width / 12;
   //let bar_pos_x = width / 2;

  // vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   //fill(0, 200, 0);
   //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
   //rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   //fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   //fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   //fill(255, 255, 0);
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);

