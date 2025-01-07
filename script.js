function logger() {
  console.log('running a new function')
}

// logger();


function fruitProcessor(apples, oranges = 40) {
  const juice = `Juice with ${apples} apples, and ${oranges} oranges...`
  return juice;
}

const productionReport = fruitProcessor(223, 73);

console.log(productionReport);

function calAge(birthYear) {
  return 2025 - birthYear;
}

console.log(calAge(1995 ));


const calBirthAge = function(birthYear) {
  return 2025 - birthYear;
}

console.log(calBirthAge(1992));


const calBirth = birthYear => 2025 - birthYear;


console.log(calBirth(2014));


const retirementYearLeft = (birthYear) => {
  const age = 60 - (2025 - birthYear)
  return age > 0 ? age : 'dead man'
};


console.log('Retire: ' + retirementYearLeft(1995));
