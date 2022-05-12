import { Component, OnInit } from "@angular/core";
import { AdvancedWidgetData } from "src/app/type/advance-widget-data.type";
import { TableAttribute } from "src/app/type/attribute/table";
import { SortableListItemType } from "src/app/widget-setting/settings-lib/property-setting/table/enum";
import { AdvancedBaseWidgetContent } from "../base-wdiget-content";
export type TableWidgetData = AdvancedWidgetData<TableAttribute>;
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
// export type TableWidgetData = AdvancedWidgetData<TableAttribute>;
@Component({
  selector: "app-widget-table",
  templateUrl: "./widget-table.component.html",
  styleUrls: ["./widget-table.component.less"],
})
export class WidgetTableComponent
  extends AdvancedBaseWidgetContent
  implements OnInit
{
  widgetData: TableWidgetData = {
    attribute: {
      columns: [
        {
          name: "name",
          title: "姓名",
          type: SortableListItemType.Input,
        },

        {
          name: "date",
          title: "入职日期",
          type: SortableListItemType.Date,
        },
        {
          name: "price",
          title: "月薪",
          type: SortableListItemType.Number,
        },
      ],
      datas: [
        {
          name: "小王",
          date: 1652344873000,
          price: 5000,
        },
      ],
    },
  };
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
