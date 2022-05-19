import { Injectable, ViewContainerRef } from "@angular/core";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { DataSourceSettingComponent } from "../../components/data-source-setting/data-source-setting.component";

@Injectable({
  providedIn: "root",
})
export class DataSourceService {
  constructor(private modal: NzModalService) {}

  openDataSourceSettingModal(
    viewContainerRef: ViewContainerRef
  ): NzModalRef<DataSourceSettingComponent> {
    const modal = this.modal.create({
      nzTitle: "数据源",
      nzFooter: null,
      nzClosable: false,
      nzMaskClosable: false,
      nzViewContainerRef: viewContainerRef,
      nzContent: DataSourceSettingComponent,
      nzComponentParams: {},
    });
    return modal;
  }
}
