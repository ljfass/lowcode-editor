import {
  AfterViewInit,
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
} from '@angular/core';
import { WidgetComponent } from 'src/app/widget-lib/widget/widget.component';
import { LayoutComponent } from './layout/layout.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-style-setting',
  templateUrl: './style-setting.component.html',
  styleUrls: ['./style-setting.component.less'],
})
export class StyleSettingComponent implements OnChanges, AfterViewInit {
  @Input() ref!: ComponentRef<WidgetComponent>;
  @ViewChild('layoutrender', { read: ViewContainerRef, static: false })
  layoutRender!: ViewContainerRef;
  @ViewChild('textrender', { read: ViewContainerRef, static: false })
  textRender!: ViewContainerRef;
  constructor(
    private cdr: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    this.renderSetting();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ref && !changes.ref.firstChange) {
      this.renderSetting();
    }
  }

  // 动态加载组件
  renderSetting(): void {
    this.layoutRender.clear();
    this.textRender.clear();
    const layoutFactory =
      this.resolver.resolveComponentFactory(LayoutComponent);
    const textFactory = this.resolver.resolveComponentFactory(TextComponent);
    const injector = Injector.create({
      providers: [
        {
          provide: ComponentRef,
          useValue: this.ref,
        },
      ],
    });
    this.layoutRender.createComponent(layoutFactory, 0, injector);
    this.textRender.createComponent(textFactory, 0, injector);
    this.cdr.detectChanges();
  }
}
