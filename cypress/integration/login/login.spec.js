describe("Login Test", () => {
 
  beforeEach(() => {
    cy.visit("/page/Login");
  });

  it("shows the correct page", () => {
    cy.contains("Welcome back!");
  });

  it("shows error when details are incorrect", () => {

  });
});
