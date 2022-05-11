import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  TemplateRef,
} from "@angular/core";
import { CollapseColumnListType } from "../../type";
import { ColumnEditService } from "../../providers/column-edit.service";
import { NzDrawerRef } from "ng-zorro-antd/drawer";

@Component({
  selector: "app-sortable-columns-list",
  templateUrl: "./sortable-columns-list.component.html",
  styleUrls: ["./sortable-columns-list.component.less"],
})
export class SortableColumnsListComponent implements OnInit, AfterViewInit {
  @Input() columnList: Array<CollapseColumnListType> = [];
  @ViewChild("drawerTemplate", { static: false }) drawerTemplate!: TemplateRef<{
    $implicit: { value: any };
    drawerRef: NzDrawerRef<any>;
  }>;

  constructor(private svr: ColumnEditService) {}

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnList, event.previousIndex, event.currentIndex);
  }

  ngAfterViewInit(): void {}

  onListItemEdit(e: MouseEvent) {
    e.stopPropagation();
    this.svr.openDrawer(this.drawerTemplate);
  }

  test(e: MouseEvent) {}

  clickOutside(val: boolean) {
    if (!val) {
      this.svr.closeDrawer();
    }
  }
}
