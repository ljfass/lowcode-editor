import { NzButtonShape } from 'ng-zorro-antd/button';
import {
  ButtonIconSize,
  ButtonSize,
  ButtonType,
} from 'src/app/enum/widget-button/attribute.enum';

export type ButtonAttribute = {
  buttonText: string;
  icon?: string;
  type: ButtonType;
  size: ButtonSize;
  shape: NzButtonShape;
  loading: boolean;
  danger: boolean;
  ghost: boolean;
  disabled: boolean;
  iconSize?: ButtonIconSize;
};
