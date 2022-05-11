import { Injectable, TemplateRef } from "@angular/core";
import { NzDrawerRef, NzDrawerService } from "ng-zorro-antd/drawer";

@Injectable({
  providedIn: "root",
})
export class ColumnEditService {
  constructor(private drawerService: NzDrawerService) {}
  drawerRef!: NzDrawerRef<{ value: any }>;
  openDrawer(
    tpl: TemplateRef<{
      $implicit: { value: any };
      drawerRef: NzDrawerRef<any>;
    }>
  ) {
    if (this.drawerRef) return;
    this.drawerRef = this.drawerService.create({
      nzContent: tpl,
      nzMaskStyle: {
        background: "transparent",
      },
      nzMask: true,
      nzMaskClosable: true,
      nzWrapClassName: "my-drawer",
      nzOffsetX: 351,
      nzZIndex: 1,
      nzContentParams: {
        value: {
          name: "guodu",
        },
      },
    });
  }

  closeDrawer() {
    this.drawerRef.close();
  }
}
