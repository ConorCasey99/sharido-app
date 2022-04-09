describe("Login Test", () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit("/page/CreateCommunity");
  });

  it("shows the correct page", () => {
    // eslint-disable-next-line no-undef
    cy.get("h1").should("contain.text", "Create a Community!");
  });

  it("it focuses the input", () => {
    cy.get("#communityTitle > .native-input").type("Automated Testing Test Community"); 
    cy.get("#communityDescription > .native-input").type("Automated Testing Test Community Description"); 
    cy.get(".custom-options").should("contain.text", "Automotive");
    cy.get(".custom-options").type("Automotive");
  });






  
});
