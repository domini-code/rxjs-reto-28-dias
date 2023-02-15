import { of, single, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SingleComponent implements OnInit {
  private data$ = of(1, 2, 3, 4, 5, 6);

  ngOnInit() {
    this.data$
      .pipe(
        single((number: number) => number === 3),
        tap(res => console.log(res))
      )
    .subscribe()
  }
}
