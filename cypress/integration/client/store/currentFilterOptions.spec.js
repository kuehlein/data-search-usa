import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import {
  setCurrentFilterOptions,
  clearCurrentFilterOptions
} from "../../../../client/src/store/currentlySet/currentFilterOptions";

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

  it("Sets filter options in state", function() {
    store = mockStore(cy.fixture("store.json"));
    const filter = "limit";
    const value = "1000";

    store.dispatch(setCurrentFilterOptions(filter, value));
    const actions = store.getActions();

    expect(actions[0].type).to.be.equal("CURRENT_FILTER_OPTIONS");
    expect(actions[0].filter).to.equal(filter);
    expect(actions[0].value).to.equal(value);
  });

  it("Sets filter options in both fields", function() {
    store = mockStore(cy.fixture("store.json"));
    const filter1 = "limit";
    const value1 = "1000";
    const filter2 = "sumlevel";
    const value2 = "2 (cip)";

    store.dispatch(setCurrentFilterOptions(filter1, value1));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("CURRENT_FILTER_OPTIONS");
    expect(actions1[0].filter).to.equal(filter1);
    expect(actions1[0].value).to.equal(value1);

    store.dispatch(setCurrentFilterOptions(filter2, value2));
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("CURRENT_FILTER_OPTIONS");
    expect(actions2[1].filter).to.equal(filter2);
    expect(actions2[1].value).to.equal(value2);
  });

  it("Sets filter options and updates it in state", function() {
    store = mockStore(cy.fixture("store.json"));
    const filter1 = "limit";
    const value1 = "100";
    const filter2 = "limit";
    const value2 = "1000";

    store.dispatch(setCurrentFilterOptions(filter1, value1));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("CURRENT_FILTER_OPTIONS");
    expect(actions1[0].filter).to.equal(filter1);
    expect(actions1[0].value).to.equal(value1);

    store.dispatch(setCurrentFilterOptions(filter2, value2));
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("CURRENT_FILTER_OPTIONS");
    expect(actions2[1].filter).to.equal(filter2);
    expect(actions2[1].value).to.equal(value2);
  });

  it("Sets filter options and then clears it", function() {
    store = mockStore(cy.fixture("store.json"));
    const filter = "limit";
    const value = "1000";

    store.dispatch(setCurrentFilterOptions(filter, value));
    const actions1 = store.getActions();

    expect(actions1[0].type).to.be.equal("CURRENT_FILTER_OPTIONS");
    expect(actions1[0].filter).to.equal(filter);
    expect(actions1[0].value).to.equal(value);

    store.dispatch(clearCurrentFilterOptions());
    const actions2 = store.getActions();

    expect(actions2[1].type).to.be.equal("CLEAR_FILTER_OPTIONS");
  });
});
