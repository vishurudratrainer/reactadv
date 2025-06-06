describe("template spec", () => {
  it("test login", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#username").type("v");
    cy.get("#password").type("v");
    cy.get("button").click();
    cy.contains("Welcome");
    cy.get("#counter").should("have.text", "0");
    cy.get("#inc").click();
    cy.get("#counter").should("have.text", "1");
  });
});
