import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-from-event',
  template: ` <button class="btn" #myButton>Click me</button> `,
  standalone: true,
  imports: [CommonModule],
})
export class FromEventComponent implements OnInit {
  @ViewChild('myButton', {static: true}) myButton!: ElementRef;

  ngOnInit() {
    const document$ = fromEvent(this.myButton.nativeElement, 'click');
    document$.pipe(tap((res) => console.log(res))).subscribe();
  }
}
