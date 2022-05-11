import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  ElementRef,
  Injector,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { WidgetCard } from "src/app/type";
import { InputType, WidgetStatus } from "../../enum";
import { BasicBaseWidgetContent } from "./basic/base-widget-content";
import { WidgetService } from "./widget.service";
@Component({
  selector: "app-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.less"],
})
export class WidgetComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy, AfterViewInit
{
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  container!: ViewContainerRef;

  @Input() widget!: WidgetCard;
  @Input() widgets!: ComponentRef<WidgetComponent>[];
  @Output() initialized = new EventEmitter<any>();
  @Output() selectWidget = new EventEmitter<any>();

  /** 当前组件状态 */
  status = WidgetStatus.None;
  componentRef?: ComponentRef<WidgetComponent>;
  contentComponentRef?: ComponentRef<BasicBaseWidgetContent>;
  // widgetData!: WidgetData<any>;
  widgetStyle: { [key: string]: any } = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  };
  @ViewChild("widgetWrapper") widgetEle!: ElementRef;
  profileTemporary$: BehaviorSubject<any> = new BehaviorSubject(null);

  get scopeEnchantment() {
    return this.widgetSrv.widgetProfileModel;
  }

  constructor(
    private widgetSrv: WidgetService,
    private cdr: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.style) {
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {}

  ngAfterViewInit() {
    this.contentComponentRef = this.createContentComponent();

    // 拖拽出来后立即选中
    this.initialized.emit({
      type: this.widget.type,
    });
    this.cdr.detectChanges();
  }

  // 创建具体的组件
  createContentComponent(): ComponentRef<BasicBaseWidgetContent> {
    this.container.clear();
    const factory: ComponentFactory<BasicBaseWidgetContent> =
      this.resolver.resolveComponentFactory(this.widget.component);

    const component: ComponentRef<BasicBaseWidgetContent> =
      this.container.createComponent(factory);
    if (this.widget.type === "text-area")
      component.instance.widgetData.setting.attribute.inputType =
        InputType.Multiple;
    // component.instance.widgetData.setting.type = this.widget.type;
    // if (this.widgetData) {
    //   component.instance.widgetData = this.widgetData;
    // } else {
    //   this.widgetData = component.instance.widgetData;
    // }
    return component;
  }

  resetStatus() {
    this.status = WidgetStatus.None;
    this.widgetSrv.changeStatus(this.status);
  }

  setStatus(status: WidgetStatus) {
    this.status = status;
    this.widgetSrv.changeStatus(status);
    this.cdr.detectChanges();
  }

  setSelected(multi: boolean = false): void {
    this.setStatus(WidgetStatus.Select);
    this.selectWidget.emit({ multi });
  }

  // 点击一个组件
  onMouseEvent(event: MouseEvent) {
    event.stopPropagation();
    this.profileTemporary$.next(false);
    this.setSelected(event.ctrlKey);
  }

  // 接受组件的鼠标移入和移除操作
  onMouseMoveEvent(type: string) {
    const value = !!this.status ? false : type === "enter" ? true : false;
    const boundingClientRect =
      this.widgetEle.nativeElement.getBoundingClientRect();
    this.widgetSrv.handleWidgetStyleUpdate({
      left: Number(boundingClientRect.x.toFixed()) - 1,
      top: Number(boundingClientRect.y.toFixed()) - 1,
      width: Number(boundingClientRect.width.toFixed()) + 2,
      height: Number(boundingClientRect.height.toFixed()) + 2,
    });
    if (value) {
      this.profileTemporary$.next(this.scopeEnchantment);
    } else {
      this.profileTemporary$.next(null);
    }
  }
}
