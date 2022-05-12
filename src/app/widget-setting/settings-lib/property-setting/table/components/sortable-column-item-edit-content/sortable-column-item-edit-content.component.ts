import { Component, Input } from "@angular/core";
import { TABLE_COLUMN_TYPE_LIST } from "src/app/const";
import { ColumnEditService } from "../../providers/column-edit.service";
import { CollapseColumnListType } from "../../type";

@Component({
  selector: "app-sortable-column-item-edit-content",
  templateUrl: "./sortable-column-item-edit-content.component.html",
  styleUrls: ["./sortable-column-item-edit-content.component.less"],
})
export class SortableColumnItemEditContentComponent {
  @Input() value!: CollapseColumnListType;
  tableColumnTypList = TABLE_COLUMN_TYPE_LIST;

  constructor(private service: ColumnEditService) {}
  /**
   * 监听点击空白区域
   * 然后关闭抽屉
   */
  clickOutside(val: boolean) {
    if (!val) {
      this.service.closeDrawer();
    }
  }
}
