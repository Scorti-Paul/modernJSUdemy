const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const counter = i + 1;
    console.log(
      `...${arr[i]}°C in ${counter} ${counter === 1 ? "day" : "days"}.`
    );
  }
};

// const temperature = [17, 21, 23];
const temperature = [12, 5, -5, 0, 4];

printForecast(temperature);
