/*eslint-disable*/

describe("Making and filtering requests", function() {
  it("Selects a table", function() {
    cy.visit("http://localhost:3000/");

    cy.get(".custom-select").select("cip");
  });

  it("Displays an 'unavailable' message when table is missing", function() {
    cy.visit("http://localhost:3000/");

    cy.get(".custom-select").select("conflict");

    cy.get("button.options-button").contains("THIS TABLE IS UNAVAILABLE");
  });

  it("Filters the selected table", function() {
    cy.visit("http://localhost:3000/");

    cy.get(".custom-select").select("cip");

    cy.get("input.form-control")
      .type("500")
      .should("have.value", "500");
    cy.get("select.form-control")
      .select("all (cip)")
      .should("have.value", "all (cip)");
    cy.get("select.form-control")
      .select("")
      .should("have.value", "");

    cy.get("button.order-columns-button").should("be.disabled");
  });

  it("Selects columns in a table", function() {
    cy.visit("http://localhost:3000/");

    cy.get(".custom-select").select("cip");

    cy.get("button.options-button")
      .contains("cip")
      .click();
    cy.get("button.options-button")
      .contains("year")
      .click();
    cy.get("button.options-button")
      .contains("grads_women")
      .click();
    cy.get("button.options-button")
      .contains("grads_hispanic_women")
      .click();
    cy.get("button.options-button")
      .contains("grads_women")
      .click();

    cy.get("button.options-button")
      .contains("cip")
      .should("have.class", "options-button-selected");
    cy.get("button.options-button")
      .contains("year")
      .should("have.class", "options-button-selected");
    cy.get("button.options-button")
      .contains("grads_women")
      .should("not.have.class", "options-button-selected");
    cy.get("button.options-button")
      .contains("grads_hispanic_women")
      .should("have.class", "options-button-selected");
  });

  it("Updates Sortable Tree", function() {
    cy.visit("http://localhost:3000/");

    cy.get(".custom-select").select("cip");

    cy.get("button.options-button")
      .contains("grads_asian")
      .click();
    cy.get("button.options-button")
      .contains("grads_black")
      .click();
    cy.get("button.options-button")
      .contains("grads_native")
      .click();
    cy.get("button.options-button")
      .contains("grads_unknown")
      .click();

    cy.get("button.order-columns-button").click();

    cy.get("div.rst__rowWrapper").contains("grads_asian");
    cy.get("div.rst__rowWrapper").contains("grads_black");
    cy.get("div.rst__rowWrapper").contains("grads_native");
    cy.get("div.rst__rowWrapper").contains("grads_unknown");

    cy.get("button.order-columns-button").click();

    cy.get("button.options-button")
      .contains("grads_black")
      .click();
    cy.get("button.options-button")
      .contains("grads_native")
      .click();
    cy.get("button.options-button")
      .contains("grads_unknown")
      .click();

    cy.get("button.order-columns-button").should("be.disabled");
  });

  it("Filters a column", function() {
    cy.visit("http://localhost:3000/");

    cy.get(".custom-select").select("cip");

    cy.get("button.options-button")
      .contains("grads_total")
      .click();

    cy.get("button.filter-columns-button").click();
    cy.get("button.remove-button").click();

    cy.get("button.filter-columns-button").click();
    cy.get("div.position-column-filters > label > select.custom-select").select(
      "grads_total"
    );

    cy.get("div.input-group-prepend")
      .contains("Greater Than:")
      .siblings()
      .type("10000")
      .should("have.value", "10000");
    cy.get("div.input-group-prepend")
      .contains("Less Than:")
      .siblings()
      .type("2000")
      .should("have.value", "2000");
    cy.get("div.input-group-prepend")
      .contains("Starts With:")
      .siblings()
      .type("abc")
      .should("have.value", "abc");
    cy.get("div.input-group-prepend")
      .contains("Ends With:")
      .siblings()
      .type("xyz")
      .should("have.value", "xyz");
    cy.get("div.input-group-prepend")
      .contains("Num Not:")
      .siblings()
      .type("6789")
      .should("have.value", "6789");
    cy.get("div.input-group-prepend")
      .contains("Text Not:")
      .siblings()
      .type("def")
      .should("have.value", "def");

    cy.get("button.remove-button").click();
    cy.get("button.filter-columns-button");
  });

  it("Querys a table", function() {
    cy.visit("http://localhost:3000/");

    cy.get(".custom-select").select("cip");

    cy.get("button.go-button").click();

    cy.get(".ReactVirtualized__Table");
  });

  it("Toggles the view between table and info", function() {
    cy.visit("http://localhost:3000/");

    cy.get(".custom-select").select("cip");
    cy.get("button.go-button").click();

    cy.get(".ReactVirtualized__Table");

    cy.get("button.toggle-views").click();
    cy.get("h3").contains("Select a Table");

    cy.get("button.toggle-views").click();
    cy.get(".ReactVirtualized__Table");
  });
});
