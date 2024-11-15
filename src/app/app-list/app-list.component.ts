import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableListComponent } from '../base/selectable-list-component';

@Component({
  selector: 'app-app-list',
  standalone: true,
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
  imports: [CommonModule],
})
export class AppListComponent extends SelectableListComponent<string> {
}
