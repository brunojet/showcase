import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStepsComponent } from './app-steps.component';

describe('AppStepsComponent', () => {
  let component: AppStepsComponent;
  let fixture: ComponentFixture<AppStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
