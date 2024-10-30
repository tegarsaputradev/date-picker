import { SetStateAction, useCallback, useEffect, useRef } from "react";
import { DatePickerType, SelectedRange } from "../shared/types";
import CalenderIcon from "../icons/CalenderIcon";
import RangeIcon from "../icons/RangeIcon.tsx";

export type DatePickerInputProps = {
  type?: DatePickerType;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  selectedDate: Date | null;
  selectedRange: SelectedRange;
  dropdownRef: React.RefObject<HTMLDivElement>;
};

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  type,
  isOpen,
  setIsOpen,
  selectedDate,
  selectedRange,
  dropdownRef,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [setIsOpen, dropdownRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`bg-slate-400 px-2 w-full h-7 flex items-center hover:cursor-pointer rounded-md text-sm text-slate-200 ${
        isOpen ? "border outline-slate-300" : "border-none"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {!type ||
        (type == "single" && (
          <div className="flex items-center justify-between min-w-[150px] w-full">
            {selectedDate && (
              <p>
                {selectedDate.toLocaleDateString("en-Us", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )}
            {!selectedDate && <p className="text-slate-300">Select date</p>}
            <CalenderIcon />
          </div>
        ))}

      {type == "range" && (
        <div className="flex items-center justify-between min-w-[250px] w-full">
          <div className="text-slate-300 flex items-center justify-between w-full pe-4">
            {selectedRange.start && (
              <p>
                {selectedRange.start.toLocaleDateString("en-Us", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )}
            {!selectedRange.start && <p>Select date</p>}
            <RangeIcon />
            {selectedRange.end && (
              <p>
                {selectedRange.end.toLocaleDateString("en-Us", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )}
            {!selectedRange.end && <p>Select date</p>}
          </div>
          <CalenderIcon />
        </div>
      )}
    </button>
  );
};

export default DatePickerInput;
