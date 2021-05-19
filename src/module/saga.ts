import { takeEvery, put, select, call } from "redux-saga/effects";
import { actions, PayloadField } from "./reducer";
import { RootState } from "@/store";
import { changeCellField, sizes, generateField, shuffledField } from "@utils";

export const SelectorField = (state: RootState): boolean[][] => state.field;
export const SelectorSize = (state: RootState): string => state.size;

export function* changeSizeField({
  payload,
}: ReturnType<typeof actions.changeSize>): Generator {
  const prevField = (yield select(SelectorField)) as boolean[][];
  const newField = generateField(sizes[payload], prevField);
  yield put({ type: actions.changeField.type, payload: newField });
}

export function* clickField({
  payload: { x, y, isFilled },
}: PayloadField): Generator {
  const field = (yield select(SelectorField)) as boolean[][];
  const result = changeCellField(field, x, y, isFilled);
  yield put({ type: actions.changeField.type, payload: result });
}

export function* changeFilledField({
  payload,
}: ReturnType<typeof actions.changeFilled>): Generator {
  const sizeField = (yield select(SelectorSize)) as string;
  const newField = yield call(shuffledField, payload, sizeField);
  yield put({ type: actions.changeField.type, payload: newField });
}

export function* clearField(): Generator {
  const sizeField = (yield select(SelectorSize)) as string;
  const newField = shuffledField(0, sizeField);
  yield put({ type: actions.changeField.type, payload: newField });
}

export function* gameSaga(): Generator {
  yield takeEvery(actions.clickField.type, clickField);
  yield takeEvery(actions.changeSize.type, changeSizeField);
  yield takeEvery(actions.changeFilled.type, changeFilledField);
  yield takeEvery(actions.clearField.type, clearField);
}
