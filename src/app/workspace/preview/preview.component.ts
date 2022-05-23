import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from "@angular/core";
import { WidgetMode } from "src/app/enum";
import { ComponetInstanceType, WidgetData } from "src/app/type";
import { AdvancedWidgetData } from "src/app/type/advance-widget-data.type";
import { WidgetLibService } from "src/app/widget-lib/widget-lib.service";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";
import { PreviewServiceService } from "./service/preview-service.service";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.less"],
})
export class PreviewComponent implements OnInit {
  @ViewChild("previewContainer", { read: ViewContainerRef, static: false })
  previewContainer!: ViewContainerRef;

  constructor(
    private previewSrv: PreviewServiceService,
    private cfr: ComponentFactoryResolver,
    private widgetLibSrv: WidgetLibService
  ) {}
  get widgetDataList() {
    return this.previewSrv.widgets;
  }
  widgets: ComponetInstanceType[] = [];
  ngOnInit(): void {}

  ngAfterViewInit() {
    for (const widget of this.widgetDataList) {
      const comp = this.createPreviewWidget(widget.type, widget.data);
      this.widgets.push(comp!);
    }
    this.widgets.forEach((widget) => widget.changeDetectorRef.detectChanges());
  }
  createPreviewWidget(
    type: string,
    widgetData?: WidgetData<any> | AdvancedWidgetData<any>
  ): ComponetInstanceType | null {
    const widget = this.widgetLibSrv.getWidgetByType(type);
    if (widget) {
      const factory = this.cfr.resolveComponentFactory(WidgetComponent);
      const comp: ComponentRef<WidgetComponent> =
        this.previewContainer.createComponent(factory);
      comp.instance.widget = widget;
      // comp.instance.widgets = this.widgets;
      if (widgetData) {
        comp.instance.widgetData = widgetData;
        comp.instance.widgetData.mode = WidgetMode.Preview;
      }
      return comp;
    }
    return null;
  }
}
