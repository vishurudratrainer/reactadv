describe("Test to see app is working spec", () => {
  it("test to see whether app is loading", () => {
    cy.visit("http://localhost:3000");
    cy.get("#root > div > div > div > form > label:nth-child(1) > input").type(
      "sa"
    );
    cy.get(
      "#root > div > div > div > form > label:nth-child(3) > input[type=password]"
    ).type("sa");
    cy.get("#root > div > div > div > form > button").click();
    cy.url().should("include","counter")
  });
});
