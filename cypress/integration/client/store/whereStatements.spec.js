/*eslint-disable*/

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import {
  newWhereColumn,
  newWhereStatement,
  updateColumn,
  clearWhereStatements
} from "../../../../client/src/store/currentlySet/whereStatements";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("where statements", function() {
  let store;
  let mockAxios;

  beforeEach(function() {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(function() {
    mockAxios.restore();
    store = undefined;
  });

  it("Selects a new column to filter", function() {
    store = mockStore(cy.fixture("store.json"));
    const column = "grads_total";

    store.dispatch(newWhereColumn(column));
    const actions = store.getActions();

    expect(actions[0].type).to.be.equal("NEW_WHERE_COLUMN");
    expect(actions[0].column).to.equal(column);
  });

  it("Selects and removes a column", function() {
    store = mockStore(cy.fixture("store.json"));
    const column = "grads_rank";

    store.dispatch(newWhereColumn(column));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("NEW_WHERE_COLUMN");
    expect(actions1[0].column).to.equal(column);

    store.dispatch(newWhereColumn(column));
    const actions2 = store.getActions();

    expect(actions2[0].type).to.be.equal("NEW_WHERE_COLUMN");
  });

  it("Selects and updates a column", function() {
    store = mockStore(cy.fixture("store.json"));
    const column1 = "grads_men";
    const column2 = "grads_women";

    store.dispatch(newWhereColumn(column1));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("NEW_WHERE_COLUMN");
    expect(actions1[0].column).to.equal(column1);

    store.dispatch(newWhereColumn(column2));
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("NEW_WHERE_COLUMN");
    expect(actions2[1].column).to.deep.equal(column2);
  });
});
