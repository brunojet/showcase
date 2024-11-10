import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-steps',
  standalone: true,
  templateUrl: './app-steps.component.html',
  styleUrls: ['./app-steps.component.css'],
  imports: [CommonModule]
})
export class AppStepsComponent {
  steps = [
    'Step 1: Go to the app store',
    'Step 2: Search for the app',
    'Step 3: Click install',
    'Step 4: Open the app'
  ];
}
