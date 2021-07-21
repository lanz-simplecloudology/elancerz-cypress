/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const FS = require("fs-extra");
const PATH = require("path");

// This is used for calling the config file
function getConfigurationByFile(file, roletype) {
  const pathToConfigFile = PATH.resolve(
    "cypress",
    "config/" + web,
    `${file}.json`
  );
  if (!FS.existsSync(pathToConfigFile)) {
    return {
      // return empty
    };
  }

  return new Promise(function (res) {
    if (roletype == "mycrm") {
      try {
        FS.readJson(pathToConfigFile, (err, obj) => {
          if (err) throw err;
          res(obj[country][roletype]);
        });
      } catch (err) {
        res(err);
      }
    } else {
      res(err);
    }
  });
}

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const CLIPBOARDY = require("clipboardy");
  const FILE = config.env.configFile;
  const ROLETYPE = config.env.roletype;

  return getConfigurationByFile(FILE, ROLETYPE);
};
