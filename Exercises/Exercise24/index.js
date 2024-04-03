function Developer(_fullName, _age, _experience, _workPosition) {
  this.fullName = _fullName;
  this.age = _age;
  this.experience = _experience;
  this.workPosition = _workPosition;
  this.getSeniority = function () {
    if (this.experience >= 0 && this.experience <= 1) {
      return "Junior";
    } else if (this.experience > 1 && this.experience <= 3) {
      return "Medior";
    } else {
      return "Senior";
    }
  };
  this.display = function () {
    return `I am ${this.fullName}, ${this.age} old and I'm working as ${this.workPosition} `;
  };
}

const fullName = "Mike Smith";
const age = 37;
const experience = 4;
const workPosition = "Front-end developer";

const fullNameSecond = "John Doe";
const ageSecond = 27;
const experienceSecond = 3;
const workPositionSecond = "Backend developer";

const devSecond = new Developer(fullNameSecond, ageSecond, experienceSecond, workPositionSecond);
console.log(devSecond.display());
console.log(devSecond.getSeniority());
