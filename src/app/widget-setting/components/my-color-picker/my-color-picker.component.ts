import { Component, forwardRef, Input, Provider } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ColorEvent, RGBA } from "ngx-color";

const MY_COLOR_PICKER_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MyColorPickerComponent),
  multi: true,
};

@Component({
  selector: "app-my-color-picker",
  templateUrl: "./my-color-picker.component.html",
  styleUrls: ["./my-color-picker.component.less"],
  providers: [MY_COLOR_PICKER_VALUE_ACCESSOR],
})
export class MyColorPickerComponent implements ControlValueAccessor {
  private onTouched = () => {};
  private onChanged = (color: string) => {};
  color!: RGBA;
  backgroundColor!: string;
  // 色板宽度
  @Input() width = 320;

  // 色板高度
  @Input() height = 310;

  // 色板弹出位置
  @Input() position = "top";

  onChange($event: ColorEvent) {
    this.color = $event.color.rgb;
    const rgba = this.getRgbaColor(this.color);
    this.backgroundColor = rgba;
    this.onTouched();
    this.onChanged(rgba);
  }

  writeValue(obj: any): void {
    this.color = obj ?? {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    };
    this.backgroundColor = this.getRgbaColor(this.color);
  }

  getRgbaColor(color: RGBA): string {
    return `rgba(${color.r},${color.g},${color.b},${color.a})`;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
