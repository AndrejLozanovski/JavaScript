class Average {
  constructor(_firtNumber, _secondNumber) {
    this.firtNumber = _firtNumber;
    this.secondNumber = _secondNumber;
  }

  calcAverage() {
    const avgValue = (this.firtNumber + this.secondNumber) / 2;
    return `The average value between ${this.firtNumber} and ${this.secondNumber} is ${avgValue}`;
  }
}

const numOne = 5;
const numTwo = 8;
const numThree = 10;
const numFour = 12;
const avgFirst = new Average(numOne, numTwo);
const avgSecond = new Average(numThree, numFour);
console.log(avgFirst.calcAverage());
console.log(avgSecond.calcAverage());
