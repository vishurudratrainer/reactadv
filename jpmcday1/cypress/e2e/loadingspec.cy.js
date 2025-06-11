describe("test whether app is loading", () => {
  it("login test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#username").type("v");
    cy.get("#password").type("v");
    cy.get("#login").click();
    cy.get("#todosaxioslink").click();
    cy.get("#fetchaxiosbutton").click();
    cy.get(
      "#root > div > header > div > div:nth-child(2) > table > tr:nth-child(2) > td:nth-child(3)"
    ).contains("delectus aut autem");
    cy.get("#transfer").click();
    cy.wait(500)
    cy.get("#goTo").click();
  });
});
