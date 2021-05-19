import React from "react";
import "@testing-library/jest-dom";
import { Game } from "./Game";
import { render, screen, waitFor } from "./test-utils";
import { initialState } from "./reducer";
import userEvent from "@testing-library/user-event";
import { store } from "@/store";

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

  it("should enabled game after click stop button", async () => {
    render(<Game />, {
      initialState: { ...initialState, field: [[true]], running: true },
    });

    userEvent.click(screen.getByText(/stop/i));

    await waitFor(() => {
      expect(screen.getByText(/run/i)).toBeInTheDocument();
    });
  });

  it("should change size field after select other size", async () => {
    const mockSize = "small";
    render(<Game />, {
      initialState: { ...initialState, size: mockSize },
    });

    userEvent.selectOptions(screen.getByTestId(/size/i), "large");

    await waitFor(() => {
      expect(store.getState().size).toBe("large");
    });
  });

  it("should change filled of field after select other value", async () => {
    const mock = 0.25;
    render(<Game />, {
      initialState: { ...initialState, filled: mock },
    });

    userEvent.selectOptions(screen.getByTestId(/filled/i), "0.1");

    await waitFor(() => {
      expect(store.getState().filled).toBe(0.1);
    });
  });

  it("should change filled of field after select other value", async () => {
    const mock = 800;
    render(<Game />, {
      initialState: { ...initialState, speed: mock },
    });

    userEvent.selectOptions(screen.getByTestId(/speed/i), "fast");

    await waitFor(() => {
      expect(store.getState().speed).toBe(200);
    });
  });
});
