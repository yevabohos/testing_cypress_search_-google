describe("Testing something on Google", () => {
  //my first test
  it("We are able to search something", () => {
    cy.visit("https://www.google.com/");
    cy.get("input[name='q']").type("Ukraine").type("{enter}");
  });
  it("gets first search result", () => {
    cy.get("#search a")
      .invoke("attr", "href")
      .then((href) => console.log(href));
  });
});
