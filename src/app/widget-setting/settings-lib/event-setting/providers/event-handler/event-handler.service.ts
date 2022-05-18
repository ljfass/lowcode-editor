import { Injectable, ViewContainerRef } from "@angular/core";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { EventSettingModalComponent } from "../../components/event-setting-modal/event-setting-modal.component";

@Injectable({
  providedIn: "root",
})
export class EventHandlerService {
  constructor(private modal: NzModalService) {}

  // 添加事件
  addEvent(
    title: string,
    params: { [key: string]: any },
    body: string,
    viewContainerRef: ViewContainerRef
  ): NzModalRef<EventSettingModalComponent> {
    const modal = this.modal.create({
      nzTitle: "添加事件",
      nzFooter: null,
      nzClosable: false,
      nzMaskClosable: false,
      nzContent: EventSettingModalComponent,
      nzViewContainerRef: viewContainerRef,
      nzComponentParams: {
        title,
        params,
        body,
      },
    });

    return modal;
  }

  // 移除事件
  // 修改事件
}
