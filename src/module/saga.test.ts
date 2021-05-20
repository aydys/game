import { select, call } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import {
  clickField,
  changeSizeField,
  changeFilledField,
  clearField,
  runGame,
} from "./saga";
import {
  actions,
  initialState,
  SelectorField,
  SelectorSize,
  SelectorRunning,
  SelectorSpeed,
} from "./reducer";
import {
  changeCellField,
  generateField,
  sizes,
  shuffledField,
  stepGame,
} from "@utils";

describe("saga test", () => {
  it("change field after click cell", () => {
    const mockPayload = {
      x: 0,
      y: 0,
      isFilled: true,
    };

    const prevField = initialState.field;
    const mockField = changeCellField(
      prevField,
      mockPayload.x,
      mockPayload.y,
      mockPayload.isFilled
    );

    return expectSaga(clickField, {
      type: actions.clickField.type,
      payload: mockPayload,
    })
      .provide([[select(SelectorField), prevField]])
      .put({ type: actions.changeField.type, payload: mockField })
      .run();
  });

  it("should change size field", () => {
    const size = "small";
    const mockField = generateField(sizes[size], initialState.field);
    return expectSaga(changeSizeField, {
      type: actions.changeSize.type,
      payload: size,
    })
      .provide([[select(SelectorField), mockField]])
      .put({
        type: actions.changeField.type,
        payload: mockField,
      })
      .run();
  });

  it("should change filled field", () => {
    const size = "small";
    const filled = 0.1;
    const mockField = shuffledField(filled, size);

    return expectSaga(changeFilledField, {
      type: actions.changeFilled.type,
      payload: filled,
    })
      .provide([
        [select(SelectorSize), size],
        [call(shuffledField, filled, size), mockField],
      ])
      .put({ type: actions.changeField.type, payload: mockField })
      .run();
  });

  it("should clear field", () => {
    const size = "small";
    const mockField = shuffledField(0, size);
    return expectSaga(clearField)
      .provide([[select(SelectorSize), size]])
      .put({ type: actions.changeField.type, payload: mockField })
      .run();
  });

  it("check running game", () => {
    const sizeField = "small";
    const field = initialState.field;
    const stepedField = stepGame(field, sizeField);
    const saga = testSaga(runGame);
    saga
      .next()
      .select(SelectorRunning)
      .next(true)
      .select(SelectorSize)
      .next(sizeField)
      .select(SelectorField)
      .next(field)
      .put({ type: actions.changeField.type, payload: stepedField })
      .next()
      .select(SelectorSpeed)
      .next(200)
      .delay(200)
      .finish();
  });

  it("should stop game", () => {
    const saga = testSaga(runGame);
    saga.next().select(SelectorRunning).next(false).isDone().finish();
  });
});
