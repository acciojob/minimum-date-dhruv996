function minDate(dates) {
  // Use the spread operator to create a copy of the array
  const sortedDates = [...dates];

  // Sort the array of dates in ascending order
  sortedDates.sort();

  // Return the first (minimum) date
  return sortedDates[0];
}

function findMinDate() {
  const dates = ["2023/03/01", "2023/03/02", "2023/03/03"];
  const minimumDate = minDate(dates);
  alert(`The minimum date is: ${minimumDate}`);
}

