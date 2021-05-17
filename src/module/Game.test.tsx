import React from "react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { store } from "@/store";
import { Game } from "./Game";

describe("Game", () => {
  it("render test", () => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );

    expect(screen.queryByText(/game of life/i)).toBeInTheDocument();
  });
});
