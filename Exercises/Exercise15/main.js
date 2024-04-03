const user = document.querySelector(".userInput");
const vowelConsonant = document.querySelector(".vowelConsonant");
const numberOfVowelsConsonants = document.querySelector(".numberVowelConsonant");

const userInput = "Andrej";
const vowels = ["a", "e", "i", "o", "u"];

user.innerHTML = `Name: ${userInput}`;

const checkFirstLetter = (vowelsInput, nameInput) => {
  const firstChar = nameInput[0].toLowerCase();
  return vowelsInput.includes(firstChar);
};

const isVowel = checkFirstLetter(vowels, userInput);

if (isVowel) {
  vowelConsonant.innerHTML = "Your name starts with a vowel";
} else {
  vowelConsonant.innerHTML = "Your name starts with a consonant";
}

const countVowelsCons = (vowelsInput, nameInput) => {
  const lowerCaseInput = nameInput.toLowerCase().trim();
  const nameLength = lowerCaseInput.length;
  let numVowels = 0;
  let numConsonants = 0;

  for (let i = 0; i < nameLength; i++) {
    if (vowelsInput.includes(lowerCaseInput[i])) {
      numVowels += 1;
    } else {
      numConsonants += 1;
    }
  }

  numberOfVowelsConsonants.innerHTML = `Number of vowels: ${numVowels}, number of consonant: ${numConsonants}`;
};
countVowelsCons(vowels, userInput);
