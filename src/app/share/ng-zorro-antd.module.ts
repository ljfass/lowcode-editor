import { NgModule } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzListModule } from "ng-zorro-antd/list";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzPaginationModule } from "ng-zorro-antd/pagination";
import { NZ_I18N, zh_CN } from "ng-zorro-antd/i18n";
import { registerLocaleData, CommonModule } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { NzElementPatchModule } from "ng-zorro-antd/core/element-patch";
registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [CommonModule, NzTagModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports: [
    NzButtonModule,
    NzInputModule,
    NzInputNumberModule,
    NzSwitchModule,
    NzRadioModule,
    NzSelectModule,
    NzTagModule,
    NzToolTipModule,
    NzTabsModule,
    NzCollapseModule,
    NzSliderModule,
    NzDatePickerModule,
    NzPopoverModule,
    NzTableModule,
    NzElementPatchModule,
    NzIconModule,
    NzDrawerModule,
    NzFormModule,
    NzListModule,
    NzDropDownModule,
    NzModalModule,
    NzPaginationModule,
  ],
})
export class NgZorroAntdModule {}
