type Size = {
  countRows: number;
  countColumns: number;
};

export const sizes: { [unit: string]: Size } = {
  small: {
    countRows: 10,
    countColumns: 20,
  },
  middle: {
    countRows: 15,
    countColumns: 30,
  },
  big: {
    countRows: 20,
    countColumns: 40,
  },
};
