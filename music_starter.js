let img;
let firstRun = true;
let circleRotate = 1;
//let imageRotate = 1;
let angle = 0;
let r = 200;
let strength;
let angleOffset;
let vocal_history = [];
let drum_history = [];
let other_history = [];
//let size = 100;
//let xPosArray = [50, 300, 500];
//let dx = 1;
//let x = 100;

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


function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
  }
}

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    img = loadImage('clipart610239.png') //https://www.clipartmax.com/download/m2i8H7m2G6G6Z5A0_saturn-transparent/
    firstRun = false
}

  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
     
  //fill(100, 0, 240)
  //ellipse(x, 50, bass, 30);
  //ellipse(x, 100, bass, 30);
  //x = x + dx;
  //if( x > width){
   // dx = -1;
 //}
 //if (x < 0){
   //dx = 1;
// }


  //strokeWeight (9);
  //stroke(drum, 80, 80);

  //fill(125, 109, 140)
//lineEnd(LineStart, 300, lineEnd, 300);


//for (let i = 1; i <= drumMap; i++){
  //let lineStep = i + 10
  //lineEnd(lineStart, lineStep, lineEnd, lineStep);
//}





push()
 if(counter > 0 && counter < 335){
  fill(217, 201, 255);
  ellipse (350, 200, counter *2 / 10, counter *2 / 10)
  }
  pop()
   //ellipse (counter, 240, 200, 100);

  //else if (counter > 600 && counter < 1000){
    //ellipse (640, 360, counter ** 2 / 100, counter ** 2 / 100)
    //ellipse (counter, 240, 200, 100);
  //}

  let irisSize = map(vocal, 0, 80, 40, 200);

  let bassMap = map(bass, 0, 60, 80, 20)




  if(counter > 2400 && counter < 8000){
  stroke(255)
  fill(217, 201, 255);
  ellipse(500, 250, bassMap, bassMap);
  fill(0)
  ellipse(450, 400, bassMap, bassMap);
  ellipse(150, 100, bassMap, bassMap);
  fill(217, 201, 255);
  ellipse(100, 250, bassMap, bassMap);
  fill(0)
  ellipse(450, 100, bassMap, bassMap);
  
  ellipse(150, 400, bassMap, bassMap);
  fill(217, 201, 255);
  ellipse(300, 30, bassMap, bassMap);
  fill(217, 201, 255);
  ellipse(300, 450, bassMap, bassMap);
  }


//stroke(127, 126, 191)
//fill(127, 126, 191)



//let ellipseSize = map(drum, 10, 50, 30, 70)

//fill(65, 14, 120);
//ellipse(300, 250, ellipseSize, ellipseSize);
//fill(125, 109, 140)
//ellipse(300, 250, 20, ellipseSize);


//push()
//if (counter > 335 && counter < 1020) {
  //translate(100, 100)
 // scale(0.2)
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
  ellipse (0, 0, 100, 700)
  stroke(255)
  ellipse (0, 0, 150, 600)
  //stroke (65, 11, 122);
  stroke (65, 11, 122);
    ellipse(0, 0, 200, 500);
    //fill(120, 87, 156);
    stroke(255);
    ellipse(0, 0, 250, 250);
    //fill(0);
    //if (counter > 340 && counter < 700){
      fill(46, 11, 99);
      stroke (65, 11, 122);
     ellipse(0, 0, irisSize, irisSize);
    //}
    if(counter > 700 && counter < 1025){
      stroke(255);
    fill(65, 32, 145);
    ellipse (0, 0, irisSize, irisSize)}
     else if (counter > 1025 && counter < 1360){
     fill(126, 106, 173);
     ellipse (0, 0, irisSize, irisSize)}
     if (counter > 1360 && counter < 1700){
      fill(81, 39, 112);
      ellipse (0, 0, irisSize, irisSize) }
      else if (counter > 1700 && counter < 2050){
        fill(127, 126, 191);
        ellipse (0, 0, irisSize, irisSize)
     }

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
add_to_history(other_history, other);

  strokeWeight(10);
  stroke(255);

  angleOffset = PI;
  strength = 2.5;
  for(let i = 20; i <= 40; i++){
  historyVal = other_history[other_history.length - i]
  r = map(historyVal, 30, 10, 10, 40)
  let angle = map(i, 10, 20, 10, PI * 69)
  let x = strength * r * cos(angle + angleOffset);
  let y = strength * r * sin(angle + angleOffset);
  point(x, y);
}
  angle += 0.05; //random(-0.1, 0.1);
  r -= random(1, 1);
pop()


push()
if(counter > 340 && counter < 8000){
angleMode (RADIANS)
add_to_history(drum_history, drum);
  translate(200, 45);
  strokeWeight(1);
  stroke(255);
  
angleOffset = PI;
strength = 4.5;
for(let i = 10; i <= 50; i++) {
  historyVal = drum_history[drum_history.length - i]
r = map(historyVal, 30, 50, 10, 60)
  let angle = map(i, 20, 30, 50, PI * 2)
  let x = strength * r * cos(angle + angleOffset);
  let y = strength * r * sin(angle + angleOffset);
  point(x, y);
}
  angle += 0.05; //random(-0.1, 0.1);
  r -= random(1, 1);
pop()
}

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