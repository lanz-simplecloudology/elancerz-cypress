/// <reference types="cypress" />

// // export a function
// module.exports = (on, config) => {
//   // configure plugins here
// };

// promisified fs module
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress", "config", `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

// plugins file
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = path.resolve("cypress");

  return getConfigurationByFile(file);
};
