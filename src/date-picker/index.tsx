"use client";
import { useRef, useState } from "react";
import { DatePickerProps, SelectedRange } from "./shared/types";
import DatePickerInput from "./components/DatePickerInput";
import DatePickerHeader from "./components/DatePickerHeader";
import DatePickerBody from "./components/DatePickerBody";
import DatePickerFooter from "./components/DatePickerFooter";
import { useDatePicker } from "./shared/store";

const DatePicker: React.FC<DatePickerProps> = ({ type }) => {
  const { isOpenMonth, isOpenYear, setIsOpenMonth, setIsOpenYear } =
    useDatePicker();

  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [selectedRange, setSelectedRange] = useState<SelectedRange>({
    start: null,
    end: null,
  });

  function handleOnClickDate() {}
  function handleOnClickPrev() {
    setViewDate((prevDate) => {
      const newDateString = new Date(prevDate);
      newDateString.setMonth(newDateString.getMonth(), 0);
      return newDateString;
    });
  }
  function handlOnClickNext() {
    setViewDate((prevDate) => {
      const newDateString = new Date(prevDate);
      newDateString.setMonth(newDateString.getMonth() + 2, 0);
      return newDateString;
    });
  }

  function handleOnClickMenuMonth() {
    setIsOpenMonth(!isOpenMonth);
    setIsOpenYear(false);
  }
  function handleOnClickMenuYear() {
    setIsOpenYear(!isOpenYear);
    setIsOpenMonth(false);
  }

  return (
    <div className="relative">
      <DatePickerInput
        isOpen={isOpen}
        selectedDate={selectedDate}
        selectedRange={selectedRange}
        setIsOpen={setIsOpen}
        type={type}
        dropdownRef={dropDownRef}
      />
      <div
        ref={dropDownRef}
        className={`absolute flex flex-col shadow-md bg-slate-500 mt-1 rounded-md w-64 left-1/2 -translate-x-1/2 ${
          isOpen
            ? "max-h-96 translate-y-0 opacity-100 duration-300 scale-100"
            : "max-h-0 overflow-hidden -translate-y-6 opacity-0 scale-75 duration-100"
        }`}
      >
        <DatePickerHeader
          dateView={viewDate}
          onClickMonth={handleOnClickMenuMonth}
          onClickYear={handleOnClickMenuYear}
          onClickNext={handlOnClickNext}
          onClickPrev={handleOnClickPrev}
        />
        <DatePickerBody
          setViewDate={setViewDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          type={type}
          onClickDate={handleOnClickDate}
          viewDate={viewDate}
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
        />
        <DatePickerFooter
          setIsOpen={setIsOpen}
          setSelectedDate={setSelectedDate}
          setSelectedRange={setSelectedRange}
          type={type ?? "single"}
          setViewDate={setViewDate}
        />
      </div>
    </div>
  );
};

export default DatePicker;
