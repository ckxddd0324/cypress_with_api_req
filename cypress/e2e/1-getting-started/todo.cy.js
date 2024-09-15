/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import { getPosts, createPost } from "../../api/get_request";
import { globalTestData } from "../../support/e2e";

describe("example to-do app", () => {
  // const getMochaContext = () => cy.state("runnable").ctx;

  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");

    cy.wrap(getPosts()).then(({ data }) => {
      console.log(globalTestData);
      globalTestData.todoTitle = data.title;
      console.log(globalTestData);
    });

    cy.wrap(createPost(globalTestData.todoTitle)).then((res) => {
      console.log("ds");
      console.log(res);
    });
  });

  it("displays two todo items by default", () => {
    console.log(`${globalTestData.todoTitle} hello world`);
    console.log(globalTestData);
    cy.get(".todo-list li").should("have.length", 2);

    cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    cy.get(".todo-list li").last().should("have.text", "Walk the dog");
  });

  it("new", () => {
    console.log(globalTestData);
  });
});
