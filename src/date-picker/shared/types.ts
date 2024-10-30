export type DatePickerValue = {
  selectedDate?: Date;
  startDate?: Date;
  endDate?: Date;
};

export type DatePickerType = "single" | "range";

export type DatePickerProps = {
  type?: DatePickerType;
};

export type SelectedRange = {
  start: Date | null;
  end: Date | null;
};

export type DropDownItem = {
  id: number;
  label: string;
};
