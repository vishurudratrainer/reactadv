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
    cy.url().should("include", "counter");
    cy.get("#slide").click();
  });

  it("test to see whether form", () => {
    cy.visit("http://localhost:3000");
    cy.get("#root > div > div > div > form > label:nth-child(1) > input").type(
      "sa"
    );
    cy.get(
      "#root > div > div > div > form > label:nth-child(3) > input[type=password]"
    ).type("sa");
    cy.get("#root > div > div > div > form > button").click();
    cy.url().should("include", "counter");
    cy.get("#student").click();
    cy.get(
      "#root > div > div > div:nth-child(2) > form > label:nth-child(1) > input[type=text]"
    ).type("Raaju");
    cy.get(
      "#root > div > div > div:nth-child(2) > form > label:nth-child(3) > input[type=number]"
    ).type("20");
    cy.get(
      "#root > div > div > div:nth-child(2) > form > label:nth-child(5) > textarea"
    ).type("USA");
    cy.get("#root > div > div > div:nth-child(2) > form > button").click();
    cy.wait(1000);
    cy.get(
      "#root > div > div > div:nth-child(2) > div:nth-child(2) > table > tbody > tr > td:nth-child(1)"
    ).contains("Raaju");
        cy.get(
      "#root > div > div > div:nth-child(2) > div:nth-child(2) > table > tbody > tr > td:nth-child(2)"
    ).contains("20");
  });


   it("test to see axios with reducer form", () => {
    cy.visit("http://localhost:3000");
    cy.get("#root > div > div > div > form > label:nth-child(1) > input").type(
      "sa"
    );
    cy.get(
      "#root > div > div > div > form > label:nth-child(3) > input[type=password]"
    ).type("sa");
    cy.get("#root > div > div > div > form > button").click();
    cy.url().should("include", "counter");
    cy.get("#todosAxiosReducer").click();
    cy.get("#todoId").type(22)
    cy.get("#fetchtodo").click()
    cy.wait(1000)
    cy.get("#output").contains("distinctio")
  
  });
});
