import { takeEvery, put, select, call, delay, fork } from "redux-saga/effects";
import { actions, PayloadField } from "./reducer";
import { RootState } from "@/store";
import {
  changeCellField,
  sizes,
  generateField,
  shuffledField,
  stepGame,
} from "@utils";

export const SelectorField = (state: RootState): boolean[][] => state.field;
export const SelectorSize = (state: RootState): string => state.size;
export const SelectorSpeed = (state: RootState): number => state.speed;
export const SelectorRunning = (state: RootState): boolean => state.running;

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

export function* runGame(): Generator {
  while (true) {
    const running = yield select(SelectorRunning);
    if (running === true) {
      const sizeField = (yield select(SelectorSize)) as string;
      const field = (yield select(SelectorField)) as boolean[][];
      const result = stepGame(field, sizeField);

      yield put({ type: actions.changeField.type, payload: result });
      const speed = (yield select(SelectorSpeed)) as number;
      yield delay(speed);
    } else {
      break;
    }
  }
}

export function* gameSaga(): Generator {
  yield takeEvery(actions.clickField.type, clickField);
  yield takeEvery(actions.changeSize.type, changeSizeField);
  yield takeEvery(actions.changeFilled.type, changeFilledField);
  yield takeEvery(actions.clearField.type, clearField);
  yield takeEvery(actions.runningGame.type, runGame);
  yield fork(runGame);
}
