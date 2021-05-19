import React from "react";
import "@testing-library/jest-dom";
import { Game } from "./Game";
import { render, screen, waitFor } from "./test-utils";
import { actions, initialState } from "./reducer";
import userEvent from "@testing-library/user-event";
import * as redux from "react-redux";

describe("check connected Game with redux", () => {
  jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn,
  }));
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

  it("should called action creator after user clicked clear button", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    render(<Game />, {
      initialState: { ...initialState, running: false },
    });

    userEvent.click(screen.getByText(/clear/i));

    expect(mockDispatchFn).toHaveBeenCalledWith({
      type: actions.clearField.type,
    });
  });

  it("should called action creator after user select other size", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    render(<Game />, {
      initialState: { ...initialState, running: false, size: "small" },
    });

    userEvent.selectOptions(screen.getByTestId(/size/i), "large");

    expect(mockDispatchFn).toHaveBeenCalledWith({
      type: actions.changeSize.type,
      payload: "large",
    });
  });

  it("should called action creator after user select other speed", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    render(<Game />, {
      initialState: { ...initialState, running: false, speed: 800 },
    });

    userEvent.selectOptions(screen.getByTestId(/speed/i), "fast");

    expect(mockDispatchFn).toHaveBeenCalledWith({
      type: actions.changeSpeed.type,
      payload: 200,
    });
  });

  it("should called action creator after user select other filled", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    render(<Game />, {
      initialState: { ...initialState, running: false, speed: 0 },
    });

    userEvent.selectOptions(screen.getByTestId(/filled/i), "50%");

    expect(mockDispatchFn).toHaveBeenCalledWith({
      type: actions.changeFilled.type,
      payload: 0.5,
    });
  });
});
