import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialCardComponent } from './serial-card.component';

describe('SerialCardComponent', () => {
  let component: SerialCardComponent;
  let fixture: ComponentFixture<SerialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
