/*
// Create Gears
let blueGear, greenGear, redGear;
const sameRotationRate = 3;

function setup() {
  
  console.log("Setup function is called.");
  createCanvas(400, 400);

  // Initialize Blue Gear
  blueGear = createSprite(100, 200);
  blueGear.addAnimation("default", "blue_gear.png"); // Replace "blue_gear.png" with the actual file name
  blueGear.scale = 1;

  // Initialize Green Gear
  greenGear = createSprite(250, 278);
  greenGear.addAnimation("default", "green_gear.png"); // Replace "green_gear.png" with the actual file name
  greenGear.scale = 2;

  // Initialize Red Gear
  redGear = createSprite(85, 110);
  redGear.addAnimation("default", "red_gear.png"); // Replace "red_gear.png" with the actual file name
  redGear.scale = 0.75;
}

function draw() {

  console.log("Draw function is called.");
  background("white");

  // Rotate Gears
  blueGear.rotation -= sameRotationRate;
  greenGear.rotation += sameRotationRate;
  redGear.rotation += sameRotationRate;

  drawSprites();
}
*/

// Gear objects
var blueGear, greenGear, redGear;

// Rotation speed for all gears
var rotationSpeed = 3;

// Load images and initialize gears
function preload() {
  blueGear = new Image();
  blueGear.src = 'blue_gear.png';

  greenGear = new Image();
  greenGear.src = 'green_gear.png';

  redGear = new Image();
  redGear.src = 'red_gear.png';
}

// Setup function
function setup() {
  // Create gear objects
  blueGear = new Gear(100, 200, blueGear);
  greenGear = new Gear(250, 278, greenGear);
  redGear = new Gear(85, 110, redGear);

  // Set up animation loop
  setInterval(draw, 1000 / 60); // 60 frames per second
}

// Draw function
function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Rotate and display gears
  blueGear.rotate(rotationSpeed);
  greenGear.rotate(-rotationSpeed);
  redGear.rotate(rotationSpeed);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  blueGear.display(ctx);
  greenGear.display(ctx);
  redGear.display(ctx);

  // Display text
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Gears Animation', 10, 30);
}

// Gear class
class Gear {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.angle = 0;
  }

  // Rotate the gear
  rotate(speed) {
    this.angle += radians(speed);
  }

  // Display the gear
  display(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);
    ctx.restore();
  }
}

// Helper function to convert degrees to radians
function radians(degrees) {
  return (degrees * Math.PI) / 180;
}