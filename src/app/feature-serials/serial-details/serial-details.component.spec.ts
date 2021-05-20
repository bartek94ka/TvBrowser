import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SerialDetailsComponent } from './serial-details.component';

describe('SerialDetailsComponent', () => {
  let component: SerialDetailsComponent;
  let fixture: ComponentFixture<SerialDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialDetailsComponent ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jasmine.createSpy('dispatch'),
            pipe: jasmine.createSpy('pipe').and.callFake(() => new Observable()),
            select: jasmine.createSpy('select').and.callFake(() => new Observable())
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
