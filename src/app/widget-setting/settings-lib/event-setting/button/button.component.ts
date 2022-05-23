import {
  Component,
  ComponentRef,
  OnInit,
  ViewContainerRef,
} from "@angular/core";
import { WidgetEvent } from "src/app/type";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";
import { EventHandlerService } from "../providers/event-handler/event-handler.service";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.less"],
})
export class ButtonComponent implements OnInit {
  constructor(
    private serv: EventHandlerService,
    public ref: ComponentRef<WidgetComponent>,
    private viewContainerRef: ViewContainerRef
  ) {}

  get data() {
    return (this.ref.instance.contentComponentRef?.instance)!.widgetData;
  }

  get events(): WidgetEvent[] | undefined {
    return this.data.events;
  }

  get showEvents(): number {
    return this.data.events?.length || 0;
  }

  ngOnInit(): void {}

  onSelectChange(val: any) {
    const index = this.data.events?.findIndex(
      (item) => item.actionId === val["actionId"]
    );
    const modal = this.serv.addEvent(
      `${this.data.events![index!].defaultFuncName}${
        this.data.events![index!].funs.length + 1
      }`,
      {},
      `function onFetchData(params){ 
  console.log(params) 
}`,
      this.viewContainerRef
    );
    modal.afterOpen.subscribe;
    modal.afterClose.subscribe((result) => {
      if (result) {
        const { title, params, body } = result;
        this.addEvent(index, title, params, body);
      }
    });
  }

  addEvent(
    index: number | undefined,
    funcName: string,
    funcParams: { [key: string]: any },
    funcBody: string
  ) {
    this.data.events![index!].funs.push({
      widgetId: this.ref.instance.widgetData?.id!,
      funcName,
      funcParams: funcParams,
      funcBody: funcBody,
    });

    /**
     * 更新JS动作面板
     * xxx.push('export function onClick1() {}')
     */
  }

  deleteEvent() {}

  updateEvent() {}
}
