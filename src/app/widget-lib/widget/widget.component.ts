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
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ComponetInstanceType, WidgetCard, WidgetData } from "src/app/type";
import { AdvancedWidgetData } from "src/app/type/advance-widget-data.type";
import { InputType, WidgetMode, WidgetStatus } from "../../enum";
import { AdvancedBaseWidgetContent } from "./advanced/base-wdiget-content";
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
  @Input() widgets!: ComponetInstanceType[];
  @Output() initialized = new EventEmitter<any>();
  @Output() selectWidget = new EventEmitter<any>();
  @Output() deleteWidget = new EventEmitter<any>();
  @Output() copyWidget = new EventEmitter<any>();
  @Output() detectDropWidget = new EventEmitter<{
    event: DragEvent;
    comp: ComponetInstanceType;
    pos: string;
  }>();
  sfd = 1;
  /** 当前组件状态 */
  status = WidgetStatus.None;
  componentRef?: ComponetInstanceType;
  contentComponentRef?: ComponentRef<
    BasicBaseWidgetContent | AdvancedBaseWidgetContent
  >;
  widgetData!: WidgetData<any> | AdvancedWidgetData<any>;

  @ViewChild("widgetWrapper") widgetEle!: ElementRef;
  profileTemporary$: BehaviorSubject<any> = new BehaviorSubject(null);

  get scopeEnchantment() {
    return this.widgetSrv.widgetProfileModel;
  }

  get widgetMode(): WidgetMode {
    return this.widgetData?.mode || WidgetMode.Editor;
  }

  constructor(
    public elementRef: ElementRef,
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
      widgetData: this.widgetData,
    });
    this.cdr.detectChanges();
  }

  // 创建具体的组件
  createContentComponent(): ComponentRef<
    BasicBaseWidgetContent | AdvancedBaseWidgetContent
  > {
    this.container.clear();
    const factory: ComponentFactory<
      BasicBaseWidgetContent | AdvancedBaseWidgetContent
    > = this.resolver.resolveComponentFactory(this.widget.component);

    const component: ComponentRef<
      BasicBaseWidgetContent | AdvancedBaseWidgetContent
    > = this.container.createComponent(factory);
    if (this.widget.type === "text-area")
      (
        component.instance.widgetData as WidgetData<any>
      ).setting.attribute.inputType = InputType.Multiple;

    if (this.widgetData) {
      component.instance.widgetData = this.widgetData;
    } else {
      component.instance.widgetData.id = new Date().getTime();
      component.instance.widgetData.mode = WidgetMode.Editor;
      this.widgetData = component.instance.widgetData;
    }
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
    if (this.widgetMode === "2") return;
    event.stopPropagation();
    this.profileTemporary$.next(false);
    this.setSelected(event.ctrlKey);
  }

  // 接受组件的鼠标移入和移除操作
  onMouseMoveEvent(type: string) {
    if (this.widgetMode === "2") return;
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

  /**
   * 组件上下位置的拖拽监听
   * pos: ’top‘ | 'bottom'
   */
  onWidgetDrop(e: DragEvent, pos: string) {
    if (this.widgetMode === "2") return;
    this.detectDropWidget.emit({ event: e, comp: this.componentRef!, pos });
  }

  onWidgetDragEnter(e: DragEvent) {
    if (this.widgetMode === "2") return;
    this.profileTemporary$.next(null);
    this.resetStatus();
  }
}
