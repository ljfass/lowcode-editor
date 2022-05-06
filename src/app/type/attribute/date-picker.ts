import { DatePickerSize } from "src/app/enum";

export type DatePickerAttribute = {
  placeholder: string;
  default: Date | number;
  format: string;
  disabled?: boolean;
  allowClear?: boolean;
  autoFocus?: boolean;
  size: DatePickerSize;
};
