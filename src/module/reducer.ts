import { Action } from "redux";
import { createSlice } from "@reduxjs/toolkit";
import { generateInitField } from "@utils";

enum InitData {
  filled = 0.25,
  x = 30,
  y = 15,
}

export interface PayloadField extends Action {
  payload: {
    x: number;
    y: number;
    isFilled: boolean;
  };
}

interface GameState {
  field: boolean[][];
  size: "small" | "middle" | "large";
  speed: 200 | 500 | 800;
  filled: 0 | 0.1 | 0.25 | 0.5;
  running: boolean
}

export const initialState: GameState = {
  field: generateInitField(InitData.x, InitData.y, InitData.filled),
  size: "middle",
  filled: 0.25,
  speed: 500,
  running: false
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeField: (state, { payload }) => {
      state.field = payload;
    },
    clickField: (state, _payload: PayloadField) => state,
    runningGame: (state, { payload }) => {
      state.running = payload;
    },
  },
});

export const { reducer, actions } = gameSlice;
