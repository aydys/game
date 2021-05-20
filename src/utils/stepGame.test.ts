import { stepGame } from "./stepGame";

describe("step game", () => {
  it("Any live cell with fewer than two live neighbours dies, as if by underpopulation", () => {
    const inputField = [
      [false, true, false],
      [false, false, false],
    ];

    const expectedField = [
      [false, false, false],
      [false, false, false],
    ];
    expect(stepGame(inputField, "testSize")).toEqual(expectedField);
  });

  it("Any live cell with two or three live neighbours lives on to the next generation", () => {
    const inputField = [
      [true, false, true],
      [false, true, false],
    ];

    const expectedField = [
      [false, true, false],
      [false, true, false],
    ];
    expect(stepGame(inputField, "testSize")).toEqual(expectedField);
  });

  it("Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction", () => {
    const inputField = [
      [true, true, false],
      [false, true, false],
    ];

    const expectedField = [
      [true, true, false],
      [true, true, false],
    ];
    expect(stepGame(inputField, "testSize")).toEqual(expectedField);
  });
});
