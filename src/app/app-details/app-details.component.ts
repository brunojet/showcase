import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AppDetails {
  painPoints: string;
  valueProposition: string;
}

@Component({
  selector: 'app-app-details',
  standalone: true,
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css'],
  imports: [CommonModule]
})
export class AppDetailsComponent {
  @Input() selectedApp: { name: string } | null = null;

  appsDetails: { [key: string]: AppDetails } = {
    'App 1': {
      painPoints: 'Pain points for App 1',
      valueProposition: 'Value proposition for App 1'
    },
    'App 2': {
      painPoints: 'Pain points for App 2',
      valueProposition: 'Value proposition for App 2'
    },
    'App 3': {
      painPoints: 'Pain points for App 3',
      valueProposition: 'Value proposition for App 3'
    },
    'App 4': {
      painPoints: 'Pain points for App 4',
      valueProposition: 'Value proposition for App 4'
    },
    'App 5': {
      painPoints: 'Pain points for App 5',
      valueProposition: 'Value proposition for App 5'
    },
    'App 6': {
      painPoints: 'Pain points for App 6',
      valueProposition: 'Value proposition for App 6'
    },
    'App 7': {
      painPoints: 'Pain points for App 7',
      valueProposition: 'Value proposition for App 7'
    },
    'App 8': {
      painPoints: 'Pain points for App 8',
      valueProposition: 'Value proposition for App 8'
    },
    'App 9': {
      painPoints: 'Pain points for App 9',
      valueProposition: 'Value proposition for App 9'
    },
    'App 10': {
      painPoints: 'Pain points for App 10',
      valueProposition: 'Value proposition for App 10'
    },
    'App 11': {
      painPoints: 'Pain points for App 11',
      valueProposition: 'Value proposition for App 11'
    },
    'App 12': {
      painPoints: 'Pain points for App 12',
      valueProposition: 'Value proposition for App 12'
    }
  };

  get appDetails(): AppDetails {
    return this.selectedApp ? this.appsDetails[this.selectedApp.name] || { painPoints: '', valueProposition: '' } : { painPoints: '', valueProposition: '' };
  }
}