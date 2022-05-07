import { WidgetCard } from "src/app/type";
import { WidgetButtonComponent } from "../widget-lib/widget/widget-button/widget-button.component";
import { WidgetDatePickerComponent } from "../widget-lib/widget/widget-date-picker/widget-date-picker.component";
import { WidgetTextAreaComponent } from "../widget-lib/widget/widget-text-area/widget-text-area.component";
import { WidgetTextComponent } from "../widget-lib/widget/widget-text/widget-text.component";
export const WIDGET_LIST: WidgetCard[] = [
  {
    type: "button",
    name: "按钮",
    component: WidgetButtonComponent,
  },
  {
    type: "text",
    name: "单行文本",
    component: WidgetTextComponent,
  },
  {
    type: "text-area",
    name: "多行文本",
    component: WidgetTextAreaComponent,
  },
  {
    type: "date-picker",
    name: "日期选择框",
    component: WidgetDatePickerComponent,
  },
];
