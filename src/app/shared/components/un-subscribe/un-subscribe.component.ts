import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, Subscription, tap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-un-subscribe',
  templateUrl: './un-subscribe.component.html',
  styleUrls: ['./un-subscribe.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class UnSubscribeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // private subscription: Subscription[] = [];
  data$ = interval(1000);

  ngOnInit() {
    this.data$
      .pipe(
        takeUntil(this.destroy$),
        tap((res: number) => console.log(res))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    // this.subscription.unsubscribe();
    // this.subscription.forEach((subscription) => subscription.unsubscribe());
  }

  test() {
    // this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
