import { DropDownItem } from "./types";

export const MONTHS: DropDownItem[] = [
  { id: 0, label: "Jan" },
  { id: 1, label: "Feb" },
  { id: 2, label: "Mar" },
  { id: 3, label: "Apr" },
  { id: 4, label: "May" },
  { id: 5, label: "Jun" },
  { id: 6, label: "Jul" },
  { id: 7, label: "Aug" },
  { id: 8, label: "Sep" },
  { id: 9, label: "Oct" },
  { id: 10, label: "Nov" },
  { id: 11, label: "Dec" },
];

export const WEEKDAYS: DropDownItem[] = [
  { id: 0, label: "Sun" },
  { id: 1, label: "Mon" },
  { id: 2, label: "Tue" },
  { id: 3, label: "Wed" },
  { id: 4, label: "Thu" },
  { id: 5, label: "Fry" },
  { id: 6, label: "Sat" },
];

function createArrayOfYear(date: Date): DropDownItem[] {
  const year = date.getFullYear();
  const years: DropDownItem[] = [];
  for (let i = year + 6; i > year - 6; i--) {
    years.push({ id: i, label: i.toString() });
  }

  return years.reverse();
}

export const YEARS: DropDownItem[] = createArrayOfYear(new Date());

export function createArrayOfDate(date: Date): Date[] {
  const currentMonth = new Date(date);
  currentMonth.setMonth(currentMonth.getMonth() + 1, 0);
  const prevMonth = new Date(date);
  prevMonth.setMonth(prevMonth.getMonth(), 0);
  const nextMonth = new Date(date);
  nextMonth.setMonth(nextMonth.getMonth() + 2, 0);

  const numberOfDaysInCurrentMonth = currentMonth.getDate();
  const numberOfDaysInPreviousMonth = prevMonth.getDate();

  currentMonth.setDate(1);
  const weekDayNumber = currentMonth.getDay();

  const daysArray: Date[] = [];

  for (let i = weekDayNumber - 1; i >= 0; i--) {
    daysArray.push(
      new Date(
        prevMonth.getFullYear(),
        prevMonth.getMonth(),
        numberOfDaysInPreviousMonth - i,
        0,
        0,
        0,
        0
      )
    );
  }

  for (let i = 0; i < numberOfDaysInCurrentMonth; i++) {
    daysArray.push(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i + 1,
        0,
        0,
        0,
        0
      )
    );
  }

  const totalDaysInArray = 42;
  const daysLeftInArray = totalDaysInArray - daysArray.length;
  for (let i = 0; i < daysLeftInArray; i++) {
    daysArray.push(
      new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i + 1, 0, 0, 0, 0)
    );
  }

  return daysArray;
}

export function equalDates(firstDate: Date, secondDate: Date): boolean {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
}

export function betweenDates(start: Date, date: Date, end: Date): boolean {
  return start < date && date < end;
}
