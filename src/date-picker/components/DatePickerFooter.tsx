import React, { Dispatch, FC, SetStateAction } from "react";
import { DatePickerType, SelectedRange } from "../shared/types";

export type DatePickerFooterProps = {
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  setSelectedRange: Dispatch<SetStateAction<SelectedRange>>;
  setViewDate: Dispatch<SetStateAction<Date>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  type: DatePickerType;
};

const DatePickerFooter: FC<DatePickerFooterProps> = ({
  setIsOpen,
  setSelectedDate,
  setSelectedRange,
  setViewDate,
  type,
}) => {
  const today = new Date();

  function handleOnClickToday() {
    setSelectedDate(today);
    setViewDate(today);
  }

  function handleOnClickCancel() {
    if (type === "single") {
      setSelectedDate(null);
      setViewDate(today);
    }
    if (type === "range") {
      setSelectedRange({ start: null, end: null });
      setViewDate(today);
    }
  }

  function handleOnClickOk() {
    setIsOpen(false);
  }

  return (
    <div className="flex justify-between px-3 py-2 border-t border-t-slate-400">
      {type === "single" ? (
        <button
          type="button"
          className="text-slate-200 text-xs bg-slate-700 py-[2px] px-2 rounded-md"
          onClick={handleOnClickToday}
        >
          Today
        </button>
      ) : (
        <div></div>
      )}
      <div className="flex gap-2">
        <button
          type="button"
          className="text-slate-200 text-xs bg-slate-400 py-[2px] px-2 rounded-md"
          onClick={handleOnClickCancel}
        >
          Cancel
        </button>

        <button
          type="button"
          className="text-slate-200 text-xs bg-green-600 py-[2px] px-2 rounded-md"
          onClick={handleOnClickOk}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default DatePickerFooter;
