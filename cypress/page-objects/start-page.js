/***************************************************************
  # Author             :  Lanz Gementiza
  
  # Last updated by    :  Lanz Gementiza         
  # Last updated on    :  19 July 2021
***************************************************************/

export class StartPage {
  get login() {
    return cy.xpath('//button[contains(text(), "LogIn")]');
  }

  /**************************
   TEST-ACTIONS 
  **************************/

  clickLoginButton() {
    this.login.click();
  }
}
