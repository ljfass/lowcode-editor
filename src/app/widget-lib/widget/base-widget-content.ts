import { WidgetData } from '../../type/widget-data.type';
import { IWidgetContent } from '../../type/widget-content.interface';
import {
  ButtonSize,
  ButtonType,
} from 'src/app/enum/widget-button/attribute.enum';

export abstract class BaseWidgetContent {
  widgetData!: WidgetData<any>;
  selected!: boolean;
}
