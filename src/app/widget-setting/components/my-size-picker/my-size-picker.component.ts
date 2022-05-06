import { Component, forwardRef, Input, OnInit, Provider } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NzSizeLDSType } from "ng-zorro-antd/core/types/size";

enum sizePickerEnum {
  Small = "small",
  Default = "default",
  Large = "large",
}

const MY_SIZE_PICKER_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MySizePickerComponent),
  multi: true,
};

@Component({
  selector: "app-my-size-picker",
  templateUrl: "./my-size-picker.component.html",
  styleUrls: ["./my-size-picker.component.less"],
  providers: [MY_SIZE_PICKER_VALUE_ACCESSOR],
})
export class MySizePickerComponent implements ControlValueAccessor {
  private onTouched = () => {};
  private onChanged = (size: string) => {};
  value = "default";

  @Input() pickerSize!: NzSizeLDSType;

  writeValue(val: string) {
    this.value = val;
  }

  onSelectChange(val: string) {
    this.value = val;
    this.onTouched();
    this.onChanged(val);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
