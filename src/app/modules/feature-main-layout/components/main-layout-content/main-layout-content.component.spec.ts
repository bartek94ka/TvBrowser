import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MainLayoutContentComponent } from './main-layout-content.component';

describe('MainLayoutContentComponent', () => {
  let component: MainLayoutContentComponent;
  let fixture: ComponentFixture<MainLayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutContentComponent ],
      providers: [
        Router,
        {
          provide: Store,
          useValue: {
            dispatch: jasmine.createSpy('dispatch'),
            pipe: jasmine.createSpy('pipe').and.callFake(() => new Observable()),
            select: jasmine.createSpy('select').and.callFake(() => new Observable())
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
