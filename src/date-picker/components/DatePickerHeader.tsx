import ArrowIcon from "../icons/ArrowIcon";
import { useDatePicker } from "../shared/store";
import { MONTHS } from "../shared/utils";

export type DatePickerHeaderProps = {
  dateView: Date;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickYear: () => void;
  onClickMonth: () => void;
};
const DatePickerHeader: React.FC<DatePickerHeaderProps> = ({
  dateView,
  onClickPrev,
  onClickNext,
  onClickMonth,
  onClickYear,
}) => {
  const { isOpenMonth, isOpenYear } = useDatePicker();

  return (
    <div className="flex items-center w-full text-slate-200 border-b p-2 border-b-slate-400">
      <button
        type="button"
        className={`border rounded-full p-1 hover:bg-slate-400 mr-auto border-slate-300 ${
          isOpenMonth || isOpenYear ? "opacity-0 -z-[9999]" : ""
        }`}
        onClick={onClickPrev}
      >
        <ArrowIcon className="text-xs text-slate-300" />
      </button>
      <div className="flex gap-1 font-semibold">
        <button
          type="button"
          className="px-1 hover:bg-slate-400 rounded-md"
          onClick={onClickMonth}
        >
          {MONTHS.find((month) => month.id === dateView.getMonth())?.label ||
            ""}
        </button>
        <button
          type="button"
          className="px-1 hover:bg-slate-400 rounded-md"
          onClick={onClickYear}
        >
          {dateView.getFullYear()}
        </button>
      </div>
      <button
        type="button"
        className={`border rounded-full p-1 hover:bg-slate-400 ml-auto border-slate-300 ${
          isOpenMonth || isOpenYear ? "opacity-0 -z-[9999]" : ""
        }`}
        onClick={onClickNext}
      >
        <ArrowIcon className="text-xs text-slate-300" rotate="rotate-180" />
      </button>
    </div>
  );
};

export default DatePickerHeader;
