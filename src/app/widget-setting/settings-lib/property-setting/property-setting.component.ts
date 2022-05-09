import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";
import { ButtonComponent, TextComponent, DatePickerComponent } from "./index";
import { WidgetLibService } from "src/app/widget-lib/widget-lib.service";
import { WidgetCard } from "src/app/type";

@Component({
  selector: "app-property-setting",
  templateUrl: "./property-setting.component.html",
  styleUrls: ["./property-setting.component.less"],
})
export class PropertySettingComponent implements OnChanges {
  @Input() ref!: ComponentRef<WidgetComponent>;
  @ViewChild("propertyRender", { read: ViewContainerRef, static: false })
  propertyRender!: ViewContainerRef;

  constructor(
    private widgetSrv: WidgetLibService,
    private cdr: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ref) {
      this.renderSetting(changes.ref.currentValue?.instance?.widget?.type);
    }
  }

  renderSetting(type: string) {
    let widgetConfig: {
      [key: string]: any;
    } = {};
    this.widgetSrv.getWidgetLib().forEach((item: WidgetCard) => {
      const key = item["type"];
      const comp = item["settingComponent"];
      widgetConfig = {
        ...widgetConfig,
        [key]: comp,
      };
    });

    this.renderWidgetPropertySetting(widgetConfig[type]);
  }

  renderWidgetPropertySetting(component: any) {
    setTimeout(() => {
      this.propertyRender.clear();
      const factory = this.resolver.resolveComponentFactory(component);
      const injector = Injector.create({
        providers: [
          {
            provide: ComponentRef,
            useValue: this.ref,
          },
        ],
      });
      this.propertyRender.createComponent(factory, 0, injector);
      this.cdr.detectChanges();
    });
  }
}
