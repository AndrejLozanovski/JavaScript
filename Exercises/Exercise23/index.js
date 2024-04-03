const developer = {
  fullName: "",

  age: 0,
  experience: 0,
  workingPosition: "",
  getSeniority: function () {
    if (this.experience >= 0 && this.experience <= 1) {
      return "Junior";
    } else if (this.experience > 1 && this.experience <= 3) {
      return "Medior";
    } else {
      return "Senior";
    }
  },
  display: function () {
    return `I am ${this.fullName}, ${this.age} old and I'm working as ${this.workingPosition} `;
  },
};

developer.fullName = "Mike Smith";
developer.age = 37;
developer.experience = 3;
developer.workingPosition = "Front end developer";
console.log(developer);
console.log(developer.getSeniority());
console.log(developer.display());
