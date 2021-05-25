import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SerialCardComponent } from './serial-card.component';

describe('SerialCardComponent', () => {
  let component: SerialCardComponent;
  let fixture: ComponentFixture<SerialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerialCardComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
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
