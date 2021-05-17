import { actions, reducer, initialState } from "./reducer";

describe("Game actions", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.3);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should create an action to click field", () => {
    const payload = {
      x: 1,
      y: 0,
      isFilled: false,
    };
    const expectedAction = {
      type: actions.clickField.type,
      payload,
    };

    expect(actions.clickField(payload)).toEqual(expectedAction);
  });

  it("should create an action to running game", () => {
    const expectedAction = {
      type: actions.runningGame.type,
      payload: false,
    };
    expect(actions.runningGame(false)).toEqual(expectedAction);
  });

  it("should change running of game", () => {
    expect(
      reducer(initialState, { type: actions.runningGame.type, payload: false })
    ).toEqual({
      ...initialState,
      running: false,
    });
  });

  it("should return initial state after click cell", () => {
    expect(
      reducer(initialState, { type: actions.clickField.type, payload: false })
    ).toEqual(initialState);
  });

  it("should create an action to change field", () => {
    const expectedAction = {
      type: actions.changeField.type,
      payload: [[true]],
    };
    expect(actions.changeField([[true]])).toEqual(expectedAction);
  });
  it("should change field", () => {
    expect(
      reducer(initialState, {
        type: actions.changeField.type,
        payload: [[true]],
      })
    ).toEqual({ ...initialState, field: [[true]] });
  });
});
