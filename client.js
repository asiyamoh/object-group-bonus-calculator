// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  console.log(employee);
  //create a new empty object
  let bonusEmployee ={};
for(let eachEmployee of employees){
  console.log(eachEmployee.name);
  bonusEmployee.name = eachEmployee.name;
  console.log(eachEmployee.reviewRating);
  if (eachEmployee.reviewRating < 2) {
    bonusEmployee.bonus = 0;
    console.log(bonusEmployee.bonus);
  }
  else if (eachEmployee.reviewRating == 3) {
    bonusEmployee.bonus = 0.04 * eachEmployee.annualSalary;
    console.log(bonusEmployee.bonus);
  }
  else if (eachEmployee.reviewRating == 4) {
    bonusEmployee.bonus = 0.06 * eachEmployee.annualSalary;
    console.log(bonusEmployee.bonus);
  }
  else if (eachEmployee.reviewRating == 5) {
    bonusEmployee.bonus = 0.10 * eachEmployee.annualSalary;
    console.log(bonusEmployee.bonus);
  }
  let vetEmployee = 0;
  if(eachEmployee.employeeNumber.length === 4) {
    vetEmployee = 0.05 * eachEmployee.annualSalary;
    bonusEmployee.bonus += vetEmployee;
    console.log(bonusEmployee.bonus);

  }
  let tooMuchMoney = 0;
  if(eachEmployee.annualSalary > 65000){
    tooMuchMoney = 0.01 * eachEmployee.annualSalary;
    eachEmployee.bonus = tooMuchMoney - eachEmployee.annualSalary;
    console.log(bonusEmployee.bonus);
  }
  console.log(bonusEmployee);
}
  
  
  // return new object with bonus results

}

// employee.filter(bonusEmployee) => {
//   return
// }

calculateIndividualEmployeeBonus(employees);
// calculateIndividualEmployeeBonus(employee.reviewRating);
// console.log(bonusEmployee);

