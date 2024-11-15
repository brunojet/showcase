import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.onGetCategories();
  }
  title = 'showcase';
  categories: string[] = [];
  appList: string[] = [];
  selectedApp: any;

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

  onGetCategories(): void {
    this.fetchData('assets/app-testdata.json', (data) => {
      if (data) {
        this.categories = Object.keys(data);
      }
    });
  }

  onSelectedCategory(category: any): void {
    this.fetchData('assets/app-testdata.json', (data) => {
      if (data && data[category]) {
        const appList = data[category].map((app: { name: string }) => app.name);
        this.appList = appList;
      }
    });
  }

  onAppSelected(appName: any) {
    this.fetchData('assets/app-testdata.json', (data) => {
      for (const category in data) {
        const appDetails = data[category].find(
          (app: { name: string }) => app.name === appName
        );
        if (appDetails) {
          this.selectedApp = { ...appDetails };
          break;
        }
      }
    });
  }
}
