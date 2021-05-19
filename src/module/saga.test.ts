import { select } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { clickField, SelectorField, changeSizeField } from "./saga";
import { actions, initialState } from "./reducer";
import { changeCellField, generateField, sizes } from "@utils";

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
});
