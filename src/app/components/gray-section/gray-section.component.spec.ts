import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraySectionComponent } from './gray-section.component';

describe('GraySectionComponent', () => {
  let component: GraySectionComponent;
  let fixture: ComponentFixture<GraySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
