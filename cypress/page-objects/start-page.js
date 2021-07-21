/***************************************************************
  # Author             :  Lanz Gementiza
  
  # Last updated by    :  Lanz Gementiza         
  # Last updated on    :  19 July 2021
***************************************************************/

export class StartPage {
  get login() {
    return cy.xpath('//button[contains(text(), "LogIn")]');
  }

  get userNameField() {
    return cy.xpath('//input[@name="login"]');
  }

  get passwordField() {
    return cy.xpath('//input[@type="password"]');
  }

  get signInButton() {
    return cy.xpath('//button[@type="submit"]');
  }

  /**************************
   TEST-ACTIONS 
  **************************/

  LoginUI() {
    cy.visit("https://stg.elancerz.com/");
    this.login.click();

    this.userNameField.type(Cypress.env("env.user"));
    this.passwordField.type(Cypress.env("env.password"), "log:false");
    this.signInButton.click();
  }
}
