const employeesList = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

function getBudgets(obj) {
  let budgetSum = 0;
  for (let i=0; i<obj.length;i++) {
       budgetSum += obj[i].budget;
  }
  return budgetSum;
}

getBudgets(employeesList);


