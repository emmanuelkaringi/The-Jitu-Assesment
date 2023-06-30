// Write a JavaScript program to find the leap years in a given range of years.

function year_range(start, end) {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  let new_array = [];

  range.forEach(function (year) {
    if (leap_years(year)) new_array.push(year);
  });
  return new_array;
}

function leap_years(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

console.log(year_range(1997, 2023));
