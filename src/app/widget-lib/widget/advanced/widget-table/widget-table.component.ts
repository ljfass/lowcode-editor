import { Component } from "@angular/core";
import { EventType, WidgetMode } from "src/app/enum";
import { AdvancedWidgetData } from "src/app/type/advance-widget-data.type";
import { TableAttribute } from "src/app/type/attribute/table";
import { SortableListItemType } from "src/app/widget-setting/settings-lib/property-setting/table/enum";
import { AdvancedBaseWidgetContent } from "../base-wdiget-content";
export type TableWidgetData = AdvancedWidgetData<TableAttribute>;

// export type TableWidgetData = AdvancedWidgetData<TableAttribute>;
@Component({
  selector: "app-widget-table",
  templateUrl: "./widget-table.component.html",
  styleUrls: ["./widget-table.component.less"],
})
export class WidgetTableComponent extends AdvancedBaseWidgetContent {
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
    events: [
      {
        actionId: "1",
        actionName: "分页、搜索、排序时触发",
        actionType: EventType.TableFetchData,
        defaultFuncName: "onTableFetchData",
        funs: [],
      },
    ],
  };
  tableQuery = {
    currentPage: 1,
    currentPageIndex: 1,
    currentPageSize: 10,
  };
  constructor() {
    super();
  }

  onSearch(): void {
    if (this.widgetData.mode === WidgetMode.Editor) return;
    this.widgetData.events![0].funs.forEach((widgetEvent) => {
      const body = widgetEvent.funcBody;
      const params = widgetEvent.funcParams;
      const funcBody = `
      this.params = params;
      ${body}
      onFetchData(queryParams);
      `;
      const f = new Function("queryParams", "params", funcBody);

      f(this.tableQuery, params);
    });
  }
}
