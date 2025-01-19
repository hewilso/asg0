// DrawRectangle.js/import { Vector3 } from './lib/cuon-matrix-cse160.js';
function drawVector(v, color, ctx) {
    ctx.beginPath();
    ctx.strokeStyle = color;

    ctx.moveTo(200, 200);
    console.log(v.elements[0]);
    ctx.lineTo(200 + ((20) * v.elements[0]), 200 - ((20) * v.elements[1]));
    ctx.stroke();
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('draw-button').addEventListener('click', handleDrawEvent);
});


function handleDrawEvent() {
  canvas = document.getElementById('example');
  console.log('this ran');
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(27, 27, 27, 1.0)'; // Set a black color
  ctx.fillRect(0, 0, 400, 400);

  const x = parseFloat(document.getElementById('x-coordinate').value);
  const y = parseFloat(document.getElementById('y-coordinate').value);
  let v1 = new Vector3([x, y,  0]);  // 
  drawVector(v1, "red", ctx);

  const x2 = parseFloat(document.getElementById('x-coordinate2').value);
  const y2 = parseFloat(document.getElementById('y-coordinate2').value);

  let v2 = new Vector3([x2, y2, 0]);
  drawVector(v2, "blue", ctx);

 

}

function areaTriangle(v1,v2) {

  return Math.abs(Vector3.cross(v1, v2).elements[2])/2;

}

function angleBetween(v1, v2) {

  let m1 = v1.magnitude();
  let m2 = v2.magnitude();

  if (m1 === 0 || m2 === 0) {
    return 0; 
  }

  let d = Vector3.dot(v1, v2);
    

  let cosAngle = d / (m1 * m2);
    

  cosAngle = Math.max(-1, Math.min(1, cosAngle));

  return Math.acos(cosAngle) * (180/Math.PI);



}
function handleDrawOperationEvent() {

  canvas = document.getElementById('example');
  console.log('this ran');
  ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(27, 27, 27, 1.0)'; // Set a black color
  ctx.fillRect(0, 0, 400, 400);

  const x = parseFloat(document.getElementById('x-coordinate').value);
  const y = parseFloat(document.getElementById('y-coordinate').value);
  let v1 = new Vector3([x, y,  0]);  // 
  drawVector(v1, "red", ctx);

  const x2 = parseFloat(document.getElementById('x-coordinate2').value);
  const y2 = parseFloat(document.getElementById('y-coordinate2').value);

  let v2 = new Vector3([x2, y2, 0]);
  drawVector(v2, "blue", ctx);

  const selectedOperation = document.getElementById('operation').value;

  const scalar = parseFloat(document.getElementById('scalar').value);

  switch (selectedOperation) {

    case 'add':
      v1.add(v2);
      drawVector(v1, "green", ctx);
      break;
    
    case 'sub':
      v1.sub(v2);
      drawVector(v1, 'green', ctx);
      break;
    
    case 'mul':
      v1.mul(scalar);
      v2.mul(scalar);
      drawVector(v1, 'green', ctx);
      drawVector(v2, 'green', ctx);
      break;
    
    case 'div':
      v1.div(scalar);
      v2.div(scalar);
      drawVector(v1, 'green', ctx);
      drawVector(v2, 'green', ctx);
      break;
    
    case 'angle':
      console.log("Angle: " + angleBetween(v1, v2));
      break;
    case 'area':
      console.log("Area of the triangle: " + (areaTriangle(v1,v2)));
      break;
    
    case 'magnitude':
      console.log("Magnitude v1: " + v1.magnitude());
      console.log("Magnitude v2: " + v2.magnitude());
      break;
    
    case 'normalize':
      v1.normalize();
      v2.normalize();

      drawVector(v1, 'green', ctx);
      drawVector(v2, 'green', ctx);
      break;

  }

}

function main() {
     // Retrieve <canvas> element                                  <- (1)
      var canvas = document.getElementById('example');
      if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
       return;
      }
 
   // Get the rendering context for 2DCG                          <- (2)
   var ctx = canvas.getContext('2d');
   let v1 = new Vector3([2.25, 2.25, 0]);
   // Draw a blue rectangle                                       <- (3)
   ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set a blue color
   ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color
   drawVector(v1, "empty", ctx);

   }