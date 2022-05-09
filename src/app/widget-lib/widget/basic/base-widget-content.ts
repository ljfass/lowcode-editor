import { WidgetData } from "../../../type";

export abstract class BasicBaseWidgetContent {
  widgetData!: WidgetData<any>;

  get widgetAttribute(): any {
    return this.widgetData.setting.attribute;
  }
}
