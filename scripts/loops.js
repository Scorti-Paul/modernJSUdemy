const jonas = ["Natin", "Jade", 23, true, ["Peace", "Mars", "Dorothy"]];

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weight repetition ${i} 😊`);
// }

// for (let count = 0; count < jonas.length; count++) {
//   console.log(jonas[count], typeof jonas[count])
// }

// let newWording = []
// for (let count = 0; count < jonas.length; count++) {
//   newWording.push(jonas[count] + '@')
// }

// console.log(newWording)

// const years = [1999, 2004, 2012, 2022, 2025]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//   const element = 2025 - years[i];
//   ages.push(element)
//   // console.log(element);

// }

// console.log(ages);

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const temperatureAmplitude = function (arr) {
  const tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    tempArr.push(arr[i]);
  }

  // return Math.max(...tempArr) - Math.min(...tempArr);
  return [41, 6]
};

console.log(temperatureAmplitude(temperature))  