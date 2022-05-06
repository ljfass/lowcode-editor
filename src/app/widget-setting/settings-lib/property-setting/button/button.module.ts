import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button.component";
import { FormsModule } from "@angular/forms";
import { ShareModule } from "src/app/widget-setting/components/share.module";

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ShareModule, FormsModule],
})
export class ButtonModule {}
