import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-list',
  standalone: true,
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
  imports: [CommonModule],
})
export class AppListComponent {
  private _appList: any[] = [];

  /* Wrapper necessary to automatically select the first item in the app list */
  @Input()
  set appList(value: any[]) {
    if (value && value.length > 0) {
      this._appList = value;
      this.selectApp(this._appList[0]);
    }
  }

  get appList(): any[] {
    return this._appList;
  }

  @Output() appSelected = new EventEmitter<any>();

  selectedApp: any = null;

  selectApp(app: any) {
    this.selectedApp = app;
    this.appSelected.emit(app);
  }

  isSelected(app: any): boolean {
    return this.selectedApp === app;
  }
}
