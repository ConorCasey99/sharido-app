describe("Login Test", () => {
 
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit("/page/Login");
  });

  it("shows the correct page", () => {
    // eslint-disable-next-line no-undef
    cy.contains("Welcome back!");
  });

  it("shows error when details are incorrect", () => {

  });
});
