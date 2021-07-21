/// <reference types="cypress" />

/***************************************************************
Author: Lanz Gementiza
Scope: Login in UI for Git Action Workflow
Note: 
****************************************************************/

import { StartPage } from "../page-objects/start-page";

context("login via UI", () => {
  it("login to UI", () => {
    const startPage = new StartPage();

    startPage.LoginUI();
  });
});
