import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsComponent } from './app-details.component';

describe('AppDetailsComponent', () => {
  let component: AppDetailsComponent;
  let fixture: ComponentFixture<AppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
