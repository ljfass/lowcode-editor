import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationComponent } from "./pagination.component";
import { ShareModule } from "src/app/widget-setting/components/share.module";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, ShareModule, FormsModule],
})
export class PaginationModule {}
