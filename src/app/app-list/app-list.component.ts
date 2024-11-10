import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-list',
  standalone: true,
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
  imports: [CommonModule],
})
export class AppListComponent implements OnInit {
  @Output() appSelected = new EventEmitter<any>();

  apps = [
    { name: 'GourmetGuide', category: 'Alimentação' },
    { name: 'TripPlanner', category: 'Turismo' },
    { name: 'CarCare', category: 'Veículos' },
    { name: 'StyleSeeker', category: 'Vestuário' },
    { name: 'GadgetGuru', category: 'Tecnologia' },
    { name: 'HealthyEats', category: 'Alimentação' },
    { name: 'Wanderlust', category: 'Turismo' },
    { name: 'RideShare', category: 'Veículos' },
    { name: 'TrendTracker', category: 'Vestuário' },
    { name: 'SmartHome', category: 'Tecnologia' },
    { name: 'FitnessFreak', category: 'Saúde' },
    { name: 'PetPal', category: 'Animais' },
    { name: 'EduMaster', category: 'Educação' },
    { name: 'FinanceFriend', category: 'Finanças' },
    { name: 'EventExpert', category: 'Eventos' },
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
