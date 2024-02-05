const parserToStringDate = (num: number) => {
  if (num < 10) return `0${num}`;
  return `${num}`;
};

export const DAYS = Array.from({ length: 31 }).map((_, index) => ({
  value: parserToStringDate(index + 1),
  label: parserToStringDate(index + 1),
}));

export const MONTHS = Array.from({ length: 12 }).map((_, index) => ({
  value: parserToStringDate(index + 1),
  label: parserToStringDate(index + 1),
}));

export const getYears = () => {
  const BASE_YEAR = 1920;
  const currentYear = new Date().getFullYear();
  return Array.from({
    length: currentYear - BASE_YEAR,
  }).map((_, index) => ({
    value: `${currentYear - index}`,
    label: `${currentYear - index}`,
  }));
};
