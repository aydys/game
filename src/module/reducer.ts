import { createSlice } from "@reduxjs/toolkit";
import { generateInitField } from "@utils";

enum InitData {
  filled = 0.25,
  x = 30,
  y = 15,
}

interface GameState {
  field: boolean[][];
  size: "small" | "middle" | "large";
  speed: 200 | 500 | 800;
  filled: 0 | 0.1 | 0.25 | 0.5;
}

const initialState: GameState = {
  field: generateInitField(InitData.x, InitData.y, InitData.filled),
  size: "middle",
  filled: 0.25,
  speed: 500,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    clickField: (state, { payload }) => {
      state.field = payload;
    },
    runningGame: (state, { payload }) => {
      state.speed = payload;
    },
  },
});

export const { reducer, actions } = gameSlice;
