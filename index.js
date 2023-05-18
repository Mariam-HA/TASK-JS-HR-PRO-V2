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
    console.log(`name ${this.name}, and the postion is ${this.postion}`);
    //return this.name, this.postion;
  }
}
const employee1 = new Employee("mariam", "team leader", 2022, 1000);
console.log(employee1.idBadge());
employee1.idBadge();

// step 2
class Manager extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined);
    this.salary = salary;
    this.bonusPercentage = bonusPercentage;
  }
  salaryIncrease(increaseAmount) {
    return this.salary + increaseAmount;
  }
  //part3
  logManagerInfo() {
    console.log(`sine ${workingYears}, Bonus % ${bonusPercentage}`);
  }
  getWorkingYears(currentYear) {
    return currentYear - this.yearJoined;
  }
}

const manager1 = new Manager("sara", "manager", 2019, 4000, "40%");
console.log(manager1.salaryIncrease(1000));

// step 3

//const employees = new Employee();

function getemployees(employees) {
  employeesJSON.map((employees) => {
    return employees;
  });
}
console.log(getemployees());

console.log(employeesJSON);
console.log(managersJSON);

function getmanger(managers) {
  managersJSON.map((managers) => {
    return managers;
  });
}
console.log(getmanger());

// part4
// const logNames = (name) => {
//     name.array.forEach(element => {

//     });
// };
