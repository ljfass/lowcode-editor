export const nzInputNumberFormatter =
  (sign: string) =>
  (value: number): string =>
    `${value} ${sign}`;
export const nzInputNumberParser = (sign: string) => (value: string) =>
  value.replace(` ${sign}`, '');
