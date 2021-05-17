import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cell } from "./Cell";
import { Field } from "./Field";

describe("Field", () => {
  const propsCell = {
    x: 0,
    y: 0,
    isFilled: false,
    running: true,
  };

  test("should clickable Cell", () => {
    const clickCell = jest.fn();
    render(<Cell {...propsCell} clickCell={clickCell} />);
    userEvent.click(screen.getByTestId("cell-id"));
    expect(clickCell).toBeCalled();
  });

  it("passed onClick inside cells", () => {
    const clickCell = jest.fn();
    render(<Field field={[[true]]} clickCell={clickCell} running={true} />);
    userEvent.click(screen.getByTestId("cell-id"));
    expect(clickCell).toHaveBeenCalledWith(0, 0, true);
  });
});
