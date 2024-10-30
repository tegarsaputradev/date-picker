import { Dispatch, SetStateAction } from "react";
import { DatePickerType, SelectedRange } from "../shared/types";
import MonthDropdown from "./MonthDropdown";
import YearDropdown from "./YearDropdown";
import {
  betweenDates,
  createArrayOfDate,
  equalDates,
  WEEKDAYS,
} from "../shared/utils";
import { useDatePicker } from "../shared/store";

export type DatePickerBodyProps = {
  type?: DatePickerType;
  viewDate: Date;
  selectedDate: Date | null;
  selectedRange: SelectedRange;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  setSelectedRange: Dispatch<SetStateAction<SelectedRange>>;
  setViewDate: Dispatch<SetStateAction<Date>>;
  onClickDate: (date: Date) => void;
};
const DatePickerBody: React.FC<DatePickerBodyProps> = ({
  type,
  selectedDate,
  selectedRange,
  viewDate,
  setViewDate,
  setSelectedDate,
  setSelectedRange,
}) => {
  const { isOpenMonth, isOpenYear } = useDatePicker();

  function handleOnClickDate(dateSelected: Date) {
    if (type === "range") {
      if (!selectedRange.start) {
        setSelectedRange(() => {
          return {
            start: dateSelected,
            end: null,
          };
        });
        return;
      }

      if (
        selectedRange.start &&
        !selectedRange.end &&
        !equalDates(dateSelected, selectedRange.start)
      ) {
        if (dateSelected.getTime() < selectedRange.start.getTime()) {
          setSelectedRange((prevRangeSelected) => {
            return { start: dateSelected, end: prevRangeSelected.start };
          });
        } else {
          setSelectedRange((prevRangeSelected) => {
            return { start: prevRangeSelected.start, end: dateSelected };
          });
        }
      }

      if (selectedRange.start && selectedRange.end) {
        setSelectedRange(() => {
          return { start: dateSelected, end: null };
        });
      }
    } else {
      setSelectedDate(dateSelected);
    }
  }

  return (
    <div className="">
      {isOpenMonth && <MonthDropdown setDateString={setViewDate} />}
      {isOpenYear && (
        <div className="max-h-[210px] overflow-y-auto">
          <YearDropdown setDateString={setViewDate} />
        </div>
      )}
      {!isOpenMonth && !isOpenYear && (
        <div className="w-full">
          <div className="grid grid-cols-7 h-fit gap-y-1 mx-auto text-sm text-slate-300 px-3 py-2">
            {WEEKDAYS.map((weekDay, i) => (
              <p key={i} className="flex justify-center">
                {weekDay.label}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-7 h-fit gap-y-1 mx-auto text-sm text-slate-300 px-3 py-2 font-medium">
            {type === "single" &&
              createArrayOfDate(viewDate).map((weekDay, i) => (
                <button
                  type="button"
                  key={i}
                  className={`flex justify-center  ${
                    equalDates(new Date(), weekDay) &&
                    new Date().getMonth() == weekDay.getMonth()
                      ? "border border-dashed rounded-md"
                      : ""
                  } ${
                    selectedDate && equalDates(selectedDate, weekDay)
                      ? "bg-green-600 rounded-md"
                      : ""
                  } ${
                    viewDate.getMonth() != weekDay.getMonth()
                      ? "text-slate-400 font-normal"
                      : ""
                  }
                `}
                  onClick={() => handleOnClickDate(weekDay)}
                >
                  {weekDay.getDate()}
                </button>
              ))}
            {type === "range" &&
              createArrayOfDate(viewDate).map((date, i) => (
                <button
                  type="button"
                  key={i}
                  className={`relative flex justify-center  ${
                    equalDates(new Date(), date) &&
                    new Date().getMonth() == date.getMonth()
                      ? "border border-dashed rounded-md"
                      : ""
                  } ${
                    selectedRange.start && equalDates(selectedRange.start, date)
                      ? "bg-green-600 border-none rounded-l-md"
                      : ""
                  } ${
                    selectedRange.end && equalDates(selectedRange.end, date)
                      ? "bg-green-600 border-none rounded-r-md"
                      : ""
                  } ${
                    viewDate.getMonth() != date.getMonth()
                      ? "text-slate-400 font-normal"
                      : ""
                  }
                `}
                  onClick={() => handleOnClickDate(date)}
                >
                  {selectedRange.start &&
                    selectedRange.end &&
                    betweenDates(
                      selectedRange.start,
                      date,
                      selectedRange.end
                    ) && (
                      <p className="bg-green-500 w-full h-full absolute opacity-35"></p>
                    )}
                  {selectedRange.start &&
                    selectedRange.end &&
                    equalDates(selectedRange.end, date) &&
                    !equalDates(selectedRange.start, selectedRange.end) && (
                      <p className="bg-green-500 w-full h-full absolute opacity-35 rounded-full"></p>
                    )}
                  {date.getDate()}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerBody;
