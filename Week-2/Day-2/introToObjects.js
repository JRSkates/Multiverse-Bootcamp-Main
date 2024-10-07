let nycPopulation;

const newYorkCity = {
  name: "New York City",
  country: "United States",
  state: "New York",
  population: 8400000,
  famousLandmarks: [
    "Statue of Liberty",
    "Empire State Building",
    "Central Park",
  ],
  boroughs: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
  timezone: "America/New_York",
  nickname: "The Big Apple",
  numberLandmarks(){
      return this.famousLandmarks.length
  }
};

nycPopulation = newYorkCity.population;
console.log(nycPopulation); // Output: 8400000
console.log(newYorkCity.numberLandmarks()); // Output: 3
  