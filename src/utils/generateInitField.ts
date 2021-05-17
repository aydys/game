export function shuffle(a: boolean[]): boolean[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const shuffleLineGrid = (x: number, per: number): boolean[] => {
  const countFilled = Math.floor(x * per);
  const restCell = x - countFilled;

  const firstPart = Array.from(Array(countFilled), () => true);
  const secondPart = Array.from(Array(restCell), () => false);
  const fullPart = firstPart.concat(secondPart);

  return shuffle(fullPart);
};

export const generateInitField = (
  x: number,
  y: number,
  filled: number
): boolean[][] => {
  const result = [];

  for (let i = 0; i < y; i += 1) {
    result.push(shuffleLineGrid(x, filled));
  }

  return result;
};
