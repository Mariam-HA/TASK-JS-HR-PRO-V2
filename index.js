const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

// Code Here
// step 1
class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.postion = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  idBadge() {
    //console.log(` ${this.postion}: ${this.name}`);
    const firstName = this.name.split(" ")[0];
    return `${this.postion}: ${firstName}`;
  }
}
const employee1 = new Employee("Mariam Alrashdan", "Team leader", 2022, 1000);
console.log(employee1.idBadge());
//employee1.idBadge();

// step 2
class Manager extends Employee {
  currentYear = 2023;
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  }
  salaryIncrease(increaseAmount) {
    //return this.salary + increaseAmount;
    this.salary = this.salary + increaseAmount;
    return this.salary;
  }
  //part3
  logManagerInfo() {
    console.log(this.name);
    console.log(`since ${this.getWorkingYears()}`);
    console.log(`Bonus % ${this.bonusPercentage}`);
  }

  getWorkingYears(currentYear) {
    return currentYear - this.yearJoined;
  }
}

const manager1 = new Manager("sara", "manager", 2019, 4000, 40);
console.log(manager1.salaryIncrease(1000));
// manager1.salaryIncrease(1000);
// console.log(manager1.salary);

// step 3
// create instances of employee using map
const employees = employeesJSON.map(
  (employee) =>
    new Employee(
      employee.name,
      employee.position,
      employee.yearJoined,
      employee.salary
    )
);

// instances of manager
const managers = managersJSON.map(
  (manager) =>
    new Manager(
      manager.name,
      manager.position,
      manager.yearJoined,
      manager.salary,
      manager.bonusPercentage
    )
);

// part4

//Log the names of all employees
// using the forEach method using idBadge method.

employees.forEach((employee) => {
  console.log(employee.idBadge());
});

// Create a variable called superHeroes
// which will have ony employees who are developers.

const superHeroes = employees.filter(
  (employee) => employee.position === "Developer"
);

console.log(superHeroes);

// Loop through all the managers and increase their salaries
// by 1000 using the increaseAmount method if they have been
// working for more than 11 years.

const increaseSalaries = managers.map((manager) => {
  if (manager.getWorkingYears() > 11) {
    manager.salaryIncrease(1000);
  }
  return manager;
});
console.log(increaseSalaries);

//Display iterate over all the managers and
// invoke the logManagerInfo method.

// managers.forEach((manager) => {
//   manager.logManagerInfo();
// });
const managerInfo = managers.map((manager) => manager.logManagerInfo());

console.log(managerInfo);

//Create a new array containing the names of managers whose yearJoined
//is before 2012 and store in into a variable called seniorExecutives.
const seniorExectives = managers
  .filter((manager) => manager.yearJoined < 2012)
  .map((manager) => manager.name);
console.log(seniorExectives);

//Return one manager with a bonusPercentage of 0.1 and save it to a variable called lowestBonus
const lowestBonus = managers.find((manager) => manager.bonusPercentage === 0.1);
console.log(lowestBonus);

//Get the first employee with a salary greater than 8000 using the find method
// into a variable called promotionCandidate

const promotionCandidate = employees.find((employee) => employee.salary > 8000);
console.log(promotionCandidate);

//Find the employee with the highest salary and save it in a variable called mostPaidEmployee.
// const mostPaidEmployee = employees.find((employee) => {
//   return employee.salary === Math.max();
// });
// console.log(mostPaidEmployee);

//Calculate the total salary of all employees and store it into a variable called totalSalaries.

//Sort the employees array based on their yearJoined in ascending order into a variable called employeesSorted.
