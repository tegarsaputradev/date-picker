import { Dispatch, FC, SetStateAction } from "react";
import { YEARS } from "../shared/utils";
import { DropDownItem } from "../shared/types";
import { useDatePicker } from "../shared/store";

export type YearDropdownProps = {
  setDateString: Dispatch<SetStateAction<Date>>;
};

const YearDropdown: FC<YearDropdownProps> = ({ setDateString }) => {
  const { setIsOpenYear } = useDatePicker();

  function onClickYear(item: DropDownItem) {
    setDateString((prevDateString) => {
      const newDateString = new Date(prevDateString);
      newDateString.setFullYear(item.id);
      return newDateString;
    });
    setIsOpenYear(false);
  }
  return (
    <div className="w-full h-full grid grid-cols-3 py-2">
      {YEARS.map((year, i) => (
        <button
          type="button"
          key={i}
          className="flex items-center justify-center p-2 text-slate-200"
          onClick={() => onClickYear(year)}
        >
          {year.label}
        </button>
      ))}
    </div>
  );
};

export default YearDropdown;
