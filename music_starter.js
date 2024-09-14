let img;
let firstRun = true
let circleRotate = 1;

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

  stroke (255, 255, 255)
  fill(0, 0, 0)
   push()
   translate(300,230)
  rotate(circleRotate)
  circleRotate += 1;
  //fill(7, 10, 31)
  ellipse (50, 40, 50, 800)
  ellipse (50, 50, 100, 700)
  ellipse (50, 40, 150, 600)
  stroke (65, 11, 122);
    ellipse(50, 50, 200, 500);
    //fill(120, 87, 156);
    stroke(255);
    ellipse(50, 40, 250, 400);
    //fill(0);
    stroke (65, 11, 122);
    ellipse(50, 50, 300, 300);
    fill(0)
    ellipse(50, 40, 250, 200)
    //fill(120, 87, 156);
    stroke (65, 11, 122);
    ellipse(50, 50, 200, 200);
    stroke(255)
    ellipse(50, 40, 150, 150)
    fill(0);
    stroke (65, 11, 122);
   ellipse (50, 50, 100, 100);
   stroke (255);
  ellipse(50, 40, 50, 50);
  pop()
   

  if (counter > 335 && counter < 10000) {
    push();
    translate(140, 150)
    scale(0.5)
   image (img, 0, 0);
   fill(4, 12, 74);
    pop();
  }

  line

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
}

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

   