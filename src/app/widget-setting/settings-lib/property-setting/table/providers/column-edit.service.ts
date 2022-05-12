import { Injectable, TemplateRef } from "@angular/core";
import { NzDrawerRef, NzDrawerService } from "ng-zorro-antd/drawer";
import { SortableColumnItemEditContentComponent } from "../components/sortable-column-item-edit-content/sortable-column-item-edit-content.component";
import { CollapseColumnListType } from "../type";

@Injectable({
  providedIn: "root",
})
export class ColumnEditService {
  drawerRef?: NzDrawerRef<SortableColumnItemEditContentComponent> | null;

  constructor(private drawerService: NzDrawerService) {}

  // 打开编辑抽屉
  openDrawer(data: CollapseColumnListType) {
    if (this.drawerRef) {
      const componentInstance = this.drawerRef.getContentComponent();
      componentInstance!.value = data;
      return;
    }

    this.drawerRef = this.drawerService.create<
      SortableColumnItemEditContentComponent,
      {
        value: CollapseColumnListType;
      },
      string
    >({
      nzContent: SortableColumnItemEditContentComponent,
      nzMaskStyle: {
        background: "transparent",
      },
      nzBodyStyle: { padding: 0 },
      nzMask: true,
      nzMaskClosable: true,
      nzClosable: false,
      nzWrapClassName: "my-drawer",
      nzOffsetX: 351,
      nzZIndex: 1,
      nzContentParams: {
        value: data,
      },
    });
  }

  // 关闭编辑抽屉
  closeDrawer() {
    this.drawerRef!.close();
    this.drawerRef = null;
  }
}
