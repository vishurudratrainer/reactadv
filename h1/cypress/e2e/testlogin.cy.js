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
    cy.get("#todosbyidlink").click()
     cy.contains("23");
     cy.get("#fetchtodosSingle").click()
     cy.get("#table1 > tr:nth-child(2) > td:nth-child(1)").should("have.text","2")
     cy.get("#table1 > tr:nth-child(2) > td:nth-child(4)").should("have.text","false")
      cy.get("#table1 > tr:nth-child(2) > td:nth-child(3)").should("have.text","et itaque necessitatibus maxime molestiae qui quas velit")

     

  });
});
