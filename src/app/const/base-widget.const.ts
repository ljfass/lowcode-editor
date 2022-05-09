import { WidgetCard } from "src/app/type";
import { WidgetTableComponent } from "../widget-lib/widget/advanced/widget-table/widget-table.component";
import { WidgetButtonComponent } from "../widget-lib/widget/basic/widget-button/widget-button.component";
import { WidgetDatePickerComponent } from "../widget-lib/widget/basic/widget-date-picker/widget-date-picker.component";
import { WidgetTextComponent } from "../widget-lib/widget/basic/widget-text/widget-text.component";
import { TextComponent } from "../widget-setting/settings-lib/property-setting";
import { ButtonComponent } from "../widget-setting/settings-lib/property-setting/button/button.component";
import { DatePickerComponent } from "../widget-setting/settings-lib/property-setting/date-picker/date-picker.component";
import { TableComponent } from "../widget-setting/settings-lib/property-setting/table/table.component";
export const WIDGET_LIST: WidgetCard[] = [
  {
    type: "button",
    name: "按钮",
    component: WidgetButtonComponent,
    settingComponent: ButtonComponent,
  },
  {
    type: "text",
    name: "单行文本",
    component: WidgetTextComponent,
    settingComponent: TextComponent,
  },
  {
    type: "text-area",
    name: "多行文本",
    component: WidgetTextComponent,
    settingComponent: TextComponent,
  },
  {
    type: "date-picker",
    name: "日期选择框",
    component: WidgetDatePickerComponent,
    settingComponent: DatePickerComponent,
  },
  {
    type: "table",
    name: "表格",
    component: WidgetTableComponent,
    settingComponent: TableComponent,
  },
];
