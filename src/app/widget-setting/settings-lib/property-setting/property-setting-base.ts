import { ComponentRef } from "@angular/core";
import { WidgetData } from "src/app/type";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

export class PropertySettingBase {
  constructor(public ref: ComponentRef<WidgetComponent>) {}

  get attribute() {
    return (
      this.ref.instance.contentComponentRef!.instance
        .widgetData as WidgetData<any>
    ).setting.attribute;
  }
}
