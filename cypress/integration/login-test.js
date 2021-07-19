/// <reference types="cypress" />

/***************************************************************
Author: Lanz Gementiza
Scope: Login in UI
Note: 
****************************************************************/

import { StartPage } from "../page-objects/start-page";

context("login via UI", () => {
  it("login to UI", () => {
    const startPage = new StartPage();

    cy.visit("https://stg.elancerz.com/");

    startPage.clickLoginButton();
  });
});
