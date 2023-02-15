/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartWithComponent } from './start-with.component';

describe('StartWithComponent', () => {
  let component: StartWithComponent;
  let fixture: ComponentFixture<StartWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
