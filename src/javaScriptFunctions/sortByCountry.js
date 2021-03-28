const sortByCountry = function (a, b) {
  // Use toUpperCase() to ignore character casing
  const countryA = a.name.toUpperCase();
  const countryB = b.name.toUpperCase();

  let comparison = 0;
  if (countryA > countryB) {
    comparison = 1;
  } else if (countryA < countryB) {
    comparison = -1;
  }
  return comparison;
};

export default sortByCountry;
