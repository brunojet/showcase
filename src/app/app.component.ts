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
    AppStepsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'showcase';
  selectedApp: any;

  handleAppDetailsRequest(app: any): void {
    const appName = app?.name;
    fetch('assets/app-details-testdata.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const appDetails = data[appName];
        if (appDetails) {
          const selectedApp = { ...app, ...appDetails };
          this.selectedApp = selectedApp;
        }
      })
      .catch((error) => {
        console.error('Error fetching app details:', error);
      });
  }

  onAppSelected(app: any) {
    this.handleAppDetailsRequest(app);
  }
}
