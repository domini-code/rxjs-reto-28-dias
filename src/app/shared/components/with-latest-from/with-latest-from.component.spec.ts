/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WithLatestFromComponent } from './with-latest-from.component';

describe('WithLatestFromComponent', () => {
  let component: WithLatestFromComponent;
  let fixture: ComponentFixture<WithLatestFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithLatestFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithLatestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
