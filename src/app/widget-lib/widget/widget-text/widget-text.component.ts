import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Position } from 'src/app/enum/style.enum';
import { TextSize } from 'src/app/enum/widget-text/attribute.enum';
import { WidgetData } from 'src/app/type/widget-data.type';
import { TextAttribute } from 'src/app/type/widget-text/attribute.type';
import { BaseWidgetContent } from '../base-widget-content';
export type TextWidgetData = WidgetData<TextAttribute>;

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.less'],
})
export class WidgetTextComponent
  extends BaseWidgetContent
  implements AfterViewInit
{
  @ViewChild('textEle') textEle!: ElementRef;
  widgetData: TextWidgetData = {
    name: '文本',
    setting: {
      attribute: {
        text: '请添加你的文本',
        size: TextSize.Default,
        mark: false,
        delete: false,
        underlined: false,
        strong: false,
      },
      style: {
        layout: {
          width: 56,
          height: 28,
        },
        background: {
          fill: true,
          color: 'blue',
          opacity: 1,
        },
        text: {
          fontSize: 12,
          lineHeight: 12,
          fontWeight: 400,
        },
        pos: {
          position: Position.Static,
        },
        radius: 0,
        border: {
          fill: true,
          color: 'blue',
          style: 'solid',
          width: 1,
        },
      },
    },
  };
  contentText!: string;
  markElement?: HTMLElement;
  delElement?: HTMLElement;
  strongElement?: HTMLElement;
  uElement?: HTMLElement;

  constructor(private renderer2: Renderer2) {
    super();
  }

  ngAfterViewInit(): void {
    this.contentText = this.widgetData.setting.attribute.text;
  }

  onTextWidgetClick(event: MouseEvent) {
    event.preventDefault();
    setTimeout(() => {
      this.textEle.nativeElement.setAttribute('contenteditable', 'true');
      this.textEle.nativeElement.focus();
    });
  }

  contentEditableBlur() {
    this.widgetData.setting.attribute.text =
      this.textEle.nativeElement.innerText;
    this.contentText = this.widgetData.setting.attribute.text;
    this.textEle.nativeElement.setAttribute('contenteditable', 'false');
  }

  createElement(tag: string): HTMLElement {
    return document.createElement(tag);
  }

  clearElementInnerHtml(ele: HTMLElement) {
    ele.innerHTML = '';
  }

  getElementInnerContent(ele: HTMLElement, type: string): string {
    return type === 'html' ? ele.innerHTML : ele.innerText;
  }

  handleMarkChange(val: boolean) {
    if (val) {
      const currentHtml = this.getElementInnerContent(
        this.textEle.nativeElement,
        'html'
      );
      this.markElement = this.createElement('mark');
      this.renderer2.setProperty(this.markElement, 'innerHTML', currentHtml);
      this.clearElementInnerHtml(this.textEle.nativeElement);
      this.renderer2.appendChild(this.textEle.nativeElement, this.markElement);
      this.widgetData.setting.attribute.mark = true;
    } else {
      const content = this.markElement?.innerHTML;
      this.clearElementInnerHtml(this.textEle.nativeElement);
      this.renderer2.setProperty(
        this.textEle.nativeElement,
        'innerHTML',
        content
      );
      this.widgetData.setting.attribute.mark = false;
      this.markElement = undefined;
    }
  }

  // mark -> (del) -> strong
  handleDeleteChange(val: boolean) {
    const innerText = this.getElementInnerContent(
      this.textEle.nativeElement,
      'text'
    );
    if (val) {
      this.delElement = this.createElement('del');
      if (this.markElement && this.strongElement) {
        this.renderer2.appendChild(this.delElement, this.strongElement);
        this.clearElementInnerHtml(this.markElement);
        this.renderer2.appendChild(this.markElement, this.delElement);
      } else if (this.markElement && !this.strongElement) {
        this.renderer2.setProperty(this.delElement, 'innerText', innerText);
        this.clearElementInnerHtml(this.markElement);
        this.renderer2.appendChild(this.markElement, this.delElement);
      } else if (!this.markElement && this.strongElement) {
        this.clearElementInnerHtml(this.textEle.nativeElement);
        this.renderer2.appendChild(this.delElement, this.strongElement);
        this.renderer2.appendChild(this.textEle.nativeElement, this.delElement);
      } else {
        this.renderer2.setProperty(this.delElement, 'innerText', innerText);
        this.clearElementInnerHtml(this.textEle.nativeElement);
        this.renderer2.appendChild(this.textEle.nativeElement, this.delElement);
      }
      this.widgetData.setting.attribute.delete = true;
    } else {
      if (this.markElement && this.strongElement) {
        this.clearElementInnerHtml(this.markElement);
        this.renderer2.appendChild(this.markElement, this.strongElement);
      } else if (this.markElement && !this.strongElement) {
        this.clearElementInnerHtml(this.markElement);
        this.renderer2.setProperty(this.markElement, 'innerText', innerText);
      } else if (!this.markElement && this.strongElement) {
        this.clearElementInnerHtml(this.textEle.nativeElement);
        this.renderer2.appendChild(
          this.textEle.nativeElement,
          this.strongElement
        );
      } else {
        this.clearElementInnerHtml(this.textEle.nativeElement);
        this.renderer2.setProperty(
          this.textEle.nativeElement,
          'innerText',
          innerText
        );
      }
      this.widgetData.setting.attribute.delete = false;
      this.delElement = undefined;
    }
  }

  // mark -> del -> strong
  handleStrongChange(val: boolean) {
    const innerText = this.getElementInnerContent(
      this.textEle.nativeElement,
      'text'
    );
    if (val) {
      this.strongElement = this.createElement('strong');
      this.renderer2.setProperty(this.strongElement, 'innerHTML', innerText);
      if (this.markElement && this.delElement) {
        this.clearElementInnerHtml(this.delElement);
        this.renderer2.appendChild(this.delElement, this.strongElement);
      } else if (this.markElement && !this.delElement) {
        this.clearElementInnerHtml(this.markElement);
        this.renderer2.appendChild(this.markElement, this.strongElement);
      } else if (!this.markElement && this.delElement) {
        this.clearElementInnerHtml(this.delElement);
        this.renderer2.appendChild(this.delElement, this.strongElement);
      } else {
        this.clearElementInnerHtml(this.textEle.nativeElement);
        this.renderer2.appendChild(
          this.textEle.nativeElement,
          this.strongElement
        );
      }
      this.widgetData.setting.attribute.strong = true;
    } else {
      this.renderer2.removeChild(
        this.textEle.nativeElement,
        this.strongElement
      );
      if (this.markElement && this.delElement) {
        this.renderer2.setProperty(this.delElement, 'innerText', innerText);
      } else if (this.markElement && !this.delElement) {
        this.renderer2.setProperty(this.markElement, 'innerText', innerText);
      } else if (!this.markElement && this.delElement) {
        this.renderer2.setProperty(this.delElement, 'innerText', innerText);
      } else {
        this.renderer2.setProperty(
          this.textEle.nativeElement,
          'innerText',
          innerText
        );
      }
      this.strongElement = undefined;
      this.widgetData.setting.attribute.strong = false;
    }
  }
}
