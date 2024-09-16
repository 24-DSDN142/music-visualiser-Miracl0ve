
let firstRun = true;
let circleRotate = 1; 
let angle = 0;
let r = 200;
let strength;
let angleOffset;
let vocal_history = []; // vocal channel wobble circle
let drum_history = []; //drum channel wobble circle
let other_history = []; //other channel wobble circle


function add_to_history(history, d) {  //wobble points code
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
  

  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
push()
 if(counter > 0 && counter < 335){
  fill(217, 201, 255);
  ellipse (350, 200, counter *2 / 10, counter *2 / 10)
  }
  pop()
//maps
let irisSize = map(vocal, 0, 80, 40, 200); 

let bassMap = map(bass, 0, 60, 80, 20)

let ellipseSize = map(drum, 10, 50, 30, 70)

  if(counter > 3090 && counter < 8000){ //background circles
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
    
push()
//rotating shapes
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
   //the rotating eye!
    ellipse (0, 0, 50, 800) 
    ellipse (0, 0, 100, 700)
    stroke(255)
    ellipse (0, 0, 150, 600)
    stroke (65, 11, 122);
    ellipse(0, 0, 200, 500);
    ellipse(0, 0, 250, 400)
    stroke(255);
    ellipse(0, 0, 250, 250);
    fill(46, 11, 99);
    stroke (65, 11, 122);
     ellipse(0, 0, irisSize, irisSize);
    
    if(counter > 700 && counter < 1025){

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

  

     stroke (85, 73, 156); // centre circle
     fill(85, 73, 156)
     ellipse (0, 0, 60, 60) 

     stroke(255)
     fill(168, 167, 232)
     ellipse (0, 0, 30, 30) 
   
  }
//wobble circles 
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
  let angle = map(i, 10, 20, 10, PI * 6)
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

for (let i = 1; i <= 10; i ++){
ellipse()
}