import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { Position } from "src/app/enum";
import { TextAttribute, WidgetData } from "src/app/type";
import { BaseTextWidget } from "../base-text-widget";
export type TextWidgetData = WidgetData<TextAttribute>;
@Component({
  selector: "app-widget-text-area",
  templateUrl: "./widget-text-area.component.html",
  styleUrls: ["./widget-text-area.component.less"],
})
export class WidgetTextAreaComponent extends BaseTextWidget implements OnInit {
  widgetData: TextWidgetData = {
    name: "文本",
    setting: {
      attribute: { ...this.attribute, rows: 4 },
      style: {
        layout: {
          width: 56,
          height: 28,
        },
        ...this.apperanceStyle,
      },
    },
  };
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
