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
} from '@angular/core';
import { WidgetCard } from 'src/app/type/widget-card.type';
import { Page } from 'src/app/type/page.type';
import { WidgetStatus } from '../../enum/widget-status.enum';
import { BaseWidgetContent } from './base-widget-content';
import { WidgetService } from './widget.service';
import { WidgetData } from 'src/app/type/widget-data.type';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
  providers: [WidgetService],
})
export class WidgetComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy, AfterViewInit
{
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  container!: ViewContainerRef;

  @Input() widget!: WidgetCard;
  @Input() page!: Page;
  @Input() pages!: Page[];
  @Input() widgets!: ComponentRef<WidgetComponent>[];
  @Output() initialized = new EventEmitter<any>();
  @Output() selectWidget = new EventEmitter<any>();

  /** 当前组件状态 */
  status = WidgetStatus.None;

  contentComponentRef?: ComponentRef<BaseWidgetContent>;
  widgetData!: WidgetData<any>;

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
      widgetData: this.widgetData,
    });
    this.cdr.detectChanges();
  }

  createContentComponent(): ComponentRef<BaseWidgetContent> {
    const factory: ComponentFactory<BaseWidgetContent> =
      this.resolver.resolveComponentFactory(this.widget.component);
    const component: ComponentRef<BaseWidgetContent> =
      this.container.createComponent(factory);
    if (this.widgetData) {
      component.instance.widgetData = this.widgetData;
    } else {
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

  onMouseEvent(event: MouseEvent) {
    event.stopPropagation();
    this.setSelected(event.ctrlKey);
  }

  setSelected(multi: boolean = false): void {
    this.setStatus(WidgetStatus.Select);
    this.selectWidget.emit({ multi });
  }
}
