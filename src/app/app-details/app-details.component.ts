import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AppDetails {
  name: String;
  painPoints: string;
  valueProposition: string;
}

@Component({
  selector: 'app-app-details',
  standalone: true,
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css'],
  imports: [CommonModule],
})
export class AppDetailsComponent {
  private defaultDetails: AppDetails = {
    name: '',
    painPoints: '',
    valueProposition: '',
  };
  private _selectedApp: AppDetails = this.defaultDetails;

  @Input()
  set selectedApp(value: AppDetails) {
    if (value && value.name !== this._selectedApp?.name) {
      this._selectedApp = value;
    }
  }

  get selectedApp(): AppDetails {
    return this._selectedApp;
  }
}
