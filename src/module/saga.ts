import { takeEvery, put, select } from "redux-saga/effects";
import { actions, PayloadField } from "./reducer";
import { RootState } from "@/store";
import { changeCellField } from "@utils";

export const SelectorField = (state: RootState): boolean[][] => state.field;

export function* clickField({
  payload: { x, y, isFilled },
}: PayloadField): Generator {
  const field = (yield select(SelectorField)) as boolean[][];
  const result = changeCellField(field, x, y, isFilled);
  yield put({ type: actions.changeField.type, payload: result });
}

export function* gameSaga(): Generator {
  yield takeEvery(actions.clickField.type, clickField);
}
