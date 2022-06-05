let w = 600;
let h = 600;
let angle = 0;
let img;
let cam;
let camX, camY, camZ;
let counter = 0;

function preload() {
  img = loadImage("fsavc.jpg");
}

function setup() {
  createCanvas(w, h, WEBGL);
  frameRate(24);
  cam = createCapture(VIDEO);
  cam.size(320, 240);
  cam.hide(); // getting rid of the camera field

  // initialize variables for a camera
  camX = 0;
  camY = 0;
  camZ = 0;
}

function draw() {
  // ambientLight(255);

  // let dx = mouseX - w / 2;
  // let dy = mouseY - h / 2;
  // let v = createVector(-dx, -dy, 0);
  // v.normalize();
  // //   v.div(100);
  // directionalLight(255, 255, 0, v);

  // camY += 1;
  // camera(600, 0, 0, 0, 0, 0, 0, 1, 0);

  background(127);
  //   console.log(angle);

  //   rectMode(CENTER);

  push();
  noStroke();
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  angle += 0.03;
  texture(cam);
  box(200, 200);
  pop();

  stroke(127);
  for (let i = -500; i <= 500; i = i + 10) {
    translate(0 + i, 0, 0);
    box(10, 10);
  }
  for (let i = -500; i <= 500; i = i + 10) {
    translate(0, 0 + i, 0);
    box(10, 10);
  }
  for (let i = -500; i <= 500; i = i + 10) {
    translate(0, 0, 0 + i);
    box(10, 10);
  }

  translate(0, 200);
  rotateX(HALF_PI);
  texture(img);
  plane(320, 320);
}
