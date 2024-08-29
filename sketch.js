let cor;

function setup() {
  createCanvas(600, 400);
  background ("white")
  cor =color(random(0, 255), random(0, 255))
}

function draw() {
  background("orange")
  stroke("blue")
  fill(cor)
  circle(200, 200, 100, 100)
  rect(mouseX, mouseY, 100, 100)
}