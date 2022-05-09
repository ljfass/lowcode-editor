import { InputType, Position } from "src/app/enum";
import { TextAttribute } from "src/app/type";
import { BasicBaseWidgetContent } from "./base-widget-content";

export class BaseTextWidget extends BasicBaseWidgetContent {
  attribute: TextAttribute = {
    text: "",
    inputType: InputType.Single,
    placeholder: "请输入",
    size: "default",
    disabled: false,
    rows: 4,
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
