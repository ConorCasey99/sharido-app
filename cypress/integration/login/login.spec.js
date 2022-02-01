describe("Login Test", () => {
 
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit("/page/Login");
  });

  it("shows the correct page", () => {
    // eslint-disable-next-line no-undef
    cy.get("h1").should("contain.text", "Sharido");
    cy.get("p").should("contain.text", "Welcome back");
  });

  it("shows error when details are incorrect", () => {
    cy.get("email").type("wrongemail@email.com")
    cy.get("input#password").type("wrongpassword")

    cy.get("button#login")
    

  });
});
