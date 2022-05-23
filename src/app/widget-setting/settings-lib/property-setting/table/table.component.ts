import {
  Component,
  ComponentRef,
  OnInit,
  SimpleChanges,
  ViewContainerRef,
} from "@angular/core";
import { TableWidgetData } from "src/app/widget-lib/widget/advanced/widget-table/widget-table.component";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";
import { CollapsePaneExpandMode, SortableListItemType } from "./enum";
import { CollapseColumnListType } from "./type";
import { ColumnEditService } from "./providers/column-edit/column-edit.service";
import { DataSourceService } from "./providers/data-source/data-source.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.less"],
})
export class TableComponent implements OnInit {
  /**
   * 数据列
   * 数据源
   */
  pane = {
    name: "数据列",
    mode: CollapsePaneExpandMode.Default,
  };

  dataSourcePane = {
    name: "数据源",
    mode: CollapsePaneExpandMode.Default,
  };
  columns: CollapseColumnListType[] = [];

  constructor(
    private columnEdtServ: ColumnEditService,
    private dataSourceServ: DataSourceService,
    public ref: ComponentRef<WidgetComponent>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    console.log(
      this.ref.instance.contentComponentRef?.instance
        .widgetData as TableWidgetData
    );

    this.columns = (
      this.ref.instance.contentComponentRef?.instance
        .widgetData as TableWidgetData
    ).attribute.columns;
  }

  ngOnInit() {}

  // 编辑数据列
  onTableColumnEdit(i: number) {
    const columnData = this.columns[i];
    this.columnEdtServ.openDrawer(columnData);
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

  // 数据源设置
  onTableDatasourceSetting() {
    this.dataSourceServ.openDataSourceSettingModal(this.viewContainerRef);
  }
}
