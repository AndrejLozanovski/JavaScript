// Check for even numbers that are devisible by 3 in the range of 10 to 100
const title = document.querySelector(".title");
const result = document.querySelector(".print");

title.innerHTML = "Exercise02";
// For loop to get our work done
for (i = 10; i <= 100; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    result.innerHTML += `Even numbers from 10 to 100 that are devisible by 3 are: ${i}` + "<br>";
  }
}
