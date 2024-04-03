const dateInput = document.getElementById("date-input");

const calculateYears = (dateInput) => {
  const dateOfBirth = new Date(dateInput);
  console.log(dateOfBirth);
  const yearOfBirth = dateOfBirth.getFullYear();
  const monthOfBirth = dateOfBirth.getMonth();
  const dayOfBirth = dateOfBirth.getDate();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let years = currentYear - yearOfBirth;

  if (monthOfBirth > currentMonth) {
    years--;
  } else if (monthOfBirth === currentMonth) {
    if (dayOfBirth > currentDay) {
      years--;
    }
  }
  return years;
};

const onDateChangeHandler = (event) => {
  const dateInput = event.target.value;
  console.log(dateInput);
  const yearsOld = calculateYears(dateInput);
  document.getElementById("age").innerText = `You are ${yearsOld} years old`;
};

dateInput.addEventListener("change", onDateChangeHandler);
