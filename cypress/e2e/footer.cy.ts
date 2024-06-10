describe("Footer Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("links are working", () => {
      cy.get("#footer-nav").find("a").should("have.length", 4);

      // Check that each link leads to the correct page
      cy.get("[data-cy='footer-link-docs']").should("have.attr", "href", "#");
      cy.get("[data-cy='footer-link-api']").should("have.attr", "href", "#");
      cy.get("[data-cy='footer-link-help']").should("have.attr", "href", "#");
      cy.get("[data-cy='footer-link-community']").should(
        "have.attr",
        "href",
        "#",
      );

      // Check that each link is clickable
      cy.get("[data-cy='footer-link-docs']").click();
      cy.url().should("include", "#");
      cy.go("back");

      cy.get("[data-cy='footer-link-api']").click();
      cy.url().should("include", "#");
      cy.go("back");

      cy.get("[data-cy='footer-link-help']").click();
      cy.url().should("include", "#");
      cy.go("back");

      cy.get("[data-cy='footer-link-community']").click();
      cy.url().should("include", "#");
      cy.go("back");
    });

    it("displays the logo", () => {
      cy.get("[data-cy='footer-logo']")
        .should("have.attr", "src", "/icons/logo-small.svg")
        .should("have.attr", "alt", "logo");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("links are working", () => {
      cy.get("#footer-nav").find("a").should("have.length", 4);

      cy.get("[data-cy='footer-link-docs']").should("exist");
      cy.get("[data-cy='footer-link-api']").should("exist");
      cy.get("[data-cy='footer-link-help']").should("exist");
      cy.get("[data-cy='footer-link-community']").should("exist");
    });

    it("displays the logo", () => {
      cy.get("[data-cy='footer-logo']")
        .should("have.attr", "src", "/icons/logo-small.svg")
        .should("have.attr", "alt", "logo");
    });
  });
});
