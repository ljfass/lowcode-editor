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
import { ComponetInstanceType, WidgetCard, WidgetData } from "src/app/type";
import { WidgetComponent } from "src/app/widget-lib/widget/widget.component";
import { WidgetLibComponent } from "../../widget-lib/widget-lib.component";
import { WidgetLibService } from "../../widget-lib/widget-lib.service";
import { takeWhile } from "rxjs/operators";
import { AdvancedWidgetData } from "src/app/type/advance-widget-data.type";
import { Page } from "src/app/type/page.type";
import { PreviewServiceService } from "../preview/service/preview-service.service";
import { Router } from "@angular/router";

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
  @ViewChild("previewContainer", { read: ViewContainerRef, static: false })
  previewContainer!: ViewContainerRef;
  @ViewChild("compArea", { static: true }) compArea!: ElementRef;
  constructor(
    private widgetLibSrv: WidgetLibService,
    private previewSrv: PreviewServiceService,
    private cfr: ComponentFactoryResolver,
    private router: Router
  ) {}

  /** 选中的组件实例 */
  selectedWidgets: ComponentRef<any>[] = [];
  /** 已创建的组件实例 */
  widgets: ComponetInstanceType[] = [];
  alive = true;
  pages: Page[] = [];
  get currentPage(): Page {
    return this.pages.find((page) => !!page.selected) || this.pages[0];
  }
  // pageMode: WidgetMode = WidgetMode.Editor;

  ngOnInit(): void {
    this.pages.push({
      id: "p1",
      name: "页面1",
      selected: true,
      widgets: [],
      functions: [],
    });
  }

  ngAfterViewInit(): void {
    // 动态加载组件库区块
    this.createComponent(WidgetLibComponent);
  }

  /**
   *
   * 组件拖放
   */
  onCompAreaDrop(event: DragEvent, pos?: string, index?: number) {
    event.preventDefault();
    const widgetType = event.dataTransfer?.getData("widgetType");
    let injectIndex = undefined;
    if (index !== undefined) {
      injectIndex = index;
      if (pos === "bottom") {
        injectIndex = index! + 1;
      } else {
        injectIndex = index;
      }
    }
    if (widgetType) {
      const widget = this.widgetLibSrv.getWidgetByType(widgetType);
      if (widget) {
        // comp -> WidgetComponent
        const comp = this.createWidget(widget, injectIndex, pos);
        comp.instance.initialized
          .pipe(takeWhile(() => this.alive))
          .subscribe(({ widgetData }) => {
            this.currentPage.widgets.push({
              type: widgetType,
              data: widgetData,
            });
          });
        // 拖拽出来后立即选中
        comp.instance.setSelected();
        this.widgets.splice(
          injectIndex === undefined ? this.widgets.length : injectIndex,
          0,
          comp
        );
      }
    }
  }

  createComponent(component: any) {
    const componentFactory = this.cfr.resolveComponentFactory(component);
    const componentRef = this.toolContainer.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  createWidget(
    widget: WidgetCard,
    index?: number,
    pos?: string,
    widgetData?: WidgetData<any> | AdvancedWidgetData<any>
  ): ComponetInstanceType {
    const factory: ComponentFactory<WidgetComponent> =
      this.cfr.resolveComponentFactory(WidgetComponent);
    const comp: ComponetInstanceType = this.compAreaContainer.createComponent(
      factory,
      index
    );
    comp.instance.componentRef = comp;
    comp.instance.widget = widget;
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
    comp.instance.deleteWidget
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.selectedWidgets.forEach((item, i: number) => {
          if (item === comp) {
            comp.destroy();
            this.selectedWidgets.splice(i, 1);
          }
        });
      });
    comp.instance.copyWidget.pipe(takeWhile(() => this.alive)).subscribe(() => {
      this.selectedWidgets.forEach((item, i: number) => {
        if (item === comp) {
          const newComp = this.createWidget(comp.instance.widget);

          // 浅拷贝
          newComp.instance.widgetData = JSON.parse(
            JSON.stringify(
              comp.instance.contentComponentRef?.instance.widgetData
            )
          );

          newComp.instance.setSelected();
          this.widgets.push(newComp);
        }
      });
    });
    comp.instance.detectDropWidget
      .pipe(takeWhile(() => this.alive))
      .subscribe(({ event, comp, pos }) => {
        let shouldSkip = false;
        this.widgets.forEach((item, i) => {
          if (shouldSkip) {
            return;
          }
          if (item === comp) {
            this.onCompAreaDrop(event, pos, i);
            shouldSkip = true;
          }
        });
      });
    return comp;
  }

  /**
   * 根据id获取已创建组件实例
   */
  $(id: number | string): ComponetInstanceType {
    return this.widgets.find((item) => item.instance.widgetData?.id === id)!;
  }

  tooglePageMode() {
    // this.pageMode = PageMode.Preview;
  }

  preview() {
    this.previewSrv.widgets = [...this.currentPage.widgets];
    this.router.navigate(["preview"]);
  }
}
