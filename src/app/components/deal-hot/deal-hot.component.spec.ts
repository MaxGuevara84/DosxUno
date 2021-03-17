import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealHotComponent } from './deal-hot.component';

describe('DealHotComponent', () => {
  let component: DealHotComponent;
  let fixture: ComponentFixture<DealHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealHotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
