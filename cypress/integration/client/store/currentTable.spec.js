import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import { setCurrentTable } from "../../../../client/src/store/currentlySet/currentTable";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("current table", function() {
  let store;
  let mockAxios;

  beforeEach(function() {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(function() {
    mockAxios.restore();
    store = undefined;
  });

  it("Sets a currentTable in state", function() {
    store = mockStore(cy.fixture("store.json"));
    const table = "cip";

    store.dispatch(setCurrentTable(table));
    const actions = store.getActions();

    expect(actions[0].type).to.be.equal("SET_CURRENT_TABLE");
    expect(actions[0].currentTable).to.equal(table);
  });

  it("Sets currentTable and then another in state", function() {
    store = mockStore(cy.fixture("store.json"));
    const table1 = "cip";
    const table2 = "conflict";

    store.dispatch(setCurrentTable(table1));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("SET_CURRENT_TABLE");
    expect(actions1[0].currentTable).to.equal(table1);

    store.dispatch(setCurrentTable(table2));
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("SET_CURRENT_TABLE");
    expect(actions2[1].currentTable).to.equal(table2);
  });

  it("Sets currentTable and then none in state", function() {
    store = mockStore(cy.fixture("store.json"));
    const table1 = "cip";

    store.dispatch(setCurrentTable(table1));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("SET_CURRENT_TABLE");
    expect(actions1[0].currentTable).to.equal(table1);

    store.dispatch(setCurrentTable(""));
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("SET_CURRENT_TABLE");
    expect(actions2[1].currentTable).to.equal("");
  });
});
