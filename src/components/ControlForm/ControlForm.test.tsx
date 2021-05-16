import React from "react";
import { screen, render } from "@testing-library/react";
import { ControlForm } from "./ControlForm";
import "@testing-library/jest-dom";

describe("Control form", () => {
  test("render test", () => {
    render(<ControlForm />);
    const sizeLabel = screen.queryByText(/size/i);
    const speedLabel = screen.queryByText(/speed/i);
    const filledLabel = screen.queryByText(/filled/i);
    expect(sizeLabel).toBeInTheDocument();
    expect(speedLabel).toBeInTheDocument();
    expect(filledLabel).toBeInTheDocument();
  });

  test("should call running/stop handler");

  test("should call clear handler");

  test("should call size handler");

  test("should call speed handler");

  test("should call filled handler");
});
