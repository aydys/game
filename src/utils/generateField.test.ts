import { shuffle, shuffleLineGrid, shuffledField, generateInitField } from "./generateField";
describe("generateField", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.3);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  it("shuffle array", () => {
    const mock = [false, true, false];
    const shuffledArray = shuffle(mock);
    expect(shuffledArray).toEqual([true, false, false]);
  });

  it("shuffleLineGrid", () => {
    const matchMock = [false, false, true];
    const x = matchMock.length;
    const per = 0.35;

    const result = shuffleLineGrid(x, per);

    expect(result).toEqual(matchMock);
  });

  it("generateInitField", () => {
    const mock = [
      [false, false, true],
      [false, false, true],
    ];
    const result = generateInitField(3, 2, 0.35);

    expect(result).toEqual(mock);
  });

  it("shuffled field", () => {
    const mock = [
      [false, false, true],
      [false, false, true],
    ];
    const result = shuffledField(0.35, "testSize");

    expect(result).toEqual(mock);
  })
});
