import { NzSizeLDSType } from "ng-zorro-antd/core/types/size";
import { InputType } from "src/app/enum";

export type TextAttribute = {
  text: string;
  size: NzSizeLDSType;
  disabled: boolean;
  inputType: InputType;
  trim?: boolean;
  rows?: number;
  placeholder?: string;
  mark?: boolean;
  delete?: boolean;
  underlined?: boolean;
  strong?: boolean;
};
