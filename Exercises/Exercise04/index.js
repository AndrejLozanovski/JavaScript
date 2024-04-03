function employeeData(_name, _companyName, _jobPosition, _salary) {
  this.name = _name;
  this.companyName = _companyName;
  this.jobPosition = _jobPosition;
  this.salary = _salary;
}

const firstEmployee = new employeeData("Mike", "Apple", "Employee", "3000$");
const secondEmployee = new employeeData("John", "Amazon", "Director", "15000$");
const thirdEmployee = new employeeData("Peter", "Google", "Boss", "25000$");

const employees = [];

const addEmployee = (employeeArr, employee) => employeeArr.push(employee);

addEmployee(employees, firstEmployee);
addEmployee(employees, secondEmployee);
addEmployee(employees, thirdEmployee);

const createDOMElement = (elementType) => {
  const createElement = document.createElement(elementType);
  return createElement;
};

const ulList = createDOMElement("ul");

employees.forEach((el) => {
  const list = createDOMElement("li");
  list.innerHTML = `Name: ${el.name},  Company: ${el.companyName}, Position: ${el.jobPosition}, Salary: ${el.salary}`;
  ulList.appendChild(list);
});

document.body.appendChild(ulList);
