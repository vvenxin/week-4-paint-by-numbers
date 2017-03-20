function setup() {
  createCanvas(600,600);
  background('#FFAE5D');
}

function draw() {
  purple = color('#6F3662');
  peach = color('#F8DEBD');
  pink = color('#FF7182');
  white = color('#F8F8F2')
  brown = color('#9F6164')
  noStroke();
  fill(purple);
  ellipse(300, 150, 170, 170);
  rect(215,150,170, 120);
  fill(peach);
  triangle(250, 300, 225, 350, 250, 375);
  triangle(350, 300, 375, 350, 350, 375);
  triangle(275, 400, 295, 400, 290, 475);
  triangle(305, 400, 325, 400, 310, 475);
  fill(pink);
  quad(325, 200, 275, 200, 225, 400, 375, 400);
  fill(peach);
  triangle(275, 200, 325, 200, 300, 250);
  arc(300, 150, 150, 150, -0.2, PI+0.2, CHORD);
  fill(brown);
  stroke(brown);
  ellipse(270, 170, 20, 20);
  ellipse(330, 170, 20, 20);
  line(295, 195, 305, 195);
}