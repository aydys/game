import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ControlForm } from "./ControlForm";
import "@testing-library/jest-dom";

describe("Control form", () => {
  const props = {
    handleSize: () => {},
    handleSpeed: () => {},
    handleFilled: () => {},
    handleRunning: () => {},
    handleClear: () => {},
    running: true
  };

  test("render test", () => {
    render(<ControlForm {...props} />);
    const sizeLabel = screen.queryByText(/size/i);
    const speedLabel = screen.queryByText(/speed/i);
    const filledLabel = screen.queryByText(/filled/i);
    expect(sizeLabel).toBeInTheDocument();
    expect(speedLabel).toBeInTheDocument();
    expect(filledLabel).toBeInTheDocument();
  });

  test("should call running/stop handler", () => {
    const handleRunning = jest.fn();
    render(<ControlForm {...props} handleRunning={handleRunning} />);
    fireEvent.click(screen.getByText(/stop/i));
    expect(handleRunning).toBeCalled();
  });

  test("should call clear handler", () => {
    const handleClear = jest.fn();
    render(<ControlForm {...props} handleClear={handleClear} />);
    fireEvent.click(screen.getByText(/clear/i));
    expect(handleClear).toBeCalled();
  });

  test("should call size handler", () => {
    const handleSize = jest.fn();
    render(<ControlForm {...props} handleSize={handleSize} />);
    userEvent.selectOptions(screen.getByTestId("size"), "large");
    expect(handleSize).toBeCalled();
  });

  test("should call speed handler", () => {
    const handleSpeed = jest.fn();
    render(<ControlForm {...props} handleSpeed={handleSpeed} />);
    userEvent.selectOptions(screen.getByTestId("speed"), "fast");
    expect(handleSpeed).toBeCalled();
  });

  test("should call filled handler", () => {
    const handleFilled = jest.fn();
    render(<ControlForm {...props} handleFilled={handleFilled} />);
    userEvent.selectOptions(screen.getByTestId("filled"), "25%");
    expect(handleFilled).toBeCalled();
  });
});
