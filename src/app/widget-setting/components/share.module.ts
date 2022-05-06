import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ColorSketchModule } from "ngx-color/sketch";
import { NgZorroAntdModule } from "src/app/share/ng-zorro-antd.module";
import { MyColorPickerComponent } from "./my-color-picker/my-color-picker.component";
import { MySizePickerComponent } from "./my-size-picker/my-size-picker.component";

@NgModule({
  declarations: [MyColorPickerComponent, MySizePickerComponent],
  imports: [NgZorroAntdModule, CommonModule, ColorSketchModule, FormsModule],
  exports: [MyColorPickerComponent, MySizePickerComponent, NgZorroAntdModule],
})
export class ShareModule {}
