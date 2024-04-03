const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const square = document.querySelector(".square");
const rotationInterval = 1000;
const rotationStep = 30;

let deg = 0;
let spinnerId;

const rotateElement = (elementInput, rotationDeg) =>
  (elementInput.style.transform = `rotate(${rotationDeg}deg)`);

const onClickRotate = () => {
  console.log("Rotating square");
  if (!spinnerId) {
    spinnerId = setInterval(() => {
      deg += rotationStep;
      rotateElement(square, deg);
    }, rotationInterval);
  }
};

const onStopRotate = () => {
  console.log("Stopping square");
  clearInterval(spinnerId);
};

startBtn.addEventListener("click", onClickRotate);
stopBtn.addEventListener("click", onStopRotate);
