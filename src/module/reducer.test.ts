import {
  actions,
  reducer,
  initialState,
  SelectorSize,
  SelectorField,
  SelectorRunning,
  SelectorSpeed,
} from "./reducer";

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
    };
    expect(actions.runningGame()).toEqual(expectedAction);
  });

  it("should change running of game", () => {
    expect(reducer(initialState, { type: actions.runningGame.type })).toEqual({
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

  it("should create an action to change size", () => {
    const expectedAction = {
      type: actions.changeSize.type,
      payload: "large",
    };
    expect(actions.changeSize("large")).toEqual(expectedAction);
  });

  it("should change size field to store", () => {
    expect(
      reducer(initialState, { type: actions.changeSize.type, payload: "small" })
    ).toEqual({ ...initialState, size: "small" });
  });

  it("should create an action to change filled", () => {
    const expectedAction = {
      type: actions.changeFilled.type,
      payload: 0.1,
    };
    expect(actions.changeFilled(0.1)).toEqual(expectedAction);
  });

  it("should change filled of field to store", () => {
    expect(
      reducer(initialState, { type: actions.changeFilled.type, payload: 0.1 })
    ).toEqual({ ...initialState, filled: 0.1 });
  });

  it("should create an action to change speed", () => {
    const expectedAction = {
      type: actions.changeSpeed.type,
      payload: "fast",
    };
    expect(actions.changeSpeed("fast")).toEqual(expectedAction);
  });

  it("should change speed of changing field to store", () => {
    expect(
      reducer(initialState, { type: actions.changeSpeed.type, payload: "fast" })
    ).toEqual({ ...initialState, speed: "fast" });
  });

  it("should create an action to clear field", () => {
    const expectedAction = {
      type: actions.clearField.type,
    };
    expect(actions.clearField()).toEqual(expectedAction);
  });

  it("should clear field to store", () => {
    expect(reducer(initialState, { type: actions.clearField.type })).toEqual({
      ...initialState,
      filled: 0,
    });
  });
});

describe("Selectors tests", () => {
  it("check selector size", () => {
    expect(SelectorSize(initialState)).toBe("middle");
  });

  it("check selector running", () => {
    expect(SelectorRunning(initialState)).toBe(true);
  });

  it("check selector running", () => {
    expect(SelectorSpeed(initialState)).toBe(500);
  });

  it("check selector running", () => {
    expect(SelectorField({ ...initialState, field: [[true]] })).toEqual([
      [true],
    ]);
  });
});
