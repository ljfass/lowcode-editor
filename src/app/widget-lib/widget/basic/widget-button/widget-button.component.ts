import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { ButtonSize, Position, ButtonType } from "../../../../enum";
import { ButtonAttribute, WidgetData } from "src/app/type";
import { BasicBaseWidgetContent } from "../base-widget-content";

export type ButtonWidgetData = WidgetData<ButtonAttribute>;

@Component({
  selector: "app-widget-button",
  templateUrl: "./widget-button.component.html",
  styleUrls: ["./widget-button.component.less"],
})
export class WidgetButtonComponent
  extends BasicBaseWidgetContent
  implements AfterViewInit
{
  widgetData: ButtonWidgetData = {
    name: "按钮",
    setting: {
      type: "",
      attribute: {
        buttonText: "取消",
        type: ButtonType.Primary,
        size: ButtonSize.Small,
        shape: null,
        loading: false,
        ghost: false,
        danger: false,
        disabled: false,
      },
      style: {
        layout: {
          width: "auto",
          height: 28,
        },
        background: {
          fill: true,
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
          color: "blue",
          style: "solid",
          width: 1,
        },
      },
    },
  };
  @ViewChild("editableSpan") editableSpan!: ElementRef;
  @ViewChild("button") button!: NzButtonComponent;

  readonly = true;
  buttonText!: string;
  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.widgetData.setting.style.layout.width =
      this.button?.["elementRef"].nativeElement.offsetWidth;
  }

  onButtonDoubleClick(event: MouseEvent) {
    event.preventDefault();
    this.readonly = false;
    this.buttonText = this.widgetData.setting?.attribute?.buttonText;
    setTimeout(() => {
      this.editableSpan?.nativeElement.setAttribute("contenteditable", "true");
      this.editableSpan?.nativeElement.focus();
    });
  }

  contentEditableBlur(value: string) {
    this.widgetData.setting.attribute.buttonText = value;
    this.readonly = true;
    setTimeout(() => {
      this.widgetData.setting.style.layout.width =
        this.button?.["elementRef"].nativeElement.offsetWidth;
    });
  }

  // 改变按钮尺寸后重新获取宽度
  refreshButtonWidgetWidth(size: string) {
    this.widgetData.setting.style.layout.width =
      size === "large" ? 64 : size === "default" ? 60 : 44;
  }
}