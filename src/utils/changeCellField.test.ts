import { changeCellField } from "./changeCellField";

describe("util function", () => {
  it("change cell of field", () => {
    const expectedField = [[false]];

    const newField = changeCellField([[true]], 0, 0, true);

    expect(newField).toEqual(expectedField);
  });
});
