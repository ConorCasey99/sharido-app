describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/page/Home");
  });

  describe("Base test", () => {
    it("displays page header", () => {
      cy.get("h2").contains("Home");
    });
  });
});
