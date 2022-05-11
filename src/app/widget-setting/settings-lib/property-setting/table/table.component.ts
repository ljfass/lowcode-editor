import { Component, OnInit } from "@angular/core";
import { CollapsePaneExpandMode, SortableListItemType } from "./enum";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.less"],
})
export class TableComponent implements OnInit {
  /**
   * 数据列
   */
  dataColumnsObject = {
    columns: [
      {
        name: "name",
        title: "姓名",
        type: SortableListItemType.Input,
      },
      {
        name: "price",
        title: "价格",
        type: SortableListItemType.Input,
      },
    ],
    panel: {
      name: "数据列",
      mode: CollapsePaneExpandMode.Default,
    },
  };

  constructor() {}

  ngOnInit(): void {}

  test(val: boolean) {
    console.log(val);
  }
}
