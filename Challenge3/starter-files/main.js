// Getting name from prompt
const userName = prompt(
  "Check whether Antonio, Marija or Darko have voted by entering their name."
);

// The array with the participants
const votingParticipants = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
];
const votingParticipantsLength = votingParticipants.length;

// Where to append our result on HTML
const display = document.getElementById("participants");
display.style.display = "flex";

// Styling function
const createBorder = (cell) => {
  cell.style.border = "1px solid black";
  cell.style.width = "150px";
  cell.style.padding = "5px";
};

// Function to create whatever element we want, and where to append the result
const createDOMElement = (elementType, appendElement) => {
  const createElement = document.createElement(elementType);
  appendElement.appendChild(createElement);
  return createElement;
};

// Function that checks if the name from prompt is in the array and if so writes the voting participant in the HTML
const findParticipantAndPrint = (participantName) => {
  for (let i = 0; i < votingParticipantsLength; i++) {
    if (participantName[i][0].toLocaleLowerCase().trim() == userName.toLocaleLowerCase().trim()) {
      const votingName = createDOMElement("p", display);
      const participantVote = createDOMElement("p", display);
      const participantPoints = createDOMElement("p", display);
      votingName.innerHTML = participantName[i][0];
      createBorder(votingName);

      if (participantName[i][1]) {
        participantVote.innerHTML += "Voted!";
        createBorder(participantVote);
        participantPoints.innerHTML += participantName[i][2];
        createBorder(participantPoints);
      } else {
        participantVote.innerHTML += "Didn't vote";
        createBorder(participantVote);
      }
      return;
    }
  }
};

findParticipantAndPrint(votingParticipants);
