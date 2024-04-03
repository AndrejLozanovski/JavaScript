const area = document.querySelector(".area");
const perimeter = document.querySelector(".perimeter");

function cube(_sidesLength) {
  this.sidesLength = _sidesLength;

  this.areaOfCube = function () {
    area.innerHTML = `The area of the cube is ${6 * this.sidesLength ** 2}`;
  };

  this.perimeterOfCube = function () {
    perimeter.innerHTML = `The perimeter of the cube is ${12 * this.sidesLength}`;
  };
}

const sidesOfCube = +prompt("Enter the sides of the cube");

const cube1 = new cube(sidesOfCube);

console.log(cube1.areaOfCube());
console.log(cube1.perimeterOfCube());
