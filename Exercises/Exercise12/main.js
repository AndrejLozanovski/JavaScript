const people = document.querySelector(".people");
const even = document.querySelector(".even");

const arrNames = ["Bojan", "Marko", "Marija", "Stefan", "Elena", "Damjan", "Petar"];
const arr = [];
const arrNamesLength = arrNames.length;

for (let i = 1; i < arrNamesLength; i++) {
  if (i % 2 === 0) {
    let evenNames = arrNames[i];
    arr.push(evenNames);
  }
}

people.innerHTML = `People: ${arrNames}`;
even.innerHTML = `People on even position: ${arr}`;
