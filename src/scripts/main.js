'use strict';

const employees = document.querySelectorAll('li');
const money = document.querySelector('span');
const len = employees.length;

const massSalary = [];
const massObjPeople = [];

for (let i = 0; i < len; i++) {
  let int = employees[i].getAttribute('data-salary').replace('$', '');

  int = +int.replace(',', '');

  massSalary.push(int);
}

for (let i = 0; i < len; i++) {
  const objPeople = {};

  let int = employees[i].getAttribute('data-salary').replace('$', '');

  int = +int.replace(',', '');

  objPeople.name = employees[i].textContent;
  objPeople.position = employees[i].getAttribute('data-position');
  objPeople.salary = int;
  objPeople.age = employees[i].getAttribute('data-age');

  massObjPeople.push(objPeople);
}

massSalary.sort((a, b) => b - a);

// money.textContent = employees[0].textContent;

money.textContent = massObjPeople[5].name;

function resultPeople() {
  return massObjPeople;
}

resultPeople();

const sortedSalary = massObjPeople.sort((sal1, sal2) => {
  return sal1.salary - sal2.salary;
});

for (let n = 0; n < len; n++) {
  employees[n].textContent = sortedSalary[n].name;
}
