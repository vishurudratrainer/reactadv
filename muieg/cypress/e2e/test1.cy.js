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
    cy.get("#todoId").type("23")
    cy.get("#todoId").invoke('val').then(val => console.log("Value",val))

    cy.get("#fetchTodoById").click()
    cy.get("[data-field='userId']").should("have.length",1)
    cy.get("[data-field='userId']").should("have.text","USERID2")
  });
});
