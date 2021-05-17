import React, { FC } from "react";
import { Game } from "@/module";
import { Provider } from "react-redux";
import { store } from "./store";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};
