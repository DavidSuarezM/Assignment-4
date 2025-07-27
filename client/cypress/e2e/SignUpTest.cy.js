describe("SignUpTest", () => {
  it("tests SignUpTest", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/");
    cy.get("a:nth-of-type(9) > button").click();
    cy.get("#name").click();
    cy.get("#name").type("D");
    cy.get("#name").type("user8");
    cy.get("#email").type("user8");
    cy.get("#email").type("user8@gmail.com");
    cy.get("#password").type("user88");
    cy.get("div:nth-of-type(3) button").click();
    cy.get("div.MuiDialog-root button").click();
    cy.get("#email").click();
    cy.get("#email").type("user8@gmail.com");
    cy.get("#password").click();
    cy.get("#password").type("user88");
    cy.get("div.MuiPaper-rounded button").click();
    cy.get("a:nth-of-type(12) > button").click();
    cy.get("a path").click();
    cy.get("label input").click();
    cy.get("div.MuiPaper-rounded button").click();
    cy.get("a:nth-of-type(9) > button").click();
    cy.get("a:nth-of-type(10) > button").click();
    cy.get("a:nth-of-type(11) > button").click();
    cy.get("a:nth-of-type(12) > button").click();
    cy.get("[data-testid='EditIcon']").click();
    cy.get("label input").click();
    cy.get("div.MuiPaper-rounded button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGAGAGBHAHAHBIAIAIBJAJAJAJAJBKAKAKBLBMBNBOBPBQBRBSBTBUBVBWBXBYBZBaBbBcBdAdAdAdA
