import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WidgetStatus } from 'src/app/enum/widget-status.enum';

@Injectable()
export class WidgetService {
  statusSubject$ = new Subject<WidgetStatus>();
  dataSubject$ = new Subject<void>();

  constructor() {}

  changeStatus(status: WidgetStatus) {
    this.statusSubject$.next(status);
  }
}
