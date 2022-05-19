import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PropertySettingComponent } from "./property-setting.component";
import { ButtonModule } from "./button/button.module";
import { TextModule } from "./text/text.module";
import { DatePickerModule } from "./date-picker/date-picker.module";
import { TableModule } from "./table/table.module";
import { PaginationModule } from "./pagination/pagination.module";

const components = [PropertySettingComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DatePickerModule,
    TextModule,
    PaginationModule,
  ],
  exports: [...components],
})
export class PropertySettingModule {}
