describe("SignUp", () => {
  it("tests SignUp", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/");
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(3) > button").click();
    cy.get("a:nth-of-type(9) > button").click();
    cy.get("#name").click();
    cy.get("#name").type("user9");
    cy.get("#email").type("user9");
    cy.get("#email").type("user9@gmail.com");
    cy.get("#password").type("user99");
    cy.get("div:nth-of-type(3) button").click();
    cy.get("div.MuiDialog-root button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJAJAJBKAKAKAKAKBLALALBMBNB
