function Car(_model, _year, _milage, _owner) {
  this.model = _model;
  this.year = _year;
  this.milage = _milage;
  this.owner = _owner;

  this.getInfo = function () {
    return `${this.model}, ${this.year} ${this.milage}km, owned by ${this.owner}`;
  };
  this.getKm = function () {
    if (this.milage <= 10000) {
      return "This is great car";
    } else if (this.milage > 10000 && this.milage <= 250000) {
      return "This is a good car";
    } else {
      return "This is an old car";
    }
  };
  this.setOwner = function (_owner) {
    this.owner = _owner;
  };
}

const model = "Renault";
const year = 2014;
const mileage = 251000;
const owner = "Mike Smith";

const carFirst = new Car(model, year, mileage, owner);
console.log(carFirst);
console.log(carFirst.getInfo());
console.log(carFirst.getKm());
carFirst.setOwner("John Doe");
console.log(carFirst.getInfo());
