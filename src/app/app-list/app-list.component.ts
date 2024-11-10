import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-list',
  standalone: true,
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
  imports: [CommonModule]
})
export class AppListComponent implements OnInit {
  @Output() appSelected = new EventEmitter<any>();

  apps = [
    { name: 'App 1' },
    { name: 'App 2' },
    { name: 'App 3' },
    { name: 'App 4' },
    { name: 'App 5' },
    { name: 'App 6' },
    { name: 'App 7' },
    { name: 'App 8' },
    { name: 'App 9' },
    { name: 'App 10' },
    { name: 'App 11' },
    { name: 'App 12' }
  ];

  ngOnInit() {
    if (this.apps.length > 0) {
      this.selectApp(this.apps[0]);
    }
  }

  selectApp(app: any) {
    this.appSelected.emit(app);
  }
}