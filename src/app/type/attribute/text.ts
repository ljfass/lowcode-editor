import { NzSizeLDSType } from "ng-zorro-antd/core/types/size";
import { TextSize } from "src/app/enum";

export type TextAttribute = {
  text: string;
  size: NzSizeLDSType;
  disabled: boolean;
  rows?: number;
  placeholder?: string;
  mark?: boolean;
  delete?: boolean;
  underlined?: boolean;
  strong?: boolean;
};
