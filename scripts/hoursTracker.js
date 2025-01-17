const hoursTracker = (arr) => {
  let totalHours = 0;
  let newArr = [];
  let maxDayHours = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    totalHours += arr[i];
    newArr.push(arr[i]);
  }

  const daysWorked = newArr.length;
  const avg = totalHours / daysWorked;

  const status = totalHours >= 35 ? "Full-time" : "Part time";
  const result = {
    totalHours: totalHours,
    averageHours: avg,
    maxDayHours: maxDayHours,
    daysWorked: daysWorked,
    status: status,
  };

  return result;
};

const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

console.table(hoursTracker(data));
