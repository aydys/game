import React from "react";
import "@testing-library/jest-dom";
import { Game } from "./Game";
import { render, screen, waitFor } from "./test-utils";
import { initialState } from "./reducer";
import userEvent from "@testing-library/user-event";

describe("check connected Game with redux", () => {
  it("render test", () => {
    render(<Game />, { initialState: { ...initialState, running: true } });

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

  it("should enabled game after click stop button", async () => {
    render(<Game />, {
      initialState: { ...initialState, running: true },
    });

    userEvent.click(screen.getByText(/stop/i));

    await waitFor(() => {
      expect(screen.getByText(/run/i)).toBeInTheDocument();
    });
  });
});
