import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerComponent } from "./date-picker.component";
import { FormsModule } from "@angular/forms";
import { ShareModule } from "src/app/widget-setting/components/share.module";

@NgModule({
  declarations: [DatePickerComponent],
  imports: [CommonModule, ShareModule, FormsModule],
  exports: [DatePickerComponent],
})
export class DatePickerModule {}
