import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-start-stop',
  templateUrl:'./start-stop.component.html' ,
  styleUrls: ['./start-stop.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class StartStopComponent {
  private stop$ = new Subject<number>();
  counter!: number;

  start() {
    interval(1000)
      .pipe(
        takeUntil(this.stop$),
        tap((val:number)=> this.counter = val)
      )
    .subscribe((val:number) => console.log(val))
  }

  stop() {
    this.stop$.next(0);
  }
}
