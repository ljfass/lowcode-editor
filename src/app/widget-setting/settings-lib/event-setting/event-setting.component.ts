import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { WidgetCard } from "src/app/type";
import { WidgetLibService } from "src/app/widget-lib/widget-lib.service";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";

@Component({
  selector: "app-event-setting",
  templateUrl: "./event-setting.component.html",
  styleUrls: ["./event-setting.component.less"],
})
export class EventSettingComponent implements OnChanges {
  @Input() ref!: ComponentRef<WidgetComponent>;
  @ViewChild("eventRender", { read: ViewContainerRef, static: false })
  eventRender!: ViewContainerRef;

  constructor(
    private widgetSrv: WidgetLibService,
    private cdr: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ref) {
      this.renderEvent(changes.ref.currentValue?.instance?.widget?.type);
    }
  }

  renderEvent(type: string) {
    let widgetConfig: {
      [key: string]: any;
    } = {};
    this.widgetSrv.getWidgetLib().forEach((item: WidgetCard) => {
      const key = item["type"];
      const comp = item["eventComponent"];
      widgetConfig = {
        ...widgetConfig,
        [key]: comp,
      };
    });
    this.renderWidgetEventSetting(widgetConfig[type]);
  }

  renderWidgetEventSetting(component: any) {
    if (!component) {
      return;
    }
    setTimeout(() => {
      this.eventRender.clear();
      const factory = this.resolver.resolveComponentFactory(component);
      const injector = Injector.create({
        providers: [
          {
            provide: ComponentRef,
            useValue: this.ref,
          },
        ],
      });
      this.eventRender.createComponent(factory, 0, injector);
      this.cdr.detectChanges();
    });
  }
}
