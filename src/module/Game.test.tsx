import React from "react";
import "@testing-library/jest-dom";
import { Game } from "./Game";
import { render, screen } from "./test-utils";
import { initialState } from "./reducer";

describe("Game", () => {
  it("render test", () => {
    render(<Game />);

    expect(screen.queryByText(/game of life/i)).toBeInTheDocument();
    expect(screen.queryByText(/clear/i)).toBeInTheDocument();
  });

  it("check state when game running", () => {
    const { container } = render(<Game />, {
      initialState: { ...initialState, running: true },
    });

    expect(screen.getByText(/stop/i)).toBeInTheDocument();
    expect(screen.getByText(/clear/i)).toBeDisabled();
    expect(container.querySelector("[data-testid='cell-id']")).toBeDisabled();
    expect(screen.getByTestId("size")).toBeDisabled();
    expect(screen.getByTestId("speed")).toBeDisabled();
    expect(screen.getByTestId("filled")).toBeDisabled();
  });
});
