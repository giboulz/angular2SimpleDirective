/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollaspeTestComponent } from './collaspe-test.component';

describe('CollaspeTestComponent', () => {
  let component: CollaspeTestComponent;
  let fixture: ComponentFixture<CollaspeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaspeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaspeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
