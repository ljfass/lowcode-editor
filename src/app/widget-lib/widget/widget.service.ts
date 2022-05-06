import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { WidgetStatus } from "src/app/enum";

@Injectable({
  providedIn: "root",
})
export class WidgetService {
  statusSubject$ = new Subject<WidgetStatus>();

  constructor() {}

  changeStatus(status: WidgetStatus) {
    this.statusSubject$.next(status);
  }

  public getSelectStatus(): Observable<WidgetStatus> {
    return this.statusSubject$.asObservable();
  }
}
