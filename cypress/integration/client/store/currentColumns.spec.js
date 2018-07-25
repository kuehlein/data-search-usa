import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import {
  setCurrentColumns,
  changeOrderCurrentColumns
} from "../../../../client/src/store/currentlySet/currentColumns";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("current columns", function() {
  let store;
  let mockAxios;

  beforeEach(function() {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(function() {
    mockAxios.restore();
    store = undefined;
  });

  it("Adds a column to state", function() {
    store = mockStore(cy.fixture("store.json"));
    const column = "year";

    store.dispatch(setCurrentColumns(column));
    const actions = store.getActions();

    expect(actions[0].type).to.be.equal("SET_CURRENT_COLUMNS");
    expect(actions[0].column).to.equal(column);
  });

  it("Sets a column and then another in state", function() {
    store = mockStore(cy.fixture("store.json"));
    const column1 = "grads_men";
    const column2 = "grads_women";

    store.dispatch(setCurrentColumns(column1));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("SET_CURRENT_COLUMNS");
    expect(actions1[0].column).to.equal(column1);

    store.dispatch(setCurrentColumns(column2));
    const actions2 = store.getActions();

    expect(actions2.length).to.be.equal(2);
    expect(actions2[1].type).to.be.equal("SET_CURRENT_COLUMNS");
    expect(actions2[1].column).to.equal(column2);
  });

  it("Sets currentTable and then removes it", function() {
    store = mockStore(cy.fixture("store.json"));
    const column1 = "grads_rank";

    store.dispatch(setCurrentColumns(column1));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("SET_CURRENT_COLUMNS");
    expect(actions1[0].column).to.equal(column1);

    store.dispatch(setCurrentColumns(column1));
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("SET_CURRENT_COLUMNS");
    expect(actions2[1].column).to.equal(column1);
  });

  it("Sets rearranges the order of columns", function() {
    store = mockStore(cy.fixture("store.json"));
    const column1 = "grads_multi";
    const column2 = "grads_hawaiian";

    store.dispatch(setCurrentColumns(column1));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("SET_CURRENT_COLUMNS");
    expect(actions1[0].column).to.equal(column1);

    store.dispatch(setCurrentColumns(column2));
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("SET_CURRENT_COLUMNS");
    expect(actions2[1].column).to.equal(column2);

    store.dispatch(changeOrderCurrentColumns([column2, column1]));
    const actions3 = store.getActions();

    expect(actions3[2].type).to.be.equal("CHANGE_ORDER_CURRENT_COLUMNS");
    expect(actions3[2].columns).to.deep.equal([column2, column1]);
  });
});
