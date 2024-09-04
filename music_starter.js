
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //createCanvas (1280, 720, WEBGL)
  //colorMode(HSB, 100)
  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

stroke (255, 255, 255)
fill (38, 4, 79)
  ellipse (640, 360, counter ** 2 / 100, counter ** 2 / 100)
  fill(31, 17, 51)
 ellipse (640, 360, counter ** 1 , counter ** 1)
//fill (42, 1, 97)
//ellipse (640, 360, counter * 3 / 30, counter * 3 / 30)
//  fill(24, 17, 33)
//  ellipse (640, 360, circleSize4, circleSize4)

 let ellipseSize = map(drum, 10, 50, 30, 70)
 
 fill(30, 6, 61)
 ellipse(640, 360, ellipseSize, ellipseSize);

//fill(177, 165, 194)
 //beginShape();
 //vertex(609, 501);
 //bezierVertex(map(bass, 20, 100, 50, 250), 700, 690, 310, 879, 363);
 //endShape();

 stroke(171, 231, 235)
fill(89, 78, 120)
beginShape();
vertex(674, 717);
bezierVertex(1333, 645, 632, 80, 1280, -15);
endShape();
}

function introEllipse(channel, col, minMap, maxMap) {
}

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

   