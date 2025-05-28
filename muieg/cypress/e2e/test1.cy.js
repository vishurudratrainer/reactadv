describe("template spec", () => {
  it("Home page loading", () => {
    cy.visit("http://localhost:3000");
  });

  it("Todos page loading", () => {
    cy.visit("http://localhost:3000/todos");
  });

  it("Todos todosbyid loading", () => {
    cy.visit("http://localhost:3000/todosbyid");
  });

  it("Todos todosbyid select to do by Id", () => {
    cy.visit("http://localhost:3000/todosbyid");
    cy.get("#todoId").type("23");
    cy.get("#todoId")
      .invoke("val")
      .then((val) => console.log("Value", val));

    cy.get("#fetchTodoById").click();
    cy.get("[data-field='userId']").should("have.length", 1);
    cy.get("[data-field='userId']").should("have.text", "USERID2");
    cy.get("#todoId").screenshot();
  });

  it("Todos todosbyid done test", () => {
    cy.visit("http://localhost:3000/todosbyid");
    cy.xpath("/html/body/div/div/div/div/div[1]/div/input").type("66");
  });
  it("Todos intercept done test", () => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/todos/132", {
      fixture: "todos.json",
    })
    cy.visit("http://localhost:3000/todosbyid");
    cy.get("#todoId").type("132");
    cy.get("#todoId")
      .invoke("val")
      .then((val) => console.log("Value", val));

    cy.get("#fetchTodoById").click();
    cy.get("[data-field='userId']").should("have.length", 1);
    cy.get("[data-field='userId']").screenshot();
    cy.get("[data-field='userId']").should("have.text", "USERID123");
  });
});
