import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { EventSettingComponent } from "./event-setting.component";
import { NgZorroAntdModule } from "src/app/share/ng-zorro-antd.module";
import { FormsModule } from "@angular/forms";
import { EventSettingModalComponent } from "./components/event-setting-modal/event-setting-modal.component";
import { EventHandlerService } from "./providers/event-handler/event-handler.service";
import { MonacoEditorModule } from "ngx-monaco-editor";

@NgModule({
  declarations: [
    ButtonComponent,
    EventSettingComponent,
    EventSettingModalComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
  ],
  exports: [EventSettingComponent],
  providers: [EventHandlerService],
})
export class EventSettingModule {}
