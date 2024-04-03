class Triangle {
  constructor(_a, _b, _c) {
    this.a = _a;
    this.b = _b;
    this.c = _c;
  }

  check() {
    if (this.a === this.b && this.a === this.c) {
      return `The triangle with sides a:${this.a}, b:${this.b}, c:${this.c} is equilateral `;
    } else if (this.a === this.b || this.a === this.c || this.b === this.c) {
      return `The triangle with sides a:${this.a}, b:${this.b}, c:${this.c} is isosceles`;
    } else {
      return "Triangle is scalene";
    }
  }
}

const triangleFirst = new Triangle(15, 25, 5);
const triangleSecond = new Triangle(10, 5, 10);
console.log(triangleFirst.check());
console.log(triangleSecond.check());
