import { DateTime } from 'luxon';

type DateInput = { day: string; month: string; year: string };

const toIndexable = (current: Date = new Date()) => {
  const date = DateTime.fromISO(current.toISOString()).setZone(
    'America/Mexico_City',
  );
  const { day, month, year } = date.toObject();
  const currentYear = DateTime.now().year;
  return {
    day: (day ?? 1) - 1,
    month: (month ?? 1) - 1,
    year: currentYear - (year ?? 1),
  };
};

const toDateTime = ({ day, month, year }: DateInput) => {
  const date = DateTime.fromObject({
    day: Number(day),
    month: Number(month),
    year: Number(year),
  });
  return date;
};

const fromDate = (current: Date) => {
  const date = DateTime.fromISO(current.toISOString());
  return date;
};

const toDate = (input: DateInput) => {
  const date = toDateTime(input);
  return date.toJSDate();
};

const isValid = (input: DateInput) => {
  const date = toDateTime(input);
  return date.isValid;
};

const format = (input: DateInput) => {
  const date = toDateTime(input);
  return date.toLocaleString(DateTime.DATETIME_SHORT);
};

export default { isValid, toDate, toIndexable, toDateTime, fromDate, format };
