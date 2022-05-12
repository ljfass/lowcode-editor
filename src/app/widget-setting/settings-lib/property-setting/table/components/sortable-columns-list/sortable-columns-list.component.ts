import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ComponentRef,
} from "@angular/core";
import { CollapseColumnListType } from "../../type";
import { ColumnEditService } from "../../providers/column-edit.service";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-sortable-columns-list",
  templateUrl: "./sortable-columns-list.component.html",
  styleUrls: ["./sortable-columns-list.component.less"],
})
export class SortableColumnsListComponent {
  @Input() columnList: Array<CollapseColumnListType> = [];
  @Input() ref!: ComponentRef<WidgetComponent>;
  @Output() onItemEdit = new EventEmitter<number>();
  @Output() onItemDelete = new EventEmitter<number>();
  @Output() onItemAdd = new EventEmitter<null>();

  constructor(private service: ColumnEditService) {}

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnList, event.previousIndex, event.currentIndex);
  }

  // 打开数据列编辑抽屉框
  onListItemEdit(e: MouseEvent, i: number) {
    e.stopPropagation();
    this.onItemEdit.emit(i);
  }

  // 删除数据列
  onListItemDelete(i: number) {
    this.onItemDelete.emit(i);
  }
}
