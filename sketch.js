const maxIterations = 5;
let length = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  if (window.innerWidth > window.innerHeight) {
    length = window.innerHeight * 0.8;
  } else {
    length = window.innerWidth * 0.8;
  }
  background(51);
  angleMode(DEGREES);
  rotate(180);
  fill(255);
  stroke(255);
  translate((width + length) / -2, -height / 1.5);
  KochKurve(length, 0);
}

function KochKurve(len, iterations) {
  if (iterations >= maxIterations) {
    return;
  }
  const h = len / 2;
  triangle(0, 0, len / 2, h, len, 0);

  push();
  rotate(45);
  translate(len / 4, 0);
  KochKurve(len / 4, iterations + 1);
  pop();

  push();
  rotate(45);
  translate(len / 1.8, 0);
  KochKurve(len / 3 / 3, iterations + 1);
  pop();

  push();
  rotate(45);
  translate(len / 12, 0);
  KochKurve(len / 3 / 3, iterations + 1);
  pop();

  push();
  translate(len, 0);
  rotate(-45);
  translate(-len / 2, 0);
  KochKurve(len / 4, iterations + 1);
  pop();

  push();
  translate(len, 0);
  rotate(-45);
  translate(-len / 5, 0);
  KochKurve(len / 3 / 3, iterations + 1);
  pop();

  push();
  translate(len, 0);
  rotate(-45);
  translate(-len / 1.5, 0);
  KochKurve(len / 3 / 3, iterations + 1);
  pop();
}

function draw() {}
