import { create } from "zustand";

type DatePickerStore = {
  isOpenMonth: boolean;
  isOpenYear: boolean;
};

const datePickerStore = create<DatePickerStore>(() => ({
  isOpenMonth: false,
  isOpenYear: false,
}));

export const useDatePicker = () => {
  const isOpenMonth = datePickerStore((e) => e.isOpenMonth);
  const setIsOpenMonth = (value: boolean) => {
    datePickerStore.setState({ isOpenMonth: value });
  };

  const isOpenYear = datePickerStore((e) => e.isOpenYear);
  const setIsOpenYear = (value: boolean) => {
    datePickerStore.setState({ isOpenYear: value });
  };

  return {
    isOpenMonth,
    setIsOpenMonth,

    isOpenYear,
    setIsOpenYear,
  };
};
