import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { WidgetStatus } from "src/app/enum";

@Injectable({
  providedIn: "root",
})
export class WidgetService {
  statusSubject$ = new Subject<WidgetStatus>();
  widgetProfileStyle$ = new Subject<{ [key: string]: any }>();
  private _widgetProfileModel = new WidgetProfileModel();

  constructor() {}

  changeStatus(status: WidgetStatus) {
    this.statusSubject$.next(status);
  }

  getSelectStatus(): Observable<WidgetStatus> {
    return this.statusSubject$.asObservable();
  }

  handleWidgetStyleUpdate(newStyle: { [key: string]: any }) {
    this.widgetProfileStyle$.next(newStyle);
    this._widgetProfileModel.setData({
      left: newStyle.left,
      top: newStyle.top,
      width: newStyle.width,
      height: newStyle.height,
    });
  }

  widgetProfileStyle(): Observable<{ [key: string]: any }> {
    return this.widgetProfileStyle$.asObservable();
  }

  get widgetProfileModel() {
    return this._widgetProfileModel;
  }
}

class WidgetProfileModel {
  private _left!: number;
  private _top!: number;
  private _width!: number;
  private _height: number = 100;
  constructor() {}

  get left(): number {
    return this._left;
  }
  get top(): number {
    return this._top;
  }
  get width(): number {
    return this._width;
  }
  get height(): number {
    return this._height;
  }
  set left(val: number) {
    this._left = val;
  }
  set top(val: number) {
    this._top = val;
  }
  set width(val: number) {
    this._width = val;
  }
  set height(val: number) {
    this._height = val;
  }

  setData(data: { left: number; top: number; width: number; height: number }) {
    this.left = data.left;
    this.top = data.top;
    this.width = data.width;
    this.height = data.height;
  }

  public get styleContent(): { [key: string]: string } {
    return {
      left: `${this.left}px`,
      top: `${this.top}px`,
      width: `${this.width}px`,
      height: `${this.height}px`,
    };
  }
}
