import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PropertySettingComponent } from "./property-setting.component";
import { ButtonModule } from "./button/button.module";
import { TextModule } from "./text/text.module";
import { DatePickerModule } from "./date-picker/date-picker.module";

const components = [PropertySettingComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ButtonModule, DatePickerModule, TextModule],
  exports: [...components],
})
export class PropertySettingModule {}
