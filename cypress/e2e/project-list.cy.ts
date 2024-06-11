import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { ProjectStatus } from "@api/projects.types";

const statusNames = {
  [ProjectStatus.info]: "Stable",
  [ProjectStatus.warning]: "Warning",
  [ProjectStatus.error]: "Critical",
};

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    });

    // open projects page
    cy.visit("http://localhost:3000/dashboard");
  });

  it("renders loading spinner", () => {
    cy.get('[data-cy="spinner"]').should("be.visible");

    cy.get('[data-cy="project-list"]').should("be.visible");
    cy.get('[data-cy="spinner"]').should("not.exist");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(
            capitalize(
              statusNames[mockProjects[index].status as ProjectStatus],
            ),
          );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
