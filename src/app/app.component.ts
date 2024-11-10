import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { AppStepsComponent } from './app-steps/app-steps.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AppListComponent,
    AppDetailsComponent,
    AppStepsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'showcase';
  selectedApp: any;

  onAppSelected(app: any) {
    this.selectedApp = app;
  }

}
