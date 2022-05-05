import { TextSize } from 'src/app/enum/widget-text/attribute.enum';

export type TextAttribute = {
  text: string;
  size: TextSize;
  mark: boolean;
  delete: boolean;
  underlined: boolean;
  strong: boolean;
};
