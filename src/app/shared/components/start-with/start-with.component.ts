import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  startWith, tap, Observable, interval } from 'rxjs';

@Component({
  selector: 'app-start-with',
  template: ` <p>Counter</p> {{ counter$ | async }} `,
  styleUrls: ['./start-with.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class StartWithComponent implements OnInit {
  counter$ !: Observable<number>;

  ngOnInit() {
    this.counter$ = interval(3000)
      .pipe(
        startWith(889),
        tap(res => console.log(res))
      )
  }
}
