import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UicontrolsComponent } from './uicontrols.component';

describe('UicontrolsComponent', () => {
  let component: UicontrolsComponent;
  let fixture: ComponentFixture<UicontrolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UicontrolsComponent]
    });
    fixture = TestBed.createComponent(UicontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
