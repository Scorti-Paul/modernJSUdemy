/* 
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
*/

const certs = ["degree", "hdn", "diploma", "phd"];
console.log(certs);

/**
 *  Add value to the start of the array
 *  returns the length of the array
 */
console.log(certs.unshift("certificate"));
console.log(certs);

/**
 *  Add value to the end of the array
 *  returns the length of the array
 */
console.log(certs.push("advance diploma"));
console.log(certs);

/**
 *  remove value from the start of the array
 *  returns a string of the value removed
 */
console.log(certs.shift());
console.log(certs);

/**
 *  remove value from the end of the array
 *  returns a string of the value removed
 */
console.log(certs.pop());
console.log(certs);

console.log(`IndexOf: ${certs.indexOf("phd")}`);
console.log(`Includes: ${certs.includes("phd")}`);

const jonas = {
  firstName: "Jonas",
  lastName: "Jay",
  birthYear: 1995,
  job: "Software Engineer",
  friends: ["Martins", "Andrews", "Nat"],

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
};

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')
// console.log(typeof jonas[interestedIn])

// jonas[interestedIn] ? console.log(jonas[interestedIn]) : console.log('Values not available')

// console.log(`Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[2]}`)

console.log("Jonas Age: " + jonas.age);
