import produce from "immer";

export const changeCellField = (
  field: boolean[][],
  x: number,
  y: number,
  isFilled: boolean
): boolean[][] => {
  return produce(field, (draft) => {
    draft[y][x] = !isFilled;
  });
};
