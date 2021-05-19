import produce from "immer";
import { sizes } from "@utils";

export const stepGame = (field: boolean[][], size: string): boolean[][] => {
  const operations: number[][] = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];

  const numRows = sizes[size].countRows;
  const numCols = sizes[size].countColumns;
  return produce(field, (gridCopy: boolean[][]) => {
    for (let i = 0; i < numRows; i++) {
      for (let k = 0; k < numCols; k++) {
        const neighbours = operations.reduce((accum, [x, y]) => {
          const newI = i + x;
          const newK = k + y;
          if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
            const increment = field[newI][newK] ? 1 : 0;
            accum += increment;
          }
          return accum;
        }, 0);

        if (neighbours < 2 || neighbours > 3) {
          gridCopy[i][k] = false;
        } else if (field[i][k] === false && neighbours === 3) {
          gridCopy[i][k] = true;
        }
      }
    }
  });
};
