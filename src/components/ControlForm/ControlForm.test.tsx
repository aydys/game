import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { ControlForm } from "./ControlForm";
import "@testing-library/jest-dom";

describe("Control form", () => {
  const props = {
    handleSize: () => {},
    handleSpeed: () => {},
    handleFilled: () => {},
    handleRunning: () => {},
    handleClear: () => {},
    running: true,
    size: 'small',
    speed: 200,
    filled: 0.25
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

  test("should call clear handler");

  test("should call size handler");

  test("should call speed handler");

  test("should call filled handler");
});
