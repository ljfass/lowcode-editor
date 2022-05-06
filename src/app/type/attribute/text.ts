import { TextSize } from "src/app/enum";

export type TextAttribute = {
  text: string;
  size: TextSize;
  mark: boolean;
  delete: boolean;
  underlined: boolean;
  strong: boolean;
};
