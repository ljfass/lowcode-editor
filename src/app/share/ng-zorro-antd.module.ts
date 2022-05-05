import { NgModule } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { zh_CN } from "ng-zorro-antd/i18n";
import { registerLocaleData, CommonModule } from "@angular/common";
import zh from "@angular/common/locales/zh";

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
  ],
})
export class NgZorroAntdModule {}
