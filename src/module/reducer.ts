import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  field: boolean[][];
  size: "small" | "middle" | "large";
  speed: 200 | 500 | 800;
  filled: 0 | 0.1 | 0.25 | 0.5;
}

const initialState: GameState = {
  field: [[false]],
  size: "middle",
  filled: 0.25,
  speed: 500,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    runningGame: (state, { payload }) => {
      state.speed = payload;
    },
  },
});

export const { reducer, actions } = gameSlice;
