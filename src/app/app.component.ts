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
  categories: string[] = [];

  fetchData(url: string, callback: (data: any) => void): void {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  onAppSelected(app: any) {
    const appName = app?.name;
    this.fetchData('assets/app-details-testdata.json', (data) => {
      const appDetails = data[appName];
      if (appDetails) {
        this.selectedApp = { ...app, ...appDetails };
      }
    });
  }

  onGetCategories(): void {
    this.fetchData('assets/app-categories.json', (data) => {
      if (data?.categories) {
        this.categories = data.categories;
      }
    });
  }
}
