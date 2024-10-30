import { Dispatch, FC, SetStateAction } from "react";
import { MONTHS } from "../shared/utils";
import { DropDownItem } from "../shared/types";
import { useDatePicker } from "../shared/store";

export type MonthDropdownProps = {
  setDateString: Dispatch<SetStateAction<Date>>;
};

const MonthDropdown: FC<MonthDropdownProps> = ({ setDateString }) => {
  const { setIsOpenMonth } = useDatePicker();
  function onClickMonth(item: DropDownItem) {
    setDateString((prevDateString) => {
      const newDateString = new Date(prevDateString);
      newDateString.setMonth(item.id);
      return newDateString;
    });
    setIsOpenMonth(false);
  }

  return (
    <div className="w-full h-full grid grid-cols-3 py-2">
      {MONTHS.map((month, i) => (
        <button
          type="button"
          key={i}
          className="flex items-center justify-center p-2 text-slate-200"
          onClick={() => onClickMonth(month)}
        >
          {month.label}
        </button>
      ))}
    </div>
  );
};

export default MonthDropdown;
