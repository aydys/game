import React from "react";
import "@testing-library/jest-dom";
import { Game } from "./Game";
import { render, screen } from "./test-utils";

describe("Game", () => {
  it("render test", () => {
    render( <Game />);

    expect(screen.queryByText(/game of life/i)).toBeInTheDocument();
  });
});
