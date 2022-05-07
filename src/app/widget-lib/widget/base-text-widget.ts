import { Position } from "src/app/enum";
import { TextAttribute, WidgetData } from "src/app/type";
import { BaseWidgetContent } from "./base-widget-content";

export class BaseTextWidget extends BaseWidgetContent {
  attribute: TextAttribute = {
    text: "",
    placeholder: "请输入",
    size: "default",
    disabled: false,
  };

  apperanceStyle = {
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
  };
}
