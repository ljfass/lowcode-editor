import { WidgetData, IWidgetContent } from "../../type";

export abstract class BaseWidgetContent {
  widgetData!: WidgetData<any>;
  selected!: boolean;
}
