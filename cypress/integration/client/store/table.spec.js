/*eslint-disable*/

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import {
  setTable,
  fetchTable,
  fetchNewRows
} from "../../../../client/src/store/table";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("table", function() {
  let store;
  let mockAxios;

  beforeEach(function() {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(function() {
    mockAxios.restore();
    store = undefined;
  });

  it("Sets a table and clears it", function() {
    store = mockStore(cy.fixture("store.json"));
    const table = {
      content: "This table is not empty"
    };

    store.dispatch(setTable(table));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("TABLE");
    expect(actions1[0].table).to.deep.equal(table);

    store.dispatch(setTable({}));
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("TABLE");
    expect(actions2[1].table).to.deep.equal({});
  });

  // it("Fetches a table from datausa", function() {
  //   store = mockStore(cy.fixture("store.json"));
  //   const table = "cip";
  //   const tableFilters = { limit: "1000", sumlevel: "" };
  //   const res = cy.fixture("tableResponse.json");

  //   cy.server({ response: res });

  //   cy.route("/api/datausa/cip/:/$limit=1000/:").as("response");

  //   return store.dispatch(fetchTable(table, [], tableFilters, [])).then(() => {
  //     cy.wait("response");
  //     cy.wait(10000);

  //     const actions = store.getActions();

  //     expect(actions[0].type).to.be.equal("TABLE");
  //     expect(actions[0].table.data.length).to.equal(1000);
  //   });
  // });

  // it("Fetches a table from datausa, then another that is unavailable", function() {
  //   store = mockStore(cy.fixture("store.json"));
  //   const table1 = "cip";
  //   const table2 = "conflict";
  //   const tableFilters = { limit: "1000", sumlevel: "" };
  //   const error = { error: "This dataset is unavailable at this time." };

  //   store.dispatch(fetchTable(table1, [], tableFilters, [])).then(() => {
  //     const actions = store.getActions();

  //     expect(actions[0].type).to.be.equal("TABLE");
  //     expect(actions[0].table.data.length).to.equal(1000);
  //   });

  //   store.dispatch(fetchTable(table2, [], tableFilters, [])).then(() => {
  //     const actions = store.getActions();

  //     expect(actions[1].type).to.be.equal("TABLE");
  //     expect(actions[1].table).to.deep.equal(error);
  //   });
  // });

  // it("Fetches a table from datausa then fetches the table with updated search parameters", function() {
  //   store = mockStore(cy.fixture("store.json"));
  //   const table = "cip";
  //   const tableFilters1 = { limit: "100", sumlevel: "" };
  //   const tableFilters2 = { limit: "1000", sumlevel: "" };

  //   store.dispatch(fetchTable(table, [], tableFilters1, [])).then(() => {
  //     const actions = store.getActions();

  //     expect(actions[0].type).to.be.equal("TABLE");
  //     expect(actions[0].table.data.length).to.equal(100);
  //   });

  //   store.dispatch(fetchTable(table, [], tableFilters2, [])).then(() => {
  //     const actions = store.getActions();

  //     expect(actions[1].type).to.be.equal("TABLE");
  //     expect(actions[1].table.data.length).to.equal(1000);
  //   });
  // });

  // it("Fetches a table from datausa, and updates the rowcount", function() {
  //   store = mockStore(cy.fixture("store.json"));
  //   const table = "cip";
  //   const tableFilters = { limit: "1000", sumlevel: "" };

  //   store.dispatch(fetchTable(table, [], tableFilters, [])).then(() => {
  //     const actions = store.getActions();

  //     expect(actions.length).to.be.equal(3);
  //     expect(actions[0].type).to.be.equal("IS_LOADING");
  //     expect(actions[1].type).to.be.equal("TABLE");
  //     expect(actions[2].type).to.be.equal("IS_LOADING");

  //     expect(actions[0].bool).to.deep.equal(true);
  //     expect(actions[1].table.data.length).to.equal(1000);
  //     expect(actions[2].bool).to.deep.equal(false);
  //   });

  //   store.dispatch(fetchNewRows("", {})).then(() => {
  //     const actions = store.getActions();

  //     expect(actions.length).to.be.equal(6);
  //     expect(actions[3].type).to.be.equal("IS_LOADING");
  //     expect(actions[4].type).to.be.equal("ADD_NEW_ROWS");
  //     expect(actions[5].type).to.be.equal("IS_LOADING");

  //     expect(actions[3].bool).to.deep.equal(true);
  //     expect(actions[4].table.data.length).to.equal(1015);
  //     expect(actions[5].bool).to.deep.equal(false);
  //   });
  // });
});
