const printForecast = (arr) => {
  let reportForecast = "";
  for (let i = 0; i < arr.length; i++) {
    const counter = i + 1;
    // const counter = arr.indexOf(arr[i]) + 1;
    reportForecast += `...${arr[i]}°C in ${counter} ${
      counter === 1 ? "day" : "days"
    } `;
  }
  return reportForecast;
};

const temperature = [17, 21, 23];
// const temperature = [12, 5, -5, 0, 4];

console.log(printForecast(temperature));
