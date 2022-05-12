import { Component, ComponentRef } from "@angular/core";
import { TableWidgetData } from "src/app/widget-lib/widget/advanced/widget-table/widget-table.component";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";
import { CollapsePaneExpandMode, SortableListItemType } from "./enum";
import { CollapseColumnListType } from "./type";
import { ColumnEditService } from "./providers/column-edit.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.less"],
})
export class TableComponent {
  /**
   * 数据列
   */
  pane = {
    name: "数据列",
    mode: CollapsePaneExpandMode.Default,
  };
  columns: CollapseColumnListType[] = [];

  constructor(
    private service: ColumnEditService,
    public ref: ComponentRef<WidgetComponent>
  ) {
    this.columns = (
      this.ref.instance.contentComponentRef?.instance
        .widgetData as TableWidgetData
    ).attribute.columns;
  }

  // 编辑数据列
  onTableColumnEdit(i: number) {
    const columnData = this.columns[i];
    this.service.openDrawer(columnData);
  }

  // 删除数据列
  onTableColumnDelete(i: number) {
    this.columns.splice(i, 1);
  }

  // 添加数据列
  onTableColumnAdd() {
    this.columns = [
      ...this.columns,
      {
        name: "name",
        title: "姓名",
        type: SortableListItemType.Input,
      },
    ];

    (
      this.ref.instance.contentComponentRef?.instance
        .widgetData as TableWidgetData
    ).attribute.columns = this.columns;
  }
}
