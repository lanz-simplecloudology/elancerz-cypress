/// <reference types="cypress" />

/***************************************************************
Author: Lanz Gementiza
Scope: Login in UI
Note: 
****************************************************************/

import { StartPage } from "../../page-objects/start-page";

context("login via UI", () => {
  it("login to UI", () => {
    const startPage = new StartPage();
    var user = "Cypress.env('env.user')";
    var password = "Cypress.env('env.password')";

    startPage.LoginUI(user, password);
  });
});
