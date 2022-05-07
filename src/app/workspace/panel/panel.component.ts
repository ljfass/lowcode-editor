import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { WidgetCard, WidgetData } from "src/app/type";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";
import { WidgetLibComponent } from "../../widget-lib/widget-lib.component";
import { WidgetLibService } from "../../widget-lib/widget-lib.service";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.less"],
})
export class PanelComponent implements OnInit, AfterViewInit {
  @ViewChild("toolContainer", { read: ViewContainerRef, static: false })
  toolContainer!: ViewContainerRef;
  @ViewChild("compAreaContainer", { read: ViewContainerRef, static: false })
  compAreaContainer!: ViewContainerRef;
  @ViewChild("compArea", { static: true }) compArea!: ElementRef;
  constructor(
    private widgetLibSrv: WidgetLibService,
    private cfr: ComponentFactoryResolver
  ) {}

  /** 选中的部件实例 */
  selectedWidgets: ComponentRef<any>[] = [];
  /** 已创建的部件实例 */
  widgets: ComponentRef<WidgetComponent>[] = [];
  alive = true;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // 动态加载组件库区块
    this.createComponent(WidgetLibComponent);
  }

  createComponent(component: any) {
    const componentFactory = this.cfr.resolveComponentFactory(component);
    const componentRef = this.toolContainer.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  onCompAreaDrop(event: DragEvent) {
    event.preventDefault();
    const widgetType = event.dataTransfer?.getData("widgetType");
    if (widgetType) {
      const widget = this.widgetLibSrv.getWidgetByType(widgetType);
      if (widget) {
        const index = this.widgets.length + 1;
        // comp -> WidgetComponent
        const comp = this.createWidget(widget);
        // console.log(comp.location.nativeElement.getBoundingClientRect());
        comp.instance.initialized
          .pipe(takeWhile(() => this.alive))
          .subscribe(({ type, style, widgetData }) => {});
        comp.instance.setSelected();
        this.widgets.push(comp);
      }
    }
  }

  createWidget(
    widget: WidgetCard,
    widgetData?: WidgetData<any>
  ): ComponentRef<WidgetComponent> {
    const factory: ComponentFactory<WidgetComponent> =
      this.cfr.resolveComponentFactory(WidgetComponent);
    const comp: ComponentRef<WidgetComponent> =
      this.compAreaContainer.createComponent(factory);
    if (widgetData) {
      comp.instance.widgetData = widgetData;
    }
    comp.instance.componentRef = comp;
    comp.instance.widget = widget;
    comp.instance.widgets = this.widgets;
    comp.instance.selectWidget
      .pipe(takeWhile(() => this.alive))
      .subscribe(({ multi }) => {
        if (multi && !this.selectedWidgets.includes(comp)) {
          this.selectedWidgets.push(comp);
        } else {
          this.selectedWidgets.forEach((item) => {
            if (item !== comp) {
              // 将其他不是选中的组件的状态变成WidgetStatus.None
              item.instance.resetStatus();
            }
          });
          // 选中当前组件
          this.selectedWidgets.splice(0, this.selectedWidgets.length, comp);
        }
      });
    return comp;
  }

  getData() {
    console.log(this.widgets);
  }
}
