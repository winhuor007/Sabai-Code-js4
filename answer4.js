const dates = ["2024-01-01", "2024-02-02", "2024-04-04"];

const transformedDates = dates.map((date) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
});

console.log(transformedDates);
