// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function(breed, callback) {
  console.log("breedDetailsFromFile: Calling readFile...");

  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    if (!breed) return undefined;

    callback(data);
  });
};

const printOutCatBreed = (data) => {
  console.log("Return Value: ", data);
};

// we try to get the return value
// breedDetailsFromFile("Bombay", printOutCatBreed);
breedDetailsFromFile("Saphire", printOutCatBreed);
// console.log("Return Value: ", bombay);
// console.log("Result", bombay);

module.exports = breedDetailsFromFile;
