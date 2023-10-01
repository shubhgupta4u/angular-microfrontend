import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UicomponentsComponent } from './uicomponents.component';

describe('UicomponentsComponent', () => {
  let component: UicomponentsComponent;
  let fixture: ComponentFixture<UicomponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UicomponentsComponent]
    });
    fixture = TestBed.createComponent(UicomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
