import { select } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { clickField, SelectorField } from "./saga";
import { actions, initialState } from "./reducer";
import { changeCellField } from "@utils";

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
});
